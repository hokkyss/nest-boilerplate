import type IHelloWorldService from '@/services/hello-world.service';

import Controller from '@/decorators/controller.decorator';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Get, Inject } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import HelloWorldV1 from './entities/hello-world.entity';

@Controller({
  path: 'hello-world',
  version: '1',
})
export default class HelloWorldV1Controller {
  constructor(
    @Inject(HELLO_WORLD_SERVICE)
    private readonly helloWorldService: IHelloWorldService,
  ) {}

  @Get()
  @ApiOkResponse({ type: HelloWorldV1 })
  async getHello() {
    const helloWorld = HelloWorldV1.create({
      message: await this.helloWorldService.getHello(),
    });

    return helloWorld;
  }
}
