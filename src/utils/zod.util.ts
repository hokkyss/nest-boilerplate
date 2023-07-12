import {
  createZodDto as anatineCreateZodDto,
  type CompatibleZodInfer,
  type CompatibleZodType,
  type MergeZodSchemaOutput,
} from '@anatine/zod-nestjs';
import { type OpenApiZodAny } from '@anatine/zod-openapi';

type ZodDtoStatic<T extends CompatibleZodType = CompatibleZodType> = {
  new (): MergeZodSchemaOutput<T>;
  zodSchema: T;
  create(input: CompatibleZodInfer<T>): CompatibleZodInfer<T>;
};

export const createZodDto: <T extends OpenApiZodAny>(
  zodSchema: T,
) => ZodDtoStatic<T> = anatineCreateZodDto;
