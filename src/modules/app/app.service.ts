import IAppService from '@/services/IAppService.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService implements IAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
