import { TodoListMySqlModule } from './todo-mysql/todo.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListMongoModule } from './todo-mongo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'todo-list',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'todo-list' }),
    TodoListMongoModule,
    TodoListMySqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
