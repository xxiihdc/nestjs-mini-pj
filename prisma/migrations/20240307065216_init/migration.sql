/*
  Warnings:

  - You are about to drop the column `Status` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `statusId` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `status` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `Status`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `statusId`;
