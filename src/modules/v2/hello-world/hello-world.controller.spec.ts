import HelloWorld from '@/models/hello-world.model';
import { HELLO_WORLD_REPOSITORY } from '@/repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Test, type TestingModule } from '@nestjs/testing';
import HelloWorldV2Controller from './hello-world.controller';
import HelloWorldV2Repository from './hello-world.repository';
import HelloWorldV2Service from './hello-world.service';
describe('HelloWorldV2Controller', () => {
  let appController: HelloWorldV2Controller;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldV2Controller],
      providers: [
        {
          provide: HELLO_WORLD_REPOSITORY,
          useClass: HelloWorldV2Repository,
        },
        {
          provide: HELLO_WORLD_SERVICE,
          useClass: HelloWorldV2Service,
        },
      ],
    }).compile();
    appController = app.get<HelloWorldV2Controller>(HelloWorldV2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect.assertions(2);

      await expect(appController.getHello()).resolves.toBeInstanceOf(
        HelloWorld,
      );
      await expect(appController.getHello()).resolves.toEqual(
        new HelloWorld({ message: `Hello World Version 2` }),
      );
    });
  });
});
