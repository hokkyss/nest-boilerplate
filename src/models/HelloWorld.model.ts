import { Expose } from 'class-transformer';

export default class HelloWorld {
  @Expose()
  message: string;

  @Expose()
  get value() {
    return this.message + ' halo';
  }

  constructor(attributes: Partial<HelloWorld>) {
    Object.assign(this, attributes);
  }
}
