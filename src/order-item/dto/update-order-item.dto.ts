import { IsNumber, IsOptional, IsMongoId } from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsMongoId()
  product?: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;
}
