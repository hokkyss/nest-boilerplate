import ISignInDto from '@/dto/sign-in.dto';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export default class SignInDto implements ISignInDto {
  @JoiSchema(Joi.string().email().required())
  email: string;

  @JoiSchema(Joi.string().required())
  password: string;
}
