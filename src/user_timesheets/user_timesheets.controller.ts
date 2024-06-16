import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { UserTimeSheetsService } from './user_timesheets.service';
import { RequestModel } from '../common/req';
import { ResponseData } from '../common/response.data';
import { HasRole } from '../common/decorators/role.decorator';
import { SetupAPIDocs } from '../common/decorators/setup.api.doc.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserTimeSheetEntity } from './entities/user_timesheet.entity';

@Controller('api/v1/user-timesheets')
@UseInterceptors(ClassSerializerInterceptor)
export class UserTimesheetsController {
  constructor(private readonly userTimesheetsService: UserTimeSheetsService) {}

  @Post('/')
  @HasRole('user')
  @SetupAPIDocs()
  @ApiBearerAuth()
  async create(@Req() req: RequestModel) {
    const data = await this.userTimesheetsService.createOrUpdateWithinDay(
      req.user.employeeId,
    );
    return ResponseData.responseOK(data);
  }

  @Get('/')
  @HasRole('user')
  async index() {
    const decoratorsApplied = this.getDecorators(
      UserTimeSheetEntity.prototype,
      'type',
    );
    console.log(decoratorsApplied);
    const data = await this.userTimesheetsService.findAll();
    return ResponseData.responseOK(data);
  }

  getDecorators(target: any, propertyKey: string): string[] {
    const decorators: string[] = [];
    let currentTarget: any = target;
    while (currentTarget) {
      const decorator = Reflect.getMetadata(
        'decoratorName',
        currentTarget,
        propertyKey,
      );
      if (decorator) {
        decorators.push(decorator);
      }
      currentTarget = Object.getPrototypeOf(currentTarget);
    }
    return decorators;
  }
}
