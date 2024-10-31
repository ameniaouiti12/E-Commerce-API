// src/product/dto/create_product_dto.ts

import { IsString, IsOptional, IsNumber, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsMongoId()
    @IsNotEmpty()
    category: string; 
}
