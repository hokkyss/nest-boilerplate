import IRegisterDto from '@/dto/register.dto';
import IUserRepository, {
  USER_REPOSITORY,
} from '@/repositories/user.repository';
import IUserService from '@/services/user.service';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import Token from './entities/token.entity';

@Injectable()
export default class UserV1Service implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(body: IRegisterDto) {
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

  async getUser(idOrEmail: number | string) {
    const user =
      typeof idOrEmail === 'string'
        ? await this.userRepository.getUser(idOrEmail)
        : await this.userRepository.getUser(idOrEmail);

    if (!user) {
      throw new NotFoundException('user/not-found');
    }

    return user;
  }

  async login(user: User) {
    const payload = { id: user.id };

    return new Token({ token: this.jwtService.sign(payload) });
  }
}
