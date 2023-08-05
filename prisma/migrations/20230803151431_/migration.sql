/*
  Warnings:

  - You are about to drop the column `applied` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `interview` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `offer` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `screeningCall` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "applied",
DROP COLUMN "interview",
DROP COLUMN "offer",
DROP COLUMN "screeningCall",
ADD COLUMN     "datePosted" TEXT,
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "salary" TEXT;
