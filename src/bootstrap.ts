import AppModule from '@/app.module';
import { VersioningType, type INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { type Express } from 'express';

export default async function bootstrap(): Promise<
  [INestApplication, Express]
> {
  const app = await NestFactory.create(AppModule);

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

  return [app, app.getHttpAdapter().getInstance()];
}
