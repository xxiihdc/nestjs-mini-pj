import { UserEntity } from "src/users/entities/user.entity";
import { BaseRepository } from "./base.repository";

export class UserRepository extends BaseRepository<UserEntity>{

  constructor() {
    super(UserEntity);
    super.setModel("User")
  }
}