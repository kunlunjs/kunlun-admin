import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class UploadFileVo {
  @ApiProperty({
    description: '文件网络地址'
  })
  @IsNotEmpty()
  url: string

  @ApiPropertyOptional({
    description: '文件大小'
  })
  @IsOptional()
  size: number

  @ApiPropertyOptional({
    description: 'MIME Type'
  })
  @IsOptional()
  mimetype: string

  @ApiPropertyOptional({
    description: 'Field'
  })
  @IsOptional()
  fieldName: string

  @ApiPropertyOptional({
    description: '原始文件名'
  })
  @IsOptional()
  originalName: string
}
