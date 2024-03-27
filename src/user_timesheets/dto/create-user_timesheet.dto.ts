import { BaseDto, IBaseDto } from '../../../src/app.base.dto';
import { UserTimeSheetEntity } from '../entities/user_timesheet.entity';

export class CreateUserTimeSheetDto
  extends BaseDto<Omit<UserTimeSheetEntity, "createdAt" | "updatedAt" >>
  implements IBaseDto<UserTimeSheetEntity>
{

  constructor(data: UserTimeSheetEntity) {
    super(data)
  }

}
