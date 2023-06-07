import IRegisterDto from '@/dto/register.dto';
import ISignInDto from '@/dto/sign-in.dto';
import IToken from '@/models/token.model';

export default interface IUserController {
  signIn(body: ISignInDto): Promise<IToken>;
  register(body: IRegisterDto): Promise<IToken>;
}
