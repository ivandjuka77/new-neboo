-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_contactId_fkey";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "contactId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "People"("id") ON DELETE SET NULL ON UPDATE CASCADE;
