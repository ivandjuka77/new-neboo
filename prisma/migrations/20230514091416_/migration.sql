/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `People` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `People` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "People_name_key";

-- AlterTable
ALTER TABLE "People" ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "People_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "People_id_key" ON "People"("id");

-- AddForeignKey
ALTER TABLE "People" ADD CONSTRAINT "People_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
