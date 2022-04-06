import type { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { omit } from 'lodash'
import type { QueryOptionsDto } from '@/common'

/**
 * 转换型管道：将查询分页相关参数转为整形
 */
@Injectable()
export class KLParseQueryPipe<
  T extends QueryOptionsDto & { _like?: 'true' | 'false' }
> implements PipeTransform
{
  async transform(query: T, metadata: ArgumentMetadata) {
    const {
      _pageSize = process.env.PAGE_SIZE || 10,
      _pageNumber = process.env.PAGE_NUMBER || 1,
      _like = process.env.QUERY_LIKE || 'true'
    } = query
    const obj = omit(query, ['_pageNumber', '_pageSize', '_like']) as any as {
      _take: number
      _skip: number
      _like: boolean
    }
    if (_pageSize && _pageNumber) {
      obj._skip = (Number(_pageNumber) - 1) * Number(_pageSize)
    } else {
      obj._skip = Number(_pageNumber) - 1
    }
    if (_pageSize) {
      obj._take = Number(_pageSize)
    } else {
      obj._take = Number(_pageSize)
    }

    if (_like === 'true') {
      obj._like = true
    } else if (_like === 'false') {
      obj._like = false
    }
    return obj
  }
}
