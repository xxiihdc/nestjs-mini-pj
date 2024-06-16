import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Employee } from '@prisma/client';
import { BaseDto, IBaseDto } from '../../../src/app.base.dto';

export class CreateEmployeeDto
  extends BaseDto<Employee>
  implements IBaseDto<Employee>
{
  logT(): {
    id: number;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    companyEmail: string;
    companyUniqueName: string;
    companyId: number;
    contractType: string;
    endDate: Date;
    fullName: string;
    startDate: Date;
  } {
    throw new Error('Method not implemented.');
  }
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  companyEmail: string;

  @IsString()
  @IsNotEmpty()
  companyUniqueName: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  contractType: string;

  @IsNotEmpty()
  companyId: number;

  toObject(): Employee {
    // return this.copyObject();
    return null;
  }
}
