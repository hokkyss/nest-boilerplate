import IRegisterDto from '@/dto/register.dto';
import IToken from '@/models/token.model';
import { User } from '@prisma/client';

export default interface IUserService {
  getUser(id: number): Promise<User>;
  getUser(email: string): Promise<User>;
  login(user: User): Promise<IToken>;
  createUser(body: IRegisterDto): Promise<User>;
}

export const USER_SERVICE = 'USER_SERVICE';
