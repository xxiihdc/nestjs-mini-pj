import { Injectable } from '@nestjs/common';
import { CrudService } from '../../src/prisma/crud.service';
import { Employee } from '@prisma/client';
import { PrismaService } from '../../src/prisma/prisma.service';

@Injectable()
export class EmployeesService extends CrudService<Employee> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, 'Employee');
  }

  async findByEmail(email: string): Promise<Employee> {
    return await this.prismaService.employee
      .findUniqueOrThrow({
        where: {
          companyEmail: email,
        },
      })
      .then((emp) => emp);
  }
}
