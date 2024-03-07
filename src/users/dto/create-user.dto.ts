import { BaseDto, IBaseDto } from "src/app.base.dto";
import { User } from "../entities/user.entity";

export class CreateUserDto extends BaseDto<User> implements IBaseDto<User>{
  toObject(): User {
    return this.copyObject();
  }
}
