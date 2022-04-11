import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor
} from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

type Response<
  T extends
    | null
    | Record<string, any>
    | Record<string, any>[]
    | {
        total: number
        items: Record<string, any>[]
      }
> = { data: T } // | T

export type FinallyResponse<
  T extends
    | null
    | Record<string, any>
    | Record<string, any>[]
    | {
        total: number
        items: Record<string, any>[]
      }
> = {
  data: T
  status: number
  success: boolean
  message: string | null
  errCode: string | null
  errMessage: string | null
}

/**
 * 统一返回 JSON 结果
 */
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp()
    return next.handle().pipe(
      map(data => {
        const response = ctx.getResponse()
        const status = response.statusCode
        const json: FinallyResponse<T> = {
          data,
          status,
          success: true,
          message: null,
          errCode: null,
          errMessage: null
        }
        return json
      })
    )
  }
}
