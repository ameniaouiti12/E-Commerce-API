import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsArray()
  items: CreateOrderItemDto[];

  @IsNumber()
  totalPrice: number;

  @IsString()
  status: string;
}
