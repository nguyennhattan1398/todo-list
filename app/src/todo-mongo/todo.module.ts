import { TodoListService } from './todo.service';
import { TodoListController } from './todo.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './todo.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])
    ],
    controllers: [
        TodoListController
    ],
    providers: [
        TodoListService
    ],
})
export class TodoListMongoModule { }
