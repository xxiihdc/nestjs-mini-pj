import { PrismaClient } from '@prisma/client';
import { IRepository } from './repository';

const prisma = new PrismaClient();

export abstract class BaseRepository<T> implements IRepository<T> {
  // static modelCheck: ModelType
  public model: string;

  private conditions: any[] = [];
  private includeRelations: any[] = [];

  constructor(private target: { new (data: any): T }) {}

  setModel(model: string) {
    this.model = model;
  }
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

      const result = await prisma[this.model].findMany({
        where: combinedWhere,
        include:
          this.includeRelations.length > 0
            ? Object.assign({}, ...this.includeRelations)
            : undefined,
      });
      return result.map((element) => new this.target(element));
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<T | null> {
    const data = await prisma[this.model].findFirst({ where: { id } });
    return new this.target(data);
  }

  async findAll(): Promise<T[]> {
    return await prisma[this.model]
      .findMany()
      .map((element: any) => new this.target(element));
  }

  async create(data: Partial<T>): Promise<T> {
    return new this.target(await prisma[this.model].create({ data }));
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    return new this.target(
      await prisma[this.model].update({ where: { id }, data }),
    );
  }

  async delete(id: number): Promise<T | null> {
    const deletedItem = await this.findById(id);
    await prisma[this.model].delete({ where: { id } });
    return deletedItem;
  }

  async findMany(): Promise<T[]> {
    return prisma[this.model].findMany();
  }
}
