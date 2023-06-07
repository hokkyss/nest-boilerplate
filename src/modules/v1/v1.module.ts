import { Module } from '@nestjs/common';
import HelloWorldV1Module from './hello-world/hello-world.module';
import UserV1Module from './user/user.module';

@Module({
  imports: [HelloWorldV1Module, UserV1Module],
})
export class V1Module {}
