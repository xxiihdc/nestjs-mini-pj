import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaModule } from '../../src/prisma/prisma.module';
import { EmployeeRepository } from '../repositories/employee.repository';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository],
  imports: [PrismaModule],
  exports: [EmployeesService],
})
export class EmployeesModule {}
