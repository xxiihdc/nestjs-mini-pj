import { Test, TestingModule } from '@nestjs/testing';
import { UserTimeSheetsService } from './user_timesheets.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../repositories/user.repository';
import { UserTimeSheetRepository } from '../repositories/user.timesheet.repository';
import { UserTimeSheetEntity } from './entities/user_timesheet.entity';

describe('UserTimeSheetsService', () => {
  let service: UserTimeSheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserTimeSheetsService,
        UsersService,
        UserRepository,
        UserTimeSheetRepository,
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UserTimeSheetsService>(UserTimeSheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('createOrUpdateWithinDay', () => {
  let service: UserTimeSheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserTimeSheetsService,
        UsersService,
        UserRepository,
        UserTimeSheetRepository,
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UserTimeSheetsService>(UserTimeSheetsService);
  });

  it('creates a new time sheet when none exists for the current day', async () => {
    service.repository.query = jest.fn().mockResolvedValue([]);

    const result = await service.createOrUpdateWithinDay(1);

    expect(result).toBeDefined();
  });

  it('updates an existing time sheet for the current day', async () => {
    const UserTimeSheet = new UserTimeSheetEntity({
      id: 1,
      startTime: new Date(),
    });
    service.repository.query = jest.fn().mockResolvedValue([UserTimeSheet]);

    const result = await service.createOrUpdateWithinDay(1);

    expect(result).toBeDefined();
    expect(result.endTime).toBeDefined();
  });
});
