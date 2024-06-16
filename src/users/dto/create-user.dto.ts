import { User } from '@prisma/client';
import { BaseDto, IBaseDto } from '../../../src/app.base.dto';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto
  extends BaseDto<UserEntity>
  implements IBaseDto<UserEntity>
{
  logT(): {
    id: number;
    employeeId: number;
    encrypted_password: string;
    createdAt: Date;
    updatedAt: Date;
  } {
    throw new Error('Method not implemented.');
  }
  toObject(): User {
    // return this.copyObject();
    return null;
  }
}
