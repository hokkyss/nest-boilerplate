import IToken from '@/models/token.model';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export default class Token implements IToken {
  @Expose()
  @ApiProperty({ type: 'string' })
  token: string;

  constructor(attributes: Partial<IToken>) {
    Object.assign(this, attributes);
  }
}
