/*
  Warnings:

  - You are about to drop the column `company_domain` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `plan_type` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `parent_id` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Holiday` table. All the data in the column will be lost.
  - You are about to drop the column `edited_by_id` on the `UserTimeSheet` table. All the data in the column will be lost.
  - You are about to drop the column `employee_id` on the `UserTimeSheet` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `UserTimeSheet` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `UserTimeSheet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[parentId]` on the table `Group` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyDomain` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Holiday` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `UserTimeSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `UserTimeSheet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `Group` DROP FOREIGN KEY `Group_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `Group` DROP FOREIGN KEY `Group_parent_id_fkey`;

-- DropForeignKey
ALTER TABLE `Holiday` DROP FOREIGN KEY `Holiday_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserTimeSheet` DROP FOREIGN KEY `UserTimeSheet_edited_by_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserTimeSheet` DROP FOREIGN KEY `UserTimeSheet_employee_id_fkey`;

-- AlterTable
ALTER TABLE `Company` DROP COLUMN `company_domain`,
    DROP COLUMN `plan_type`,
    ADD COLUMN `companyDomain` VARCHAR(191) NOT NULL,
    ADD COLUMN `planType` ENUM('FREE', 'PRO', 'BUSINESS') NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `company_id`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Group` DROP COLUMN `company_id`,
    DROP COLUMN `parent_id`,
    ADD COLUMN `companyId` INTEGER NOT NULL,
    ADD COLUMN `parentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Holiday` DROP COLUMN `company_id`,
    ADD COLUMN `companyId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserTimeSheet` DROP COLUMN `edited_by_id`,
    DROP COLUMN `employee_id`,
    DROP COLUMN `end_time`,
    DROP COLUMN `start_time`,
    ADD COLUMN `editedById` INTEGER NULL,
    ADD COLUMN `employeeId` INTEGER NOT NULL,
    ADD COLUMN `endTime` DATETIME(3) NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE INDEX `Employee_company_id_fkey` ON `Employee`(`companyId`);

-- CreateIndex
CREATE UNIQUE INDEX `Group_parentId_key` ON `Group`(`parentId`);

-- CreateIndex
CREATE INDEX `Group_company_id_fkey` ON `Group`(`companyId`);

-- CreateIndex
CREATE INDEX `Holiday_company_id_fkey` ON `Holiday`(`companyId`);

-- CreateIndex
CREATE INDEX `UserTimeSheet_edited_by_id_fkey` ON `UserTimeSheet`(`editedById`);

-- CreateIndex
CREATE INDEX `UserTimeSheet_employee_id_fkey` ON `UserTimeSheet`(`employeeId`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Group`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Holiday` ADD CONSTRAINT `Holiday_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTimeSheet` ADD CONSTRAINT `UserTimeSheet_editedById_fkey` FOREIGN KEY (`editedById`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTimeSheet` ADD CONSTRAINT `UserTimeSheet_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
