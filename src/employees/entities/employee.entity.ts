import { Employee } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class EmployeeEntity implements Employee {
  constructor(data: Partial<Employee>){
    Object.assign(this, data)
  }

  endDate: Date;
  startDate: Date;
  id: number;
  code: string;
  fullName: string;
  companyEmail: string;
  companyUniqueName: string;
  status: string;
  contractType: string;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
  user: UserEntity;
}
