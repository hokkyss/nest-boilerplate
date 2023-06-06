import { Expose } from 'class-transformer';

export default class HelloWorld {
  @Expose()
  message: string;

  constructor(attributes: Partial<HelloWorld>) {
    Object.assign(this, attributes);
  }
}
