import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { JoiPipeValidationException } from 'nestjs-joi';

@Catch(JoiPipeValidationException)
export default class JoiPipeValidationExceptionFilter
  implements ExceptionFilter
{
  catch(exception: JoiPipeValidationException, _host: ArgumentsHost) {
    throw new BadRequestException(exception.message);
  }
}
