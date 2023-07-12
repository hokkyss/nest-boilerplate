import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const signInDto = z.object({
  email: z.string().email().openapi({ example: 'john-doe@email.com' }),
  password: z.string().openapi({ example: 'password' }),
});

export default class SignInDto extends createZodDto(signInDto) {}
