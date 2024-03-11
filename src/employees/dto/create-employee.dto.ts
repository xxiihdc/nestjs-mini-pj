import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { $Enums, Employee } from "@prisma/client";
import { BaseDto, IBaseDto } from "src/app.base.dto";

export class CreateEmployeeDto extends BaseDto<Employee> implements IBaseDto<Employee> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string

  @IsString()
  @IsNotEmpty()
  fullName: string

  @IsEmail()
  companyEmail: string

  @IsString()
  @IsNotEmpty()
  companyUniqueName: string

  @IsString()
  @IsNotEmpty()
  status: string;


  @IsString()
  @IsNotEmpty()
  contractType: string;

  @IsNotEmpty()
  companyId: number


  toObject(): Employee {
    return this.copyObject();
  }
}
