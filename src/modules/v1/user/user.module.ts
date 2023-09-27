import { USER_REPOSITORY } from '@/repositories/user.repository';
import { USER_SERVICE } from '@/services/user.service';
import { Module } from '@nestjs/common';

import UserV1Controller from './user.controller';
import UserV1Repository from './user.repository';
import UserV1Service from './user.service';

@Module({
  controllers: [UserV1Controller],
  exports: [USER_REPOSITORY, USER_SERVICE],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserV1Repository,
    },
    {
      provide: USER_SERVICE,
      useClass: UserV1Service,
    },
  ],
})
export default class UserV1Module {}
