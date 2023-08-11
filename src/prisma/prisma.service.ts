import type { INestApplication, OnModuleInit } from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}

export const PRISMA_SERVICE = 'PRISMA_SERVICE';
