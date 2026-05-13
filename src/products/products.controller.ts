import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  create(@Body() body: any, @Req() req: any) {
    return this.productService.create(body, req.user);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.productService.findAll(req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any, @Req() req: any) {
    return this.productService.update(id, body, req.user);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: any) {
    return this.productService.delete(id, req.user);
  }
}
