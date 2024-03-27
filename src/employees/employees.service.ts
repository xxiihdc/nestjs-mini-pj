import { Injectable } from '@nestjs/common';
import { CrudService } from '../../src/prisma/crud.service';
import { Employee } from '@prisma/client';
import { EmployeeRepository } from '../repositories/employee.repository';

@Injectable()
export class EmployeesService extends CrudService<Employee> {
  constructor(readonly repository: EmployeeRepository) {
    super(repository);
  }

  // async findByEmail(email: string): Promise<Employee> {
  //   return await this.prismaService.employee
  //     .findUniqueOrThrow({
  //       where: {
  //         companyEmail: email,
  //       },
  //     })
  //     .then((emp) => emp);
  // }
}
