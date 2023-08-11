import type { TestingModule } from '@nestjs/testing';

import { HELLO_WORLD_REPOSITORY } from '@/repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Test } from '@nestjs/testing';

import HelloWorld from './entities/hello-world.entity';
import HelloWorldV1Controller from './hello-world.controller';
import HelloWorldV1Repository from './hello-world.repository';
import HelloWorldV1Service from './hello-world.service';
describe('HelloWorldV1Controller', () => {
  let appController: HelloWorldV1Controller;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldV1Controller],
      providers: [
        {
          provide: HELLO_WORLD_REPOSITORY,
          useClass: HelloWorldV1Repository,
        },
        {
          provide: HELLO_WORLD_SERVICE,
          useClass: HelloWorldV1Service,
        },
      ],
    }).compile();
    appController = app.get<HelloWorldV1Controller>(HelloWorldV1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect.assertions(1);

      await expect(appController.getHello()).resolves.toEqual(
        HelloWorld.create({ message: 'Hello World Version 1' }),
      );
    });
  });
});
