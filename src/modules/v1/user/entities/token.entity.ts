import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const tokenEntity = z
  .object({
    token: z.string(),
  })
  .openapi({});

export default class Token extends createZodDto(tokenEntity) {}
