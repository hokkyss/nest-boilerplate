import { Module } from '@nestjs/common';

import PrismaService, { PRISMA_SERVICE } from './prisma.service';

@Module({
  exports: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
  providers: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
})
export default class PrismaModule {
  // TODO: Soft delete mode
  // static registerAsync(softDelete = false): DynamicModule {
  //   return {
  //     exports: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
  //     global: true,
  //     module: PrismaModule,
  //     providers: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
  //   };
  // }
}
