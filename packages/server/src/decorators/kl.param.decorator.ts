import type { ExecutionContext } from '@nestjs/common'
import { createParamDecorator } from '@nestjs/common'
import type { Request } from 'express'

export const KLParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>()
    const { params } = request
    if (data === 'id' && !isNaN(Number(params['id']))) {
      return Number(params['id'])
    }
    if ('id' in params && !isNaN(Number(params['id']))) {
      return { ...params, id: Number(params['id']) }
    }
    return data ? params[data as string] : params
  }
)
