import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

const paginatedResponseSchema = <T>(model: z.ZodType<T>) =>
  z
    .object({
      limit: z.number().openapi({
        description: 'The number of elements in this page',
      }),
      offset: z.number().openapi({
        description: 'Index of the first element in this page',
      }),
      total: z.number().openapi({
        description: 'The number of elements in total',
      }),
    })
    .merge(z.object({ results: z.array(model) }));

export default paginatedResponseSchema;
