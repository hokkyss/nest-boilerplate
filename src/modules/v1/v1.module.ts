import { Module } from '@nestjs/common';
import HelloWorldV1Module from './hello-world/hello-world.module';

@Module({
  imports: [HelloWorldV1Module],
})
export class V1Module {}
