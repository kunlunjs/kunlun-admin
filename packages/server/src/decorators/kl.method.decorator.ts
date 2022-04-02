import type { Type } from '@nestjs/common'
import { UseGuards } from '@nestjs/common'
import {
  applyDecorators,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put
} from '@nestjs/common'
import { ApiBody, ApiExcludeEndpoint, ApiOperation } from '@nestjs/swagger'
import type { Method } from 'axios'
import { pathToRegexp } from 'path-to-regexp'
import type { SchemaModels } from '@/@generated'
import { JwtAuthGuard } from '@/guards'
import type { SymmetricDifference } from '@/types'
import { ApiResponse } from './api.response.decorator'
import type { Plateform } from './kl.platform.decorator'
import { KLPublic } from './kl.public.decorator'
import { summaries } from './kl.super-method.decorator'

type KLMethodType = SymmetricDifference<
  Uppercase<Method>,
  'PATCH' | 'HEAD' | 'LINK' | 'PURGE' | 'UNLINK' | 'OPTIONS'
>

type KLMethodParameters = {
  /**
   * prisma schema 中定义的 Model
   */
  model?: SchemaModels
  /**
   * 允许访问的平台
   */
  platform?: Plateform
  /**
   * 是否不在 swagger 中显示
   */
  isHidden?: boolean
  /**
   * 是否开放接口，即无需 token
   */
  isPublic?: boolean
  /**
   * 是否分页
   */
  pagination?: boolean
  /**
   * req.body
   */
  body?: Type<unknown>
  /**
   * req.query，当在控制器中使用的 @Query() query: QueryType 中的 QueryType 中使用了 Swagger 则无需此参数
   */
  query?: Type<unknown>

  /**
   * HTTP 响应
   */
  response?: Type<unknown> | Type<unknown>[]
}

export function KLMethod(
  /**
   * 接口方法
   */
  method: KLMethodType,
  /**
   * 接口路径
   */
  path: string,
  /**
   * 接口名
   */
  summary: string,
  /**
   * 额外信息
   */
  {
    model,
    platform,
    body,
    response,
    isHidden = false,
    isPublic = false,
    pagination = false
  }: KLMethodParameters = {}
): MethodDecorator {
  const map: Record<KLMethodType, any> = {
    GET: Get(path),
    PUT: Put(path),
    POST: Post(path),
    DELETE: Delete(path)
  }
  // const pt = platform || isValidPlatform(summary)

  if (!summaries.summaries.includes(summary)) {
    summaries.summaries.push(summary)
    summaries.regexps.push({
      summary,
      regexp: pathToRegexp(`${method} /api${path}`, [], {
        strict: true
      })
    })
  }

  const decorators = [
    map[method],
    // pt && KLPlatform(pt),
    isPublic && KLPublic(),
    !isPublic && UseGuards(JwtAuthGuard),
    ApiOperation({ summary }),
    ['PUT', 'PATCH'].includes(method) && HttpCode(HttpStatus.OK),
    isHidden && ApiExcludeEndpoint,
    // ApiParam(),
    body && ApiBody({ type: body }),
    response && ApiResponse({ method, pagination, type: response })
  ].filter(Boolean)

  return applyDecorators(...decorators)
}
