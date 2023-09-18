import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

interface GreetingsType{
  id:number, message:string
} 


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type','application/json')
  getHello(): GreetingsType[] {
    return this.appService.getHello();
  }
}
