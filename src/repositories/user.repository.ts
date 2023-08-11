import type { Prisma, User } from '@prisma/client';

export default interface IUserRepository {
  createUser(body: Prisma.UserCreateInput): Promise<User>;
  getUser(email: string): Promise<User | null>;
  getUser(id: number): Promise<User | null>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
