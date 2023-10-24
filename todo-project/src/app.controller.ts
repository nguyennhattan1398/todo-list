import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/add-todo")
  addTodo(): string {
    return this.appService.addTodo();
  }

  @Post("/update-todo")
  updateTodo(): string {
    return this.appService.updateTodo();
  }

  @Delete("/delete-todo")
  deleteTodo(): string {
    return this.appService.deleteTodo();
  }
}
