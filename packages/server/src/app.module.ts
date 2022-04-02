import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'
import { config } from './common/configs'
import { ServeStaticModule } from '@nestjs/serve-static'
import { PrismaModule, prismaLoggingMiddleware } from './common/prisma'
import { GqlConfigService } from './gql-config.service'
// import { AuthModule } from './modules/auth/auth.module'
// import { UserModule } from './modules/user/user.module'
// import { RoleModule } from './modules/role/role.module'
// import { MenuModule } from './modules/menu/menu.module'
// import { JournalModule } from './modules/journal/journal.module'
import { CronModule } from './modules/cron/cron.module'
import path from 'path'
// import { AnnouncementModule } from './modules/announcement/announcement.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
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
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService
    }),
    // AuthModule,
    // UserModule,
    // RoleModule,
    // MenuModule,
    // JournalModule,
    CronModule,
    // AnnouncementModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
  exports: []
})
export class AppModule {}
