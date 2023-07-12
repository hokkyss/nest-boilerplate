import type IRegisterDto from '@/dto/register.dto';
import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export default class RegisterDto implements IRegisterDto {
  @ApiProperty({ required: true, type: 'string', example: 'John Doe' })
  @JoiSchema(Joi.string().required().label('name'))
  name: string;

  @ApiProperty({
    required: true,
    type: 'string',
    example: 'john-doe@email.com',
  })
  @JoiSchema(Joi.string().email().required())
  email: string;

  @ApiProperty({
    required: true,
    type: 'string',
    example: 'password',
  })
  @JoiSchema(Joi.string().required())
  password: string;
}
