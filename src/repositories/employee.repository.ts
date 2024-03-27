import { BaseRepository } from './base.repository';
import { EmployeeEntity } from '../employees/entities/employee.entity';

export class EmployeeRepository extends BaseRepository<EmployeeEntity> {
  constructor() {
    super(EmployeeEntity);
    super.setModel('Employee');
  }
}
