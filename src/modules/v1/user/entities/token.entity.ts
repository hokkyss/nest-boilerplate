import IToken from '@/models/token.model';
import { Expose } from 'class-transformer';

export default class Token implements IToken {
  @Expose()
  token: string;

  constructor(attributes: Partial<IToken>) {
    Object.assign(this, attributes);
  }
}
