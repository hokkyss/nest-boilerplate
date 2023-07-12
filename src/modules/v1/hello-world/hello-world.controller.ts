import type IHelloWorldController from '@/controllers/hello-world.controller';
import Controller from '@/decorators/controller.decorator';
import HelloWorld from '@/models/hello-world.model';
import type IHelloWorldService from '@/services/hello-world.service';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Get, Inject } from '@nestjs/common';

@Controller({
  path: 'hello-world',
  version: '1',
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
