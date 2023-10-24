import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addTodo(): string {
    return 'add Todo!';
  }

  updateTodo(): string {
    return 'update Todo!';
  }

  deleteTodo(): string {
    return 'delete Todo!';
  }
}
