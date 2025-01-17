import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
   @Prop()
   name: string;

   @Prop()
   email: string;

   @Prop()
   gender: string;

}
export const UserSchema = SchemaFactory.createForClass(User);