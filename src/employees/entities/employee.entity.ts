import { $Enums } from "@prisma/client";

export class Employee {
  id: number;
  code: string;
  fullName: string;
  companyEmail: string;
  companyUniqueName: string;
  status: string;
  contractStartDate: Date;
  contractEndDate: Date;
  contractType: string;
  companyId: number;
  createdAt: Date;
  updatedAt: Date;
}
