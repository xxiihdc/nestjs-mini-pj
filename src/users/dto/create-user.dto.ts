import { User } from '@prisma/client';
import { BaseDto, IBaseDto } from '../../../src/app.base.dto';

export class CreateUserDto extends BaseDto<User> implements IBaseDto<User> {
  toObject(): User {
    return this.copyObject();
  }
}
