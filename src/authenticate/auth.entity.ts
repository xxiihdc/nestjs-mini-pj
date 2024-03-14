import { User } from 'src/users/entities/user.entity';

export class AuthEntity {
  user: User | string;

  isUser(): this is User {
    return this.user instanceof User;
  }

  isAdmin(): this is string {
    return this.user.toString() == this.user;
  }
}
