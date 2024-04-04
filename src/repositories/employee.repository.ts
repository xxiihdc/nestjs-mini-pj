import { BaseRepository } from './base.repository';
import { EmployeeEntity } from '../employees/entities/employee.entity';
import { IRepository } from './repository';
import { UserEntity } from '../users/entities/user.entity';
import { UserRepository } from './user.repository';

export class EmployeeRepository extends BaseRepository<EmployeeEntity> {
  constructor() {
    super(EmployeeEntity);
    super.setModel('Employee');
  }

  test(){
    const test: IRepository<UserEntity> = new UserRepository;
    test.create({})
  }
}
