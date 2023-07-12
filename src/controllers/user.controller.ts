import type IRegisterDto from '@/dto/register.dto';
import type ISignInDto from '@/dto/sign-in.dto';
import type IToken from '@/models/token.model';

export default interface IUserController {
  signIn(body: ISignInDto): Promise<IToken>;
  register(body: IRegisterDto): Promise<IToken>;
}
