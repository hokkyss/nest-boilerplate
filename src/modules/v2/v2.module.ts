import { Module } from '@nestjs/common';
import HelloWorldV2Module from './hello-world/hello-world.module';

@Module({
  imports: [HelloWorldV2Module],
})
export class V2Module {}
