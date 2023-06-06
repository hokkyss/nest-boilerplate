import IHelloWorldRepository, {
  HELLO_WORLD_REPOSITORY,
} from '@/repositories/hello-world.repository';
import IHelloWorldServixe from '@/services/hello-world.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class HelloWorldV2Service implements IHelloWorldServixe {
  constructor(
    @Inject(HELLO_WORLD_REPOSITORY)
    private readonly helloWorldRepository: IHelloWorldRepository,
  ) {}

  async getHello() {
    return await this.helloWorldRepository.getHello();
  }
}
