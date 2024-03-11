import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [PrismaModule],
  exports: [EmployeesService],
})
export class EmployeesModule {}
