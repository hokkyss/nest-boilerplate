import HelloWorld from '@/models/HelloWorld.model';

export default interface IAppController {
  getHello(): HelloWorld;
}
