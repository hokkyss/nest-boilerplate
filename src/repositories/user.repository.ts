import type IRegisterDto from '@/dto/register.dto';
import { type User } from '@prisma/client';

export default interface IUserRepository {
  getUser(id: number): Promise<User | null>;
  getUser(email: string): Promise<User | null>;
  createUser(body: IRegisterDto): Promise<User>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
