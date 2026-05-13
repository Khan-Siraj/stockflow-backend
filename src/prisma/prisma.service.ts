import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Database Connected Successfully');
    } catch (error) {
      console.log('Database Connection Lost');
      console.error(error);
    }
  }
}
