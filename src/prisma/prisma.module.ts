import type { DynamicModule } from '@nestjs/common';

import type { PrismaModuleConfig } from './prisma.module-definition';

import { Module } from '@nestjs/common';

import PrismaModuleDef from './prisma.module-definition';
import PrismaService, { PRISMA_SERVICE } from './prisma.service';

type PrismaModuleAsyncOptions = Required<
  Pick<
    typeof PrismaModuleDef.ASYNC_OPTIONS_TYPE,
    'imports' | 'inject' | 'useFactory'
  >
>;

@Module({
  exports: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
  providers: [
    {
      provide: PrismaModuleDef.MODULE_OPTIONS_TOKEN,
      useValue: {} as PrismaModuleConfig,
    },
    {
      provide: PRISMA_SERVICE,
      useClass: PrismaService,
    },
  ],
})
export default class PrismaModule extends PrismaModuleDef.ConfigurableModuleClass {
  static register(options: typeof PrismaModuleDef.OPTIONS_TYPE): DynamicModule {
    return {
      global: true,
      module: PrismaModule,
      providers: [
        {
          provide: PrismaModuleDef.MODULE_OPTIONS_TOKEN,
          useValue: options,
        },
        {
          provide: PRISMA_SERVICE,
          useClass: PrismaService,
        },
      ],
    };
  }

  static registerAsync(options: PrismaModuleAsyncOptions): DynamicModule {
    return {
      global: true,
      imports: options.imports,
      module: PrismaModule,
      providers: [
        {
          inject: options.inject,
          provide: PrismaModuleDef.MODULE_OPTIONS_TOKEN,
          useFactory: async (...args: any[]) =>
            (await options.useFactory(...args)).softDeleteOptions,
        },
        {
          provide: PRISMA_SERVICE,
          useClass: PrismaService,
        },
      ],
    };
  }
}
