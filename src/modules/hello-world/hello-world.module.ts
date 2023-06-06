import { Module } from '@nestjs/common';
import { HelloWorldV1Module } from './v1/v1.module';

@Module({
  imports: [HelloWorldV1Module],
})
export class HelloWorldModule {}
