export default interface IHelloWorldRepository {
  getHello(): Promise<string>;
}

export const HELLO_WORLD_REPOSITORY = 'HELLO_WORLD_REPOSITORY';
