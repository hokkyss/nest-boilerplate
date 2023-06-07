import IUserRepository from '@/repositories/user.repository';
import { USER_SERVICE } from '@/services/user.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_SERVICE) private readonly userRepository: IUserRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
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
