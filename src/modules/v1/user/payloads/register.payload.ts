import { createZodDto } from '@anatine/zod-nestjs';

import { z } from 'zod';

const registerDto = z.object({
  email: z.string().email().openapi({ example: 'John Doe' }),
  password: z.string().openapi({ example: 'password' }),
  name: z.string().openapi({ example: 'john-doe@email.com' }),
});

export default class RegisterDto extends createZodDto(registerDto) {}
