/*
  Warnings:

  - You are about to drop the column `contact` on the `Job` table. All the data in the column will be lost.
  - Added the required column `contactId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "contact",
ADD COLUMN     "contactId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "People"("id") ON DELETE CASCADE ON UPDATE CASCADE;
