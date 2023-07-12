import type IRegisterDto from '@/dto/register.dto';
import type IToken from '@/models/token.model';
import { type User } from '@prisma/client';

export default interface IUserService {
  getUser(id: number): Promise<User>;
  getUser(email: string): Promise<User>;
  login(user: User): Promise<IToken>;
  createUser(body: IRegisterDto): Promise<User>;
}

export const USER_SERVICE = 'USER_SERVICE';
