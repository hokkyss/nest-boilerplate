import AppModule from '@/app.module';
import { VersioningType, type INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Test, type TestingModule } from '@nestjs/testing';
import request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableCors();
    app.enableVersioning({
      type: VersioningType.URI,
    });

    const swaggerConfig = new DocumentBuilder()
      .setTitle('boilerplate')
      .setDescription('boilerplate description')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('swagger', app, document, {
      customSiteTitle: 'boilerplate',
    });
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/hello-world')
      .expect(200)
      .expect({ message: 'Hello World Version 1' });
  });
});
