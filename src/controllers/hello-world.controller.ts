import HelloWorld from '@/models/hello-world.model';

export default interface IAppController {
  getHello(): Promise<HelloWorld>;
}
