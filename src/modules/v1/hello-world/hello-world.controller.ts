import IHelloWorldController from '@/controllers/hello-world.controller';
import HelloWorld from '@/models/hello-world.model';
import IHelloWorldService, {
  HELLO_WORLD_SERVICE,
} from '@/services/hello-world.service';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller({
  version: '1',
  path: 'hello-world',
})
export default class HelloWorldV1Controller implements IHelloWorldController {
  constructor(
    @Inject(HELLO_WORLD_SERVICE)
    private readonly helloWorldService: IHelloWorldService,
  ) {}

  @Get()
  async getHello() {
    return new HelloWorld({ message: await this.helloWorldService.getHello() });
  }
}
