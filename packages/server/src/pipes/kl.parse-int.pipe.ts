import type { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { BadRequestException, Injectable } from '@nestjs/common'

/**
 * Override nest 内置管道
 */
@Injectable()
export class KLParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10)
    if (isNaN(val)) {
      throw new BadRequestException('Validation Error')
    }
    return val
  }
}
