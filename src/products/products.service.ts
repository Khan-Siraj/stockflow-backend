import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(dto: any, user: any) {
    return this.prisma.product.create({
      data: {
        ...dto,
        organizationId: user.organizationId,
      },
    });
  }

  findAll(user: any) {
    return this.prisma.product.findMany({
      where: {
        organizationId: user.organizationId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, dto: any, user: any) {
    return this.prisma.product.update({
      where: {
        id,
        organizationId: user.organizationId,
      },
      data: dto,
    });
  }

  delete(id: string, user: any) {
    return this.prisma.product.delete({
      where: {
        id,
        organizationId: user.organizationId,
      },
    });
  }
}
