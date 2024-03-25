import { UserEntity } from '../../src/users/entities/user.entity';

export class AuthEntity {
  user: UserEntity | string;

  isUser(): this is UserEntity {
    return this.user instanceof UserEntity;
  }

  isAdmin(): this is string {
    return this.user.toString() == this.user;
  }
}
