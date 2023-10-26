import { Document } from 'mongoose';
export interface ITodo extends Document {
    readonly id: string;
    readonly content: string;
}