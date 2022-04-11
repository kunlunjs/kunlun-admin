import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import chalk from 'chalk'
import { AppModule } from './app.module'
import type { CorsConfig, NestConfig } from './common/configs'
import { PrismaService, PrismaClientExceptionFilter } from './common/prisma'
import { setupSwagger } from './swagger/setup'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const prismaService: PrismaService = app.get<PrismaService>(PrismaService)
  prismaService.enableShutdownHooks(app)

  const configService = app.get<ConfigService>(ConfigService)
  const nestConfig = configService.get<NestConfig>('nest', { infer: true })
  const corsConfig = configService.get<CorsConfig>('cors')

  const { httpAdapter } = app.get(HttpAdapterHost)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  // app.useGlobalGuards()
  // app.useGlobalPipes()
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))

  if (corsConfig?.enabled) {
    app.enableCors()
  }

  if (process.env.SWAGGER_ENABLE === 'false') {
    setupSwagger(app)
  }

  await app.listen(process.env.PORT || nestConfig.port || 3000)
  console.log(
    chalk.green(
      `⚡️ Application is running on: ${chalk.underline(
        (await app.getUrl()).replace('[::1]', 'localhost')
      )}`
    )
  )
}

bootstrap()
