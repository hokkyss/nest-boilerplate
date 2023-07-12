import { HELLO_WORLD_REPOSITORY } from '@/repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Module } from '@nestjs/common';
import HelloWorldV2Controller from './hello-world.controller';
import HelloWorldV2Repository from './hello-world.repository';
import HelloWorldV2Service from './hello-world.service';

@Module({
  controllers: [HelloWorldV2Controller],
  providers: [
    {
      provide: HELLO_WORLD_REPOSITORY,
      useClass: HelloWorldV2Repository,
    },
    {
      provide: HELLO_WORLD_SERVICE,
      useClass: HelloWorldV2Service,
    },
  ],
})
export default class HelloWorldV2Module {}
