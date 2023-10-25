import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([TodoEntity])
    ],
    controllers: [
        TodoListController,],
    providers: [
        TodoListService,],
})
export class TodoListModule { }
