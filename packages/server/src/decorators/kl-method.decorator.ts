import {
  applyDecorators,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UseGuards
} from '@nestjs/common'
import { ApiBody, ApiExcludeEndpoint, ApiOperation } from '@nestjs/swagger'
import type { Method } from 'axios'
import { pathToRegexp } from 'path-to-regexp'
// TODO: 转移到 @generated 中
import type { AllDtos, AllVos, EndpointsItem, Interfaces } from '@/@generated'
import { endpoints } from '@/@generated'
import * as allDtos from '@/@generated/dto'
import * as allVos from '@/@generated/vo'
import { JwtAuthGuard } from '@/guards'
import type { SymmetricDifference } from '@/types'
import { ApiResponse } from './api.response.decorator'
import { KLPlatform } from './kl-platform.decorator'
import type { Plateform } from './kl-platform.decorator'
import { KLPublic } from './kl-public.decorator'

type KLMethodType = SymmetricDifference<
  Uppercase<Method>,
  'PATCH' | 'HEAD' | 'LINK' | 'PURGE' | 'UNLINK' | 'OPTIONS'
>

type Extra = {
  method?: KLMethodType
  path?: string
  /**
   * 是否开放接口
   */
  isPublic: boolean
  /**
   * 是否隐藏接口
   */
  isHidden: boolean
  /**
   * 允许访问的平台
   */
  platform: Plateform | null
}

export const pathRegs = []
export const summaries: {
  summaries: string[]
  regexps: {
    summary: string
    regexp: RegExp
  }[]
} = {
  summaries: [],
  regexps: []
}

export function KLMethod(
  summary: Interfaces,
  { isPublic, isHidden, platform }: Extra = {
    isPublic: false,
    isHidden: false,
    platform: null
  }
): MethodDecorator {
  const item = endpoints[summary] as EndpointsItem

  const path = item.path
  const method = item.method as KLMethodType
  const map: Record<KLMethodType, MethodDecorator> = {
    GET: Get(path),
    PUT: Put(path),
    POST: Post(path),
    DELETE: Delete(path)
  }

  const body =
    ['POST', 'PUT'].includes(method) && item.dto && allDtos[item.dto as AllDtos]
  let response
  if (item.vo) {
    response = Array.isArray(item.vo)
      ? [allVos[item.vo[0] as AllVos]]
      : allVos[item.vo as AllVos]
  }

  if (!summaries.summaries.includes(summary)) {
    summaries.summaries.push(summary)
    summaries.regexps.push({
      summary,
      regexp: pathToRegexp(`${method} /api${path}`, [], {
        strict: true
      })
    })
  }

  const decorators: MethodDecorator[] = [
    map[method],
    isPublic && KLPublic(),
    platform && KLPlatform(platform),
    !isPublic && UseGuards(JwtAuthGuard),
    ['PUT', 'PATCH'].includes(method) && HttpCode(HttpStatus.OK)
  ].filter(Boolean)

  const swaggerEnable = process.env.SWAGGER_ENABLE !== 'false'
  if (swaggerEnable) {
    decorators.push(
      ...[
        summary && ApiOperation({ summary }),
        isHidden && ApiExcludeEndpoint(),
        body && ApiBody({ type: body }),
        response && ApiResponse({ method, pagination: true, type: response })
      ].filter(Boolean)
    )
  }

  return applyDecorators(...decorators)
}