import type { Prisma, User } from '@prisma/client';

export default interface IUserService {
  createUser(body: Prisma.UserCreateInput): Promise<User>;
  getUser(email: string): Promise<User>;
  getUser(email: string, password: string): Promise<User>;
  getUser(id: number): Promise<User>;
  login(user: User): Promise<string>;
}

export const USER_SERVICE = 'USER_SERVICE';
