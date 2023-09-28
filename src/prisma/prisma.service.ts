import type { INestApplication, OnModuleInit } from '@nestjs/common';
import type { Prisma } from '@prisma/client';

import type { SoftDeleteOption } from './prisma.module-definition';

import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import PrismaModuleDef, { SoftDeleteMode } from './prisma.module-definition';

@Injectable()
export default class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  constructor(
    @Inject(PrismaModuleDef.MODULE_OPTIONS_TOKEN)
    private readonly options: SoftDeleteOption[] = [],
  ) {
    super({
      errorFormat: 'pretty',
      log: ['query'],
    });

    if (options.length === 0) return;

    this.$use(async (params, next) => {
      if (!params.model) {
        return await next(params);
      }

      // #region WRITE
      if (this.isSoftDeleted(params.model, SoftDeleteMode.Write)) {
        if (params.action === 'delete') {
          params.action = 'update';
          params.args['data'] = { deletedAt: new Date() };
        } else if (params.action == 'deleteMany') {
          // Delete many queries
          params.action = 'updateMany';
          if (params.args.data !== undefined) {
            params.args.data['deletedAt'] = new Date();
          } else {
            params.args['data'] = { deletedAt: new Date() };
          }
        }
        if (params.action === 'update') {
          params.action = 'updateMany';
          // Add 'deleted' filter
          // ID filter maintained
          params.args.where['deletedAt'] = null;
        } else if (params.action === 'updateMany') {
          if (params.args.where !== undefined) {
            params.args.where['deletedAt'] = null;
          } else {
            params.args['where'] = { deletedAt: null };
          }
        }
      } // #endregion

      // #region READ
      if (this.isSoftDeleted(params.model, SoftDeleteMode.Read)) {
        if (params.action === 'findFirst' || params.action === 'findUnique') {
          params.action = 'findFirst';
          params.args.where['deletedAt'] = null;
        } else if (params.action === 'findMany') {
          if (params.args.where) {
            // Exclude deleted records if they have not been explicitly requested
            if (params.args.where.deletedAt === undefined) {
              params.args.where['deletedAt'] = null;
            }
          } else {
            params.args.where = { deletedAt: null };
          }
        }
      }
      // #endregion

      return await next(params);
    });
  }

  private isSoftDeleted(
    modelName: Prisma.ModelName,
    mode = SoftDeleteMode.All,
  ) {
    return (
      this.options.filter((option) => {
        if (typeof option === 'string') {
          return option === modelName;
        }

        const [model, softDeleteMode] = option;
        if (softDeleteMode === SoftDeleteMode.All) {
          return model === modelName;
        }
        return model === modelName && softDeleteMode === mode;
      }).length === 1
    );
  }

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
