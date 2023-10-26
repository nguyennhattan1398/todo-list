import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    content: string;
}