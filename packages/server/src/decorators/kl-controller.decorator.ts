import { applyDecorators, Controller, SetMetadata } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'
import { omit } from 'lodash'
import type { MetadataType } from '@/types'

export function KLController(
  /**
   * 中文接口分类
   */
  tag = '',
  /**
   * 此类接口路径前缀
   */
  prefix = '',
  /**
   * 允许传多个 metadata，例如 SetMetadata('roles', ['user', 'admin'])
   */
  extra: Record<string, MetadataType> = {
    isAuth: true
  }
): ClassDecorator {
  const swaggerEnable = process.env.SWAGGER_ENABLE !== 'false'
  const Auths =
    extra.isAuth === true
      ? swaggerEnable
        ? ([
            tag && ApiTags(tag),
            ApiBearerAuth(),
            ApiUnauthorizedResponse()
          ].filter(Boolean) as (
            | ClassDecorator
            | MethodDecorator
            | PropertyDecorator
          )[])
        : []
      : []
  const metadatas = Object.keys(omit(extra, ['isAuth']))
  const Metadatas = metadatas.length
    ? metadatas.map(i => SetMetadata(i, extra[i]))
    : []
  return applyDecorators(Controller(prefix), ...Auths, ...Metadatas)
}
