import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { JoiPipeModule } from 'nestjs-joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [JoiPipeModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
