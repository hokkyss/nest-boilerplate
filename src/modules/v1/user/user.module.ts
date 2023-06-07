import { PrismaModule } from '@/prisma/prisma.module';
import { USER_REPOSITORY } from '@/repositories/user.repository';
import { USER_SERVICE } from '@/services/user.service';
import JwtStrategy from '@/strategies/jwt.strategy';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import UserV1Controller from './user.controller';
import UserV1Repository from './user.repository';
import UserV1Service from './user.service';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'),
        signOptions: {
          expiresIn: '3600s',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserV1Repository,
    },
    {
      provide: USER_SERVICE,
      useClass: UserV1Service,
    },
    JwtStrategy,
  ],
  controllers: [UserV1Controller],
})
export default class UserV1Module {}
