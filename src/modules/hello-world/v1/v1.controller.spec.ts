import { HELLO_WORLD_REPOSITORY } from '@/repositories/hello-world.repository';
import { HELLO_WORLD_SERVICE } from '@/services/hello-world.service';
import { Test, TestingModule } from '@nestjs/testing';
import HelloWorldV1Controller from './v1.controller';
import HelloWorldV1Repository from './v1.repository';
import HelloWorldV1Service from './v1.service';

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
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
