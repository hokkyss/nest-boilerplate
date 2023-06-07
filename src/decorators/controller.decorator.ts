import {
  ControllerOptions,
  Controller as NestController,
  applyDecorators,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

const Controller = (options: ControllerOptions) =>
  applyDecorators(
    ApiTags(
      ...(options.path
        ? typeof options.path === 'string'
          ? [options.path]
          : options.path
        : []),
    ),
    NestController(options),
  );

export default Controller;
