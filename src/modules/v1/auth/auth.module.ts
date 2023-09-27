import type IUserService from '@/services/user.service';

import { AUTH_REPOSITORY } from '@/repositories/auth.repository';
import { AUTH_SERVICE } from '@/services/auth.service';
import { USER_SERVICE } from '@/services/user.service';
import JwtStrategy from '@/strategies/jwt.strategy';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import UserV1Module from '../user/user.module';

import AuthV1Repository from './auth.repository';
import AuthV1Service from './auth.service';

@Module({
  imports: [
    UserV1Module,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'),
        signOptions: {
          expiresIn: '3600s',
        },
      }),
    }),
    PassportModule,
  ],
  providers: [
    {
      provide: AUTH_REPOSITORY,
      useClass: AuthV1Repository,
    },
    {
      provide: AUTH_SERVICE,
      useClass: AuthV1Service,
    },
    {
      inject: [USER_SERVICE, ConfigService],
      provide: JwtStrategy,
      useFactory: (userService: IUserService, configService: ConfigService) =>
        new JwtStrategy(userService, configService),
    },
  ],
})
export default class AuthV1Module {}
