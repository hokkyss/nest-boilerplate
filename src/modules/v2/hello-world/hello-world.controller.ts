import IHelloWorldController from '@/controllers/hello-world.controller';
import HelloWorld from '@/models/hello-world.model';
import IHelloWorldService, {
  HELLO_WORLD_SERVICE,
} from '@/services/hello-world.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller({
  version: '2',
  path: 'hello-world',
})
export default class HelloWorldV2Controller implements IHelloWorldController {
  constructor(
    @Inject(HELLO_WORLD_SERVICE)
    private readonly helloWorldService: IHelloWorldService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  async getHello() {
    return new HelloWorld({ message: await this.helloWorldService.getHello() });
  }
}
