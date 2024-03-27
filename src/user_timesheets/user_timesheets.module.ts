import { Module } from '@nestjs/common';
import { UserTimeSheetsService } from './user_timesheets.service';
import { UserTimesheetsController } from './user_timesheets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';
import { UserRepository } from 'src/repositories/user.repository';
import { UserTimeSheetRepository } from '../repositories/user.timesheet.repository';

@Module({
  controllers: [UserTimesheetsController],
  providers: [UserTimeSheetsService, UsersService, UserRepository,UserTimeSheetRepository],
  imports: [PrismaModule],
})
export class UserTimesheetsModule {}
