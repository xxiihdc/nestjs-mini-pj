import { UserTimeSheet } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class UserTimeSheetEntity implements UserTimeSheet {
  id: number;
  employeeId: number;

  @IsNotEmpty()
  startTime: Date;

  endTime: Date;
  editedById: number;
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  @IsNotEmpty()
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
