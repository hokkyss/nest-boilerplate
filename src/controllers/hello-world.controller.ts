import type HelloWorld from '@/models/hello-world.model';
import { type Request } from 'express';

export default interface IHelloWorldController {
  getHello(request: Request): Promise<HelloWorld>;
}
