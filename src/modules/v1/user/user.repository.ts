import type { Prisma, User } from '@prisma/client';

import type PrismaService from '../../../prisma/prisma.service';
import type IUserRepository from '../../../repositories/user.repository';

import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

import { PRISMA_SERVICE } from '../../../prisma/prisma.service';

@Injectable()
export default class UserV1Repository implements IUserRepository {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prismaService: PrismaService,
  ) {}

  async createUser(body: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: await hash(body.password, 8),
      },
    });
  }

  async getUser(idOrEmail: number | string): Promise<User | null> {
    return await this.prismaService.user.findFirst({
      where: {
        email: typeof idOrEmail === 'string' ? idOrEmail : undefined,
        id: typeof idOrEmail === 'number' ? idOrEmail : undefined,
      },
    });
  }
}
