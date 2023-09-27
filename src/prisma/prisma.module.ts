import type { DynamicModule } from '@nestjs/common';

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
  providers: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
})
export default class PrismaModule extends PrismaModuleDef.ConfigurableModuleClass {
  static registerAsync(options: PrismaModuleAsyncOptions): DynamicModule {
    return {
      global: true,
      imports: options.imports,
      module: PrismaModule,
      providers: [
        {
          inject: options.inject,
          provide: PRISMA_SERVICE,
          useFactory: async (...args: any[]) =>
            new PrismaService(
              (await options.useFactory(...args)).softDeleteOptions,
            ),
        },
      ],
    };
  }
}
