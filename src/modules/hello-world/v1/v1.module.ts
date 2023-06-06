import { HELLO_WORLD_REPOSITORY } from '@/repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Module } from '@nestjs/common';
import HelloWorldV1Controller from './v1.controller';
import HelloWorldV1Repository from './v1.repository';
import HelloWorldV1Service from './v1.service';

@Module({
  controllers: [HelloWorldV1Controller],
  providers: [
    {
      provide: HELLO_WORLD_REPOSITORY,
      useClass: HelloWorldV1Repository,
    },
    {
      provide: HELLO_WORLD_SERVICE,
      useClass: HelloWorldV1Service,
    },
  ],
})
export class HelloWorldV1Module {}
