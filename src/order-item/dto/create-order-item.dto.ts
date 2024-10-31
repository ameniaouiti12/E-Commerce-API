// src/order-item/dto/create-order-item.dto.ts
import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsMongoId()
  product: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
