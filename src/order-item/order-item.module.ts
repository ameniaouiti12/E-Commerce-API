// src/order-item/order-item.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItem, OrderItemSchema } from './schemas/order-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OrderItem.name, schema: OrderItemSchema }]),
  ],
  exports: [MongooseModule],
})
export class OrderItemModule {}
