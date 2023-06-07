import IUserController from '@/controllers/user.controller';
import IUserService, { USER_SERVICE } from '@/services/user.service';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import RegisterDto from './dto/register.dto';
import SignInDto from './dto/sign-in.dto';

@Controller({
  version: '1',
  path: 'user',
})
export default class UserV1Controller implements IUserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService,
  ) {}

  @Post('login')
  async signIn(@Body() body: SignInDto) {
    const user = await this.userService.getUser(body.email);

    const token = await this.userService.login(user);

    return token;
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const user = await this.userService.createUser(body);

    const token = await this.userService.login(user);

    return token;
  }
}
