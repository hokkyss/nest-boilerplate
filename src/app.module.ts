import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { JoiPipeModule } from 'nestjs-joi';
import HttpExceptionFilter from './filters/http.filter';
import JoiPipeValidationExceptionFilter from './filters/joi.filter';
import V1Module from './modules/v1/v1.module';
import V2Module from './modules/v2/v2.module';

@Module({
  imports: [
    JoiPipeModule.forRoot({
      pipeOpts: {
        skipErrorFormatting: true,
        usePipeValidationException: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      cache: true,
    }),
    V1Module,
    V2Module,
    // { module: PrismaModule, global: true },
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: JoiPipeValidationExceptionFilter,
    },
  ],
})
export default class AppModule {}
