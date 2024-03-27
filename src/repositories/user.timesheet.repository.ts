import { BaseRepository } from "./base.repository";
import { UserTimeSheetEntity } from "../user_timesheets/entities/user_timesheet.entity";

export class UserTimeSheetRepository extends BaseRepository<UserTimeSheetEntity>{

  constructor() {
    super(UserTimeSheetEntity);
    super.setModel("UserTimeSheet")
  }
}