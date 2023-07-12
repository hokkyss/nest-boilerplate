import type PrismaService from '@/prisma/prisma.service';
import { PRISMA_SERVICE } from '@/prisma/prisma.service';
import type IHelloWorldRepository from '@/repositories/hello-world.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class HelloWorldV2Repository implements IHelloWorldRepository {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prismaService: PrismaService,
  ) {}

  async getHello() {
    return `Hello World Version 2`;
  }
}
