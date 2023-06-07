import HelloWorld from '@/models/hello-world.model';

export default interface IHelloWorldController {
  getHello(): Promise<HelloWorld>;
}
