import { ClassSerializerInterceptor, Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { UserTimeSheetsService } from './user_timesheets.service';
import { RequestModel } from '../common/req';
import { ResponseData } from '../common/response.data';
import { HasRole } from '../common/decorators/role.decorator';
import { SetupAPIDocs } from '../common/decorators/setup.api.doc.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('api/v1/user-timesheets')
@UseInterceptors(ClassSerializerInterceptor)
export class UserTimesheetsController {
  constructor(private readonly userTimesheetsService: UserTimeSheetsService) {}

  @Post('/')
  @HasRole("user")
  @SetupAPIDocs()
  @ApiBearerAuth()
  async create(@Req() req: RequestModel) {
    const data = await this.userTimesheetsService.createOrUpdateWithinDay(req.user.employeeId);
    return ResponseData.responseOK(data);
  }
}


