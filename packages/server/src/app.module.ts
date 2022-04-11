import path from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AppController } from './app.controller'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'
import { config } from './common/configs'
import { PrismaModule, prismaLoggingMiddleware } from './common/prisma'
import { GqlConfigService } from './gql-config.service'
// import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    /* ---------------- 加载配置 ---------------- */
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    /* ---------------- 引入 Prisma ---------------- */
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [prismaLoggingMiddleware()]
      }
    }),
    /* ---------------- 静态文件服务 ---------------- */
    ServeStaticModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return [
          {
            rootPath: path.resolve(
              process.cwd(),
              config.get('RESOURCE_STATIC_PATH') as string
            ),
            exclude: ['/api*', '/swagger*'],
            serveStaticOptions: {
              index: 'endpoints.html'
            }
          }
        ]
      }
    }),
    /* ---------------- 引入 GraphQL ---------------- */
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService
    })
    // AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
  exports: []
})
export class AppModule {}
