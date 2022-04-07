import type { Type } from '@nestjs/common'
import { applyDecorators } from '@nestjs/common'
import {
  ApiNoContentResponse,
  ApiOkResponse,
  getSchemaPath
} from '@nestjs/swagger'
import type { Method } from 'axios'
import { ApiResponseVo } from '../common'

type ApiResponseType = <T extends Type<any>>(options: {
  type: T | T[]
  title?: string
  method?: Method
  /**
   * 返回是否数组
   */
  isArray?: boolean
  /**
   * 返回是否分页
   */
  pagination?: boolean

  description?: string
}) => MethodDecorator & ClassDecorator

export const ApiResponse: ApiResponseType = ({
  type,
  title,
  method = 'GET',
  description = '',
  pagination = true
}) => {
  const isArray = Array.isArray(type)
  const dto = isArray ? type[0] : type
  const t = title || `${method} ApiResponseOf${dto.name}${isArray ? '[]' : ''}`

  if (method === 'GET' && isArray) {
    return pagination
      ? applyDecorators(
          ApiOkResponse({
            description,
            schema: {
              title: t,
              allOf: [
                {
                  $ref: getSchemaPath(ApiResponseVo)
                },
                {
                  properties: {
                    data: {
                      properties: {
                        total: {
                          type: 'integer',
                          description: '总数'
                        },
                        items: {
                          type: 'array',
                          items: {
                            $ref: getSchemaPath(dto)
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          })
        )
      : applyDecorators(
          ApiOkResponse({
            description,
            schema: {
              title: t,
              allOf: [
                {
                  $ref: getSchemaPath(ApiResponseVo)
                },
                {
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        $ref: getSchemaPath(dto)
                      }
                    }
                  }
                }
              ]
            }
          })
        )
  }
  if (method === 'POST') {
    return applyDecorators(
      ApiOkResponse({
        description,
        schema: {
          title: t,
          allOf: [
            {
              $ref: getSchemaPath(ApiResponseVo)
            },
            {
              properties: {
                data: {
                  $ref: getSchemaPath(dto)
                }
              }
            }
          ]
        }
      })
    )
  }
  if (method === 'DELETE') {
    return applyDecorators(
      ApiNoContentResponse({
        description,
        schema: {
          title: t
        }
      })
    )
  }

  // (method === 'GET' && !isArray) || method === 'PUT'
  return applyDecorators(
    ApiOkResponse({
      description,
      schema: {
        title: t,
        allOf: [
          {
            $ref: getSchemaPath(ApiResponseVo)
          },
          {
            properties: {
              data: {
                $ref: getSchemaPath(dto)
              }
            }
          }
        ]
      }
    })
  )
}
