import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CrudService } from '../../src/prisma/crud.service';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UsersService extends CrudService<UserEntity> {
  constructor(readonly repository: UserRepository) {
    super(repository);
  }

  findByEmail(email: string): Promise<UserEntity> {
    return this.repository.where({ email: email })[0];
  }
}
