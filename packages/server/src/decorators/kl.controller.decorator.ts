import {
  applyDecorators,
  Controller,
  SetMetadata
  // UseGuards
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'
import { omit } from 'lodash'
// import { JwtAuthGuard, RolesGuard } from '@/guards'
import type { SchemaGeneratedModelTags } from '@/@generated'
import type { MetadataType } from '@/types'

export function KLController(
  /**
   * 中文接口分类
   */
  tag: SchemaGeneratedModelTags | string,
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
  const Auths =
    extra.isAuth === true
      ? [
          ApiBearerAuth(),
          ApiUnauthorizedResponse()
          // UseGuards(JwtAuthGuard, RolesGuard)
        ]
      : []
  const metadatas = Object.keys(omit(extra, ['isAuth']))
  const Metadatas = metadatas.length
    ? metadatas.map(i => SetMetadata(i, extra[i]))
    : []
  return applyDecorators(
    Controller(prefix),
    // UseGuards(JwtAuthGuard),
    ApiTags(tag),
    ...Auths,
    ...Metadatas
  )
}
