import { Module } from '@nestjs/common';
import PrismaService, { PRISMA_SERVICE } from './prisma.service';

@Module({
  providers: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
  exports: [{ provide: PRISMA_SERVICE, useClass: PrismaService }],
})
export class PrismaModule {}
