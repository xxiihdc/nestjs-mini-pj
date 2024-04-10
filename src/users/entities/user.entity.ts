import { User } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class UserEntity implements User {
  id: number;
  employeeId: number;
  @IsNotEmpty()
  encrypted_password: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(data: User) {
    Object.assign(this, data);
  }
}
