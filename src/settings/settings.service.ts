import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  getSettings(user: any) {
    return this.prisma.setting.upsert({
      where: {
        organizationId: user.organizationId,
      },
      update: {},
      create: {
        organizationId: user.organizationId,
      },
    });
  }

  updateSettings(dto: any, user: any) {
    return this.prisma.setting.upsert({
      where: {
        organizationId: user.organizationId,
      },
      update: {
        defaultLowStockValue: Number(dto.defaultLowStockValue),
      },
      create: {
        organizationId: user.organizationId,
        defaultLowStockValue: Number(dto.defaultLowStockValue),
      },
    });
  }
}
