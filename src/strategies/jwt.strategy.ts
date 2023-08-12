import type { ConfigService } from '@nestjs/config';
import type { User } from '@prisma/client';
import type { Request } from 'express';
import type { StrategyOptions } from 'passport-jwt';

import type IUserRepository from '../repositories/user.repository';

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { USER_SERVICE } from '../services/user.service';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_SERVICE) private readonly userRepository: IUserRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('SECRET_KEY'),
    } as StrategyOptions);
  }

  async validate(payload: { id: number }) {
    const user = await this.userRepository.getUser(payload.id);

    if (!user) {
      throw new UnauthorizedException('auth/invalid-credentials');
    }

    return user;
  }
}

export interface AuthenticatedRequest extends Request {
  user: User;
}
