import Controller from '@/decorators/controller.decorator';
import type IUserService from '@/services/user.service';
import { USER_SERVICE } from '@/services/user.service';
import { Body, HttpCode, Inject, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import Token from './entities/token.entity';
import type RegisterDto from './payloads/register.payload';
import type SignInDto from './payloads/sign-in.payload';

@Controller({ path: 'user', version: '1' })
export default class UserV1Controller {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @ApiOkResponse({ type: Token })
  @HttpCode(200)
  @Post('login')
  async signIn(@Body() body: SignInDto) {
    const user = await this.userService.getUser(body.email);

    const token = await this.userService.login(user);

    return token;
  }

  @ApiOkResponse({ type: Token })
  @HttpCode(200)
  @Post('register')
  async register(@Body() body: RegisterDto) {
    const user = await this.userService.createUser(body);

    const token = await this.userService.login(user);

    return token;
  }
}
