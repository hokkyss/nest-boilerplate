export default interface IAuthService {
  login(email: string, password: string): Promise<string>;
}

export const AUTH_SERVICE = 'AUTH_SERVICE';
