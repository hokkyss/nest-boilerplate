import IAppController from '@/controllers/IAppController.controller';
import HelloWorld from '@/models/HelloWorld.model';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController implements IAppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return new HelloWorld({ message: this.appService.getHello() });
  }
}
