import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class HelloWorld {
  @Expose()
  @ApiProperty({ type: 'string' })
  message: string;

  constructor(attributes: Partial<HelloWorld>) {
    Object.assign(this, attributes);
  }
}
