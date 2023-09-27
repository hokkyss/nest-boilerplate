import type { Prisma } from '@prisma/client';

import { ConfigurableModuleBuilder } from '@nestjs/common';

export enum SoftDeleteMode {
  All = 'All',
  Read = 'Read',
  Write = 'Write',
}

export type SoftDeleteOption =
  | [Prisma.ModelName, SoftDeleteMode]
  | Prisma.ModelName;

export type PrismaModuleConfig = {
  softDeleteOptions?: SoftDeleteOption[];
};

const PrismaModuleDef = new ConfigurableModuleBuilder<PrismaModuleConfig>()
  .setFactoryMethodName('register')
  .build();

export default PrismaModuleDef;
