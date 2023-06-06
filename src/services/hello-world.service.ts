export default interface IHelloWorldService {
  getHello(): Promise<string>;
}

export const HELLO_WORLD_SERVICE = 'HELLO_WORLD_SERVICE';
