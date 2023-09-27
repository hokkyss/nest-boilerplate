import type IAuthRepository from '@/repositories/auth.repository';
import type IAuthService from '@/services/auth.service';
import type IUserService from '@/services/user.service';

import { AUTH_REPOSITORY } from '@/repositories/auth.repository';
import { USER_SERVICE } from '@/services/user.service';
import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export default class AuthV1Service implements IAuthService {
  constructor(
    @Inject(AUTH_REPOSITORY) private readonly authRepository: IAuthRepository,
    @Inject(JwtService) private readonly jwtService: JwtService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userService.getUser(email, password);
    const payload = { id: user.id };

    return this.jwtService.sign(payload);
  }
}
