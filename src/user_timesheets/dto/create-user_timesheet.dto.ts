import { BaseDto, IBaseDto } from '../../../src/app.base.dto';
import { TestDecorator } from '../../common/decorators/test.decorator';
import { ClearValidator } from '../../common/decorators/validator.decorator';
import { UserTimeSheetEntity } from '../entities/user_timesheet.entity';

// @ClearValidator("TestDecorator")
export class CreateUserTimeSheetDto
  extends BaseDto<Omit<UserTimeSheetEntity, 'createdAt' | 'updatedAt'>>
  implements IBaseDto<UserTimeSheetEntity>
{
  constructor(data: UserTimeSheetEntity) {
    super(data);
  }
}

