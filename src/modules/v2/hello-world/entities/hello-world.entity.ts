import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const helloWorldV2Entity = z.object({
  message: z.string().nonempty(),
});

export default class HelloWorldV2 extends createZodDto(helloWorldV2Entity) {}
