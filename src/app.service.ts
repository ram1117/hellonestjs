import { Injectable } from '@nestjs/common';


interface GreetingsType{
  id:number, message:string
} 

@Injectable()
export class AppService {
  getHello(): GreetingsType[] {
    return [{id:1,message:'Hello World!'},{id:2,message:'Herzlich Wilkomment'}];
  }
}
