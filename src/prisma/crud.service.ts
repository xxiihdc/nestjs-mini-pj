import { PrismaService } from './prisma.service';

export class CrudService<T> {
  constructor(
    readonly prisma: PrismaService,
    private modelName: string,
  ) {}

  private conditions: any[] = [];
  private includeRelations: any[] = [];

  where(condition: any) {
    this.conditions.push(condition);
    return this;
  }

  include(relation: any) {
    this.includeRelations.push(relation);
    return this;
  }

  async query(): Promise<T[]> {
    try {
      const combinedWhere = this.conditions.reduce((accumulator, current) => {
        return { ...accumulator, ...current };
      }, {});

      const result = await this.prisma[this.modelName].findMany({
        where: combinedWhere,
        include:
          this.includeRelations.length > 0
            ? Object.assign({}, ...this.includeRelations)
            : undefined,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<T[]> {
    const items: T[] = await this.prisma[this.modelName].findMany();
    return items;
  }

  async findOne(id: number): Promise<T> {
    return this.prisma[this.modelName].findFirst({ where: { id } });
  }

  create(data: T): Promise<T> {
    return this.prisma[this.modelName].create({ data });
  }

  update(id: number, data: T): T {
    this.prisma[this.modelName].update({ where: { id }, data });
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma[this.modelName].delete({ where: { id } });
  }
}
