import { Injectable } from '@nestjs/common';
import { CrudService } from '../../src/prisma/crud.service';
import { startOfDay } from 'date-fns';
import { UserTimeSheetEntity } from './entities/user_timesheet.entity';
import { UserTimeSheetRepository } from '../repositories/user.timesheet.repository';

@Injectable()
export class UserTimeSheetsService extends CrudService<UserTimeSheetEntity> {
  constructor(readonly repository: UserTimeSheetRepository) {
    super(repository);
  }
  async createOrUpdateWithinDay(employeeId: number)       {
    const userTimeSheets = await this.repository
      .where({
        employeeId,
        startTime: {
          gte: startOfDay(new Date()),
          lte: new Date(),
        },
      })
      .query();

    if (userTimeSheets.length == 0) {
      const userTimeSheet = new UserTimeSheetEntity({
        startTime: new Date(),
        employeeId: employeeId,
      });
      return super.create(userTimeSheet);
    }

    return super.update(
      userTimeSheets[0].id,
      userTimeSheets[0].addEndTime(new Date()),
    );
  }
}
