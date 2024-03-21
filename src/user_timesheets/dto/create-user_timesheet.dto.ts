import { BaseDto, IBaseDto } from '../../../src/app.base.dto';
import { UserTimesheet } from '../entities/user_timesheet.entity';

export class CreateUserTimesheetDto
  extends BaseDto<UserTimesheet>
  implements IBaseDto<UserTimesheet>
{
  startTime: Date;
  employeeId: number;
  type: string;

  constructor(startTime: Date, empId: number) {
    super(null);
    this.startTime = startTime;
    this.employeeId = empId;
    this.type = 'Normal';
  }
  toObject(): UserTimesheet {
    return this.copyObject();
  }
}
