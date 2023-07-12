import type ISignInDto from '@/dto/sign-in.dto';
import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export default class SignInDto implements ISignInDto {
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
