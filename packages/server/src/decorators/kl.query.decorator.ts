import { Query } from '@nestjs/common'
import { KLParseQueryPipe } from '@/pipes'

export const KLQuery = () => {
  return Query(new KLParseQueryPipe())
}
