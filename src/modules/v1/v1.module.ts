import { Module } from '@nestjs/common';

import HelloWorldV1Module from './hello-world/hello-world.module';

@Module({
  imports: [
    HelloWorldV1Module,
    // UserV1Module,
  ],
})
export default class V1Module {}
