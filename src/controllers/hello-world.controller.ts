import HelloWorld from '@/models/hello-world.model';
import { Request } from 'express';

export default interface IHelloWorldController {
  getHello(request: Request): Promise<HelloWorld>;
}
