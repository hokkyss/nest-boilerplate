import type IHelloWorldService from '@/services/hello-world.service';

import ApiBearerAuth from '@/decorators/api-bearer.decorator';
import Controller from '@/decorators/controller.decorator';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Get, Inject } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import HelloWorldV2 from './entities/hello-world.entity';

@ApiBearerAuth()
@Controller({ path: 'hello-world', version: '2' })
export default class HelloWorldV2Controller {
  constructor(
    @Inject(HELLO_WORLD_SERVICE)
    private readonly helloWorldService: IHelloWorldService,
  ) {}

  @Get()
  @ApiOkResponse({ type: HelloWorldV2 })
  async getHello() {
    return HelloWorldV2.create({
      message: await this.helloWorldService.getHello(),
    });
  }
}
