// src/order-item/order-item.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderItem } from './schemas/order-item.schema';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(@InjectModel(OrderItem.name) private orderItemModel: Model<OrderItem>) {}

  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    const newOrderItem = new this.orderItemModel(createOrderItemDto);
    return newOrderItem.save();
  }

  async findAll(): Promise<OrderItem[]> {
    return this.orderItemModel.find().populate('product').exec();
  }

  async findOne(id: string): Promise<OrderItem> {
    const orderItem = await this.orderItemModel.findById(id).populate('product').exec();
    if (!orderItem) {
      throw new NotFoundException(`OrderItem with ID ${id} not found`);
    }
    return orderItem;
  }

  async update(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem> {
    const updatedOrderItem = await this.orderItemModel
      .findByIdAndUpdate(id, updateOrderItemDto, { new: true })
      .exec();
    if (!updatedOrderItem) {
      throw new NotFoundException(`OrderItem with ID ${id} not found`);
    }
    return updatedOrderItem;
  }

  async remove(id: string): Promise<OrderItem> {
    const deletedOrderItem = await this.orderItemModel.findByIdAndDelete(id).exec();
    if (!deletedOrderItem) {
      throw new NotFoundException(`OrderItem with ID ${id} not found`);
    }
    return deletedOrderItem;
  }
}
