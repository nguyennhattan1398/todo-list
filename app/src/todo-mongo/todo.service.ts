import { Injectable } from '@nestjs/common';
import { Todo } from './todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITodo } from './todo.interface';

@Injectable()
export class TodoListService {
    constructor(
        @InjectModel('Todo') private todoModel: Model<ITodo>
    ) { }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find();
    }

    async addTodo(data: Todo): Promise<boolean> {
        return await this.todoModel.create(data) ? true : false;
    }

    async deleteTodo(data: any): Promise<boolean> {
        return await this.todoModel.deleteOne({ _id: data.id }) ? true : false;
    }
}
