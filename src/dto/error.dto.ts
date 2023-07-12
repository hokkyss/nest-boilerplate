import { createZodDto } from '@anatine/zod-nestjs';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { HttpStatus } from '@nestjs/common';
import { z } from 'zod';

extendZodWithOpenApi(z);

const errorSchema = z.object({
  status: z.nativeEnum(HttpStatus),
  code: z
    .array(
      z
        .string()
        .refine((value) => value.split('/').length === 2, {
          message: 'Error code must follow <entity>/<error> pattern.',
        })
        .openapi({ example: 'hello-world/not-found' }),
    )
    .min(1),
});

export default class ErrorDto extends createZodDto(errorSchema) {}
