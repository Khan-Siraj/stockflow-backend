import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async getDashboard(user: any) {
    const products = await this.prisma.product.findMany({
      where: {
        organizationId: user.organizationId,
      },
    });

    const settings = await this.prisma.setting.findUnique({
      where: {
        organizationId: user.organizationId,
      },
    });

    const lowStockItems = products.filter((product) => {
      const threshold =
        product.lowStockThreshold ?? settings?.defaultLowStockValue ?? 5;

      return product.quantity <= threshold;
    });

    return {
      totalProducts: products.length,

      totalQuantity: products.reduce((acc, item) => acc + item.quantity, 0),

      lowStockItems,
    };
  }
}
