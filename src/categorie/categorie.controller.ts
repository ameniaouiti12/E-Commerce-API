// src/category/category.controller.ts

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from 'src/categorie/categorie.service';
import { CreateCategoryDto } from 'src/categorie/dto/create-categorie.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
