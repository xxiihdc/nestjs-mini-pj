import { Module } from '@nestjs/common';
import { UserTimesheetsService } from './user_timesheets.service';
import { UserTimesheetsController } from './user_timesheets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [UserTimesheetsController],
  providers: [UserTimesheetsService, UsersService],
  imports: [PrismaModule],
})
export class UserTimesheetsModule {}
