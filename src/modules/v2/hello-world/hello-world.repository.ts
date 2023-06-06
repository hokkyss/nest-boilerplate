import IHelloWorldRepository from '@/repositories/hello-world.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class HelloWorldV2Repository implements IHelloWorldRepository {
  async getHello() {
    return `Hello World Version 2`;
  }
}
