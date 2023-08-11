import type {
  CompatibleZodInfer,
  CompatibleZodType,
  MergeZodSchemaOutput,
} from '@anatine/zod-nestjs';
import type { OpenApiZodAny } from '@anatine/zod-openapi';

import { createZodDto as anatineCreateZodDto } from '@anatine/zod-nestjs';

type ZodDtoStatic<T extends CompatibleZodType = CompatibleZodType> = {
  create(input: CompatibleZodInfer<T>): CompatibleZodInfer<T>;
  new (): MergeZodSchemaOutput<T>;
  zodSchema: T;
};

export const createZodDto: <T extends OpenApiZodAny>(
  zodSchema: T,
) => ZodDtoStatic<T> = anatineCreateZodDto;
