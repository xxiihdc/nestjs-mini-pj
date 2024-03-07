import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class CrudService<T> {
  constructor(private readonly prisma: PrismaService, private readonly modelName: string) {
    console.log(2)
  console.log(modelName) }
  
  async findAll(): Promise<T[]> {
    const items: T[] = await this.prisma[this.modelName].findMany();
    return items
  }

  findOne(id: number): T {
    const item: T = this.prisma[this.modelName].findFirst({ where: { id } });
    return item;
  }

  create(data: T): Promise<T> {
    return this.prisma[this.modelName].create({ data });
  }

  update(id: number, data: T): T {
    this.prisma[this.modelName].update({ where: { id }, data });
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.prisma[this.modelName].delete({ where: { id } });
  }
}
