import IAppRepository from '@/repositories/IAppRepository.repository';

export default class AppRepository implements IAppRepository {
  getHello(): string {
    return 'Hello World';
  }
}
