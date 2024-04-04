import { UserTimeSheet } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
import { ApplyCustomValidators } from '../../common/decorators/validator.decorator';
import { TestDecorator } from '../../common/decorators/test.decorator';

export class UserTimeSheetEntity implements UserTimeSheet {
  id: number;
  employeeId: number;

  @ApplyCustomValidators(IsNotEmpty, TestDecorator)
  startTime: Date;

  endTime: Date;
  editedById: number;
  createdAt: Date;

  updatedAt: Date;

  @ApplyCustomValidators(IsNotEmpty, TestDecorator)
  type: string;

  addEndTime(endTime: Date): UserTimeSheetEntity {
    this.endTime = endTime;
    return this;
  }

  constructor(data: Partial<UserTimeSheet>) {
    this.type = 'Normal';
    Object.assign(this, data);
  }
}
