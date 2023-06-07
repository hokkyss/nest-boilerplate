import { ApiProperty } from '@nestjs/swagger';

export default class PaginatedDto<T> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;

  results: T[];
}
