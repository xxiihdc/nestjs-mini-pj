import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserTimesheetsService } from './user_timesheets.service';
import { RequestModel } from '../../src/extends/req';
import { AuthUserGuard } from '../../src/authenticate/auth.user.guard';

@Controller('api/v1/user-timesheets')
export class UserTimesheetsController {
  constructor(private readonly userTimesheetsService: UserTimesheetsService) {}

  @Post('/')
  @UseGuards(AuthUserGuard)
  create(@Req() req: RequestModel) {
    return this.userTimesheetsService.createOrUpdateWithinDay(
      req.user.employeeId,
    );
  }
}
