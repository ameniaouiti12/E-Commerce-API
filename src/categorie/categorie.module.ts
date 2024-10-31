// src/category/category.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from 'src/categorie/categorie.service';
import { CategoryController } from 'src/categorie/categorie.controller';
import { Category, CategorySchema } from 'src/categorie/Schemas/categorie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
