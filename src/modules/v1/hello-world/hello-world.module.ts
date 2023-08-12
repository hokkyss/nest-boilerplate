import { Module } from '@nestjs/common';

import { HELLO_WORLD_REPOSITORY } from '../../../repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '../../../services/hello-world.service';

import HelloWorldV1Controller from './hello-world.controller';
import HelloWorldV1Repository from './hello-world.repository';
import HelloWorldV1Service from './hello-world.service';

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
export default class HelloWorldV1Module {}
