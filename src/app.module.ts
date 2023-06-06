import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { JoiPipeModule } from 'nestjs-joi';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';

@Module({
  imports: [
    JoiPipeModule,
    HelloWorldModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
    }),
    // { module: PrismaModule, global: true },
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
