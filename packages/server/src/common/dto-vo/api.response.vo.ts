import { HttpStatus } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'

export class ApiResponseVo<T> {
  @ApiProperty({
    type: 'integer',
    default: HttpStatus.OK,
    description: '响应状态码'
  })
  status: HttpStatus

  @ApiProperty({
    description: '是否成功'
  })
  success: boolean

  @ApiProperty({
    description: '提示信息',
    example: ''
  })
  message: string

  @ApiProperty({
    description: '错误码',
    example: null
  })
  errorCode: string

  @ApiProperty({
    description: '错误信息',
    example: null
  })
  errorMessage: string

  data: T
}
