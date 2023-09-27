import type IUserRepository from '@/repositories/user.repository';
import type IUserService from '@/services/user.service';
import type { JwtService } from '@nestjs/jwt';
import type { Prisma, User } from '@prisma/client';

import { USER_REPOSITORY } from '@/repositories/user.repository';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { compare } from 'bcrypt';

@Injectable()
export default class UserV1Service implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(body: Prisma.UserCreateInput) {
    try {
      // will throw NotFoundException if email is taken
      await this.getUser(body.email);
    } catch (e) {
      if (e instanceof NotFoundException) {
        return await this.userRepository.createUser(body);
      }
    }
    throw new BadRequestException('auth/user-exists');
  }

  async getUser(email: number | string, password?: string) {
    const user =
      typeof email === 'string'
        ? await this.userRepository.getUser(email)
        : await this.userRepository.getUser(email);

    if (!user) {
      throw new NotFoundException('user/not-found');
    }

    if (password) {
      const verified = await compare(password, user.password);

      if (!verified) {
        throw new NotFoundException('user/not-found');
      }
    }

    return user;
  }

  async login(user: User) {
    const payload = { id: user.id };

    return this.jwtService.sign(payload);
  }
}
