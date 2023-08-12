import type IHelloWorldRepository from '../../../repositories/hello-world.repository';
import type IHelloWorldService from '../../../services/hello-world.service';

import { Inject, Injectable } from '@nestjs/common';

import { HELLO_WORLD_REPOSITORY } from '../../../repositories/hello-world.repository';

@Injectable()
export default class HelloWorldV1Service implements IHelloWorldService {
  constructor(
    @Inject(HELLO_WORLD_REPOSITORY)
    private readonly helloWorldRepository: IHelloWorldRepository,
  ) {}

  async getHello() {
    return await this.helloWorldRepository.getHello();
  }
}
