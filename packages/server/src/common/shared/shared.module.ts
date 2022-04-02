import { Global, Module } from '@nestjs/common'
import { OSSService } from './oss.service'

const providers: Parameters<typeof Module>[0]['providers'] = [
  OSSService
]

@Global()
@Module({
  providers: [...providers],
  exports: [...providers]
})
export class SharedModule {}
