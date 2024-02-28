import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class CrudService<T> {
  constructor(private readonly prisma: PrismaService, private readonly modelName: string) {}
  
  async findAll(): Promise<T[]> {
    return this.prisma[this.modelName].findMany();
  }

  async findOne(id: number): Promise<T> {
    return this.prisma[this.modelName].findFirst({ where: { id } });
  }

  async create(data: T): Promise<T> {
    return this.prisma[this.modelName].create({ data });
  }

  async update(id: number, data: T): Promise<T> {
    await this.prisma[this.modelName].update({ where: { id }, data });
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.prisma[this.modelName].delete({ where: { id } });
  }
}
