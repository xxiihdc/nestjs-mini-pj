import { BaseRepository } from 'src/repositories/base.repository';

export class CrudService<T> {
  constructor(readonly repository: BaseRepository<T>) {}

  async findAll(): Promise<T[]> {
    const items: T[] = await this.repository.findMany();
    return items;
  }

  async findOne(id: number): Promise<T> {
    return this.repository.findById(id);
  }

  create(data: T): Promise<T> {
    return this.repository.create(data);
  }

  update(id: number, data: T): Promise<T> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
