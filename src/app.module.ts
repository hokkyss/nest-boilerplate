import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import HttpExceptionFilter from './filters/http.filter';
import V1Module from './modules/v1/v1.module';
import V2Module from './modules/v2/v2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    V1Module,
    V2Module,
    // PrismaModule.registerAsync({
    //   imports: [],
    //   inject: [],
    //   useFactory: () => ({
    //     softDeleteOptions: ['User'],
    //   }),
    // }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export default class AppModule {}
