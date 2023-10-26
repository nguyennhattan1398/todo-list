import { TodoListService } from './todo.service';
import { TodoListController } from './todo.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoEntity])
    ],
    controllers: [
        TodoListController
    ],
    providers: [
        TodoListService
    ],
})
export class TodoListMySqlModule { }
