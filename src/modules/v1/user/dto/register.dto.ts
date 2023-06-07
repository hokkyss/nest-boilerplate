import IRegisterDto from '@/dto/register.dto';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export default class RegisterDto implements IRegisterDto {
  @JoiSchema(Joi.string().required().label('name'))
  name: string;

  @JoiSchema(Joi.string().email().required())
  email: string;

  @JoiSchema(Joi.string().required())
  password: string;
}
