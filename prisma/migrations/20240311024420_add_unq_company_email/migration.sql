/*
  Warnings:

  - A unique constraint covering the columns `[companyEmail]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Employee_companyEmail_key` ON `Employee`(`companyEmail`);
