import { Test, TestingModule } from '@nestjs/testing';
import { UserTimesheetsService } from './user_timesheets.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserTimesheetsService', () => {
  let service: UserTimesheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTimesheetsService, UsersService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UserTimesheetsService>(UserTimesheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('createOrUpdateWithinDay', () => {
  let service: UserTimesheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTimesheetsService, UsersService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UserTimesheetsService>(UserTimesheetsService);
  });

  it('creates a new time sheet when none exists for the current day', async () => {
    service.where = jest.fn().mockResolvedValue([]);

    const result = await service.createOrUpdateWithinDay(1);

    expect(result).toBeDefined();
  });

  it('updates an existing time sheet for the current day', async () => {
    service.where = jest
      .fn()
      .mockResolvedValue([{ id: 1, startTime: new Date() }]);

    const result = await service.createOrUpdateWithinDay(1);

    expect(result).toBeDefined();
    expect(result.endTime).toBeDefined();
  });
});
