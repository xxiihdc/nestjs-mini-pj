import { UserEntity } from 'src/users/entities/user.entity';

export class Employee {
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
