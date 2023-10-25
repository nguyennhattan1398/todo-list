import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoListService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) { }

    async findAll(): Promise<TodoEntity[]> {
        return await this.todoRepository.find();
    }

    async insertTodo(data: TodoEntity): Promise<boolean> {
        return await this.todoRepository.insert(data) ? true : false;
    }

    async removeTodo(data: any): Promise<boolean> {
        return await this.todoRepository.delete({ id: data.id }) ? true : false;
    }
}
