import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

const registerDto = z.object({
  email: z.string().email().openapi({ example: 'John Doe' }),
  name: z.string().openapi({ example: 'john-doe@email.com' }),
  password: z.string().openapi({ example: 'password' }),
});

export default class RegisterDto extends createZodDto(registerDto) {}
