import { Test, TestingModule } from '@nestjs/testing';
import { UserTimesheetsController } from './user_timesheets.controller';
import { UserTimeSheetsService } from './user_timesheets.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from '../users/users.service';
import { UserTimeSheetRepository } from '../repositories/user.timesheet.repository';
import { UserRepository } from '../repositories/user.repository';

describe('UserTimesheetsController', () => {
  let controller: UserTimesheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTimesheetsController],
      providers: [
        UserTimeSheetsService,
        UsersService,
        UserRepository,
        UserTimeSheetRepository,
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UserTimesheetsController>(UserTimesheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// describe('create user time sheet', () => {
//   let controller: UserTimesheetsController;
//   let timesheetService: UserTimeSheetsService;

//   it('should return the object was created', async () => {
//     const userId = '1';
//     jest.spyOn(timesheetService, 'create').mockResolvedValueOnce(mockTimeSheet);
//     const result = await controller.create(mockTimeSheet);
//     expect(result).toEqual(mockTimeSheet);
//   });
// });
