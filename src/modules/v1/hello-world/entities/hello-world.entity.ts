import { createZodDto } from '@/utils/zod.util';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

export const helloWorldV1Entity = z.object({
  message: z.string().nonempty().openapi({
    description: 'Our greetings',
  }),
});

export default class HelloWorldV1 extends createZodDto(helloWorldV1Entity) {}
