import { PrismaService } from './prisma.service';

export class CrudService<T> {
  constructor(private readonly prisma: PrismaService, private readonly modelName: string) {}
  
  async findAll(): Promise<T[]> {
    const items: T[] = await this.prisma[this.modelName].findMany();
    return items
  }

  async findOne(id: number){
    return this.prisma[this.modelName].findFirst({where: {id}})
  }

  create(data: T): Promise<T> {
    return this.prisma[this.modelName].create({ data });
  }

  update(id: number, data: T): T {
    this.prisma[this.modelName].update({ where: { id }, data });
    // return this.findOne(id);
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma[this.modelName].delete({ where: { id } });
  }
}
