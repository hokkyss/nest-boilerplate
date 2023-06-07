import { ApiProperty } from '@nestjs/swagger';

export default class ErrorDto {
  @ApiProperty({ type: 'number' })
  status: number;

  @ApiProperty({ type: 'string' })
  code: string;
}
