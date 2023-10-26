import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoListService } from './todo.service';
import { Todo } from './todo.schema';

@Controller("todo-mongo")
export class TodoListController {
    constructor(
        private readonly todoListService: TodoListService
    ) { }

    @Get("getAll")
    async getAllTodoList(): Promise<Todo[]> {
        return await this.todoListService.findAll();
    }

    @Post("addTodo")
    async addTodo(@Body() data: Todo): Promise<boolean> {
        return await this.todoListService.addTodo(data);
    }

    @Post("deleteTodo/:id")
    async deleteTodo(@Param() data: any): Promise<boolean> {
        return await this.todoListService.deleteTodo(data);
    }
}
