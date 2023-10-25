import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("sample-app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/add")
  addTodo(): string {
    return this.appService.addTodo();
  }

  @Post("/update")
  updateTodo(): string {
    return this.appService.updateTodo();
  }

  @Delete("/delete")
  deleteTodo(): string {
    return this.appService.deleteTodo();
  }
}
