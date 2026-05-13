import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  sku!: string;

  @IsOptional()
  description?: string;

  quantity!: number;

  costPrice?: number;

  sellingPrice?: number;

  lowStockThreshold?: number;
}
