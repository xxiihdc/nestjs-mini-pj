import { $Enums } from "@prisma/client";

export class Employee {
  id: number;
  code: string;
  fullName: string;
  companyEmail: string;
  companyUniqueName: string;
  status: $Enums.EmployeeStatus
  contractStartDate: Date;
  contractEndDate: Date;
  contractType: $Enums.contractType
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
}
