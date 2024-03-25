import { Injectable } from '@nestjs/common';
import { CrudService } from '../../src/prisma/crud.service';
import { UserTimesheet } from './entities/user_timesheet.entity';
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreateUserTimesheetDto } from './dto/create-user_timesheet.dto';
import { startOfDay } from 'date-fns';

@Injectable()
export class UserTimesheetsService extends CrudService<UserTimesheet> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, 'UserTimeSheet');
  }

  async createOrUpdateWithinDay(employeeId: number) {
    const userTimeSheets = await this.where({
      employeeId,
      startTime: {
        gte: startOfDay(new Date()),
        lte: new Date(),
      },
    }).query();

    if (userTimeSheets.length == 0) {
      return super.create(
        new CreateUserTimesheetDto(new Date(), employeeId).toObject(),
      );
    }

    const userTimeSheet = userTimeSheets[0];
    userTimeSheet.endTime = new Date();
    return super.update(userTimeSheet.id, userTimeSheet);
  }
}
