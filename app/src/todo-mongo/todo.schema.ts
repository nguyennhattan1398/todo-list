import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";
@Schema()
export class Todo {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;
    @Prop()
    content: string;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
