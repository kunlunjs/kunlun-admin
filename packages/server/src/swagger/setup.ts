import type { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import type { AllDtos, AllVos } from '@/@generated'
import * as allDtos from '@/@generated/dto'
import * as allVos from '@/@generated/vo'
import { ApiResponseVo, UploadFileVo } from '@/common'
import pkg from '../../package.json'

const dtos = Object.keys(allDtos).map(i => allDtos[i as AllDtos])
const vos = Object.keys(allVos).map(i => allVos[i as AllVos])

// https://docs.nestjs.com/openapi/introduction#installation
export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('KUNLUN-ADMIN 接口文档')
    // .setDescription(``) // 支持 HTML
    .setVersion(pkg.version)
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options, {
    // https://docs.nestjs.com/openapi/types-and-parameters#extra-models
    extraModels: [
      ApiResponseVo,
      UploadFileVo,
      ...dtos,
      ...vos
    ]
  })
  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true
    },
    customSiteTitle: 'KUNLUN-ADMIN 接口文档'
  })
}
