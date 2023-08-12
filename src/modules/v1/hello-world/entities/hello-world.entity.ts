import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { z } from 'zod';

import { createZodDto } from '../../../../utils/zod.util';

extendZodWithOpenApi(z);

export const helloWorldV1Entity = z.object({
  message: z.string().nonempty().openapi({
    description: 'Our greetings',
  }),
});

export default class HelloWorldV1 extends createZodDto(helloWorldV1Entity) {}
