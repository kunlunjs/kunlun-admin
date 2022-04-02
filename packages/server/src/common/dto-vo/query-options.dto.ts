import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional } from 'class-validator'

enum ELike {
  true = 'true',
  false = 'false'
}

export class QueryOptionsDto {
  // @ApiHideProperty()
  // _take?: number

  // @ApiHideProperty()
  // _skip?: number

  @ApiPropertyOptional({
    minimum: 1,
    default: 10,
    description: '每页数量'
  })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  _pageSize?: number

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
    description: '第几页'
  })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  _pageNumber?: number

  @ApiPropertyOptional({
    description: '是否模糊查询 true - 是 false - 否，默认： true'
  })
  @IsOptional()
  @IsEnum(ELike)
  _like?: boolean

  @ApiPropertyOptional({
    description: `排序（非关系字段），asc - 升序 desc - 降序
      example: /path?_sorter=updatedAt:desc,type:asc&_pageNumber=10`
  })
  @IsOptional()
  _sorter?: string

  // @ApiPropertyOptional({
  //   description: '是否缓存',
  //   default: false
  // })
  // @Type(() => Boolean)
  // @IsOptional()
  // _cache?: string
}
