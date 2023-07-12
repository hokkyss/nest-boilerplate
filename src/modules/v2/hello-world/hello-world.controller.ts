import type IHelloWorldController from '@/controllers/hello-world.controller';
import ApiBearerAuth from '@/decorators/api-bearer.decorator';
import ApiPaginatedResponse from '@/decorators/api-paginated-response.decorator';
import Controller from '@/decorators/controller.decorator';
import HelloWorld from '@/models/hello-world.model';
import type IHelloWorldService from '@/services/hello-world.service';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Get, HttpCode, Inject } from '@nestjs/common';
import { type ConfigService } from '@nestjs/config';

@ApiBearerAuth()
@Controller({ path: 'hello-world', version: '2' })
export default class HelloWorldV2Controller implements IHelloWorldController {
  constructor(
    @Inject(HELLO_WORLD_SERVICE)
    private readonly helloWorldService: IHelloWorldService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiPaginatedResponse(HelloWorld)
  async getHello() {
    return new HelloWorld({ message: await this.helloWorldService.getHello() });
  }
}
