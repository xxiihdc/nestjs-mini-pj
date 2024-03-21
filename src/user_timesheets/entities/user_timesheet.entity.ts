import { UserTimeSheet } from '@prisma/client';

export class UserTimesheet {
  static getInstance(data: UserTimeSheet) {
    return new UserTimesheet(data);
  }

  constructor(data: UserTimeSheet) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        copyKey(key as keyof UserTimeSheet);
      }
    }

    function copyKey(key: keyof UserTimeSheet) {
      this[key] = data[key];
    }
  }

  id: number;
  employeeId: number;
  startTime: Date;
  endTime: Date;
  editedById?: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;

  addEndTime(time: Date): UserTimesheet {
    this.endTime = time;
    return this;
  }
}
