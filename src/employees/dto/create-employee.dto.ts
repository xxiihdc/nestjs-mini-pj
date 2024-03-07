import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from "class-validator";
import { $Enums, Employee } from "@prisma/client";
import { BaseDto } from "src/app.base.dto";

export class CreateEmployeeDto extends BaseDto<Employee>{
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

  @IsNotEmpty()
  contractStartDate: Date

  @IsNotEmpty()
  contractEndDate: Date

  @IsString()
  @IsNotEmpty()
  contractType: string;

  @IsNotEmpty()
  companyId: number
}
