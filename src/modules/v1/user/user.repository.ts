import IRegisterDto from '@/dto/register.dto';
import PrismaService, { PRISMA_SERVICE } from '@/prisma/prisma.service';
import IUserRepository from '@/repositories/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export default class UserV1Repository implements IUserRepository {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prismaService: PrismaService,
  ) {}

  async createUser(body: IRegisterDto) {
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
        id: typeof idOrEmail === 'number' ? idOrEmail : undefined,
        email: typeof idOrEmail === 'string' ? idOrEmail : undefined,
      },
    });
  }
}
