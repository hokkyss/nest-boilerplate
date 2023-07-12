import { type Prisma, type User } from '@prisma/client';

export default interface IUserService {
  getUser(id: number): Promise<User>;
  getUser(email: string): Promise<User>;
  login(user: User): Promise<string>;
  createUser(body: Prisma.UserCreateInput): Promise<User>;
}

export const USER_SERVICE = 'USER_SERVICE';
