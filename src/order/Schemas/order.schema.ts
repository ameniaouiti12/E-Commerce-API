// src/order/schemas/order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { OrderItem } from 'src/order-item/schemas/order-item.schema';

@Schema()
export class Order extends Document {
  @Prop({ type: [{ type: Types.ObjectId, ref: 'OrderItem' }] })
  items: OrderItem[];

  @Prop({ required: true, type: Number })
  totalPrice: number;

  @Prop({ required: true })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
