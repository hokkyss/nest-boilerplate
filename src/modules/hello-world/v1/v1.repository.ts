import IHelloWorldRepository from '@/repositories/hello-world.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class HelloWorldV1Repository implements IHelloWorldRepository {
  async getHello() {
    return `Hello World ${Math.random()}`;
  }
}
