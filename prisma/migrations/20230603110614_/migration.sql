-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "applied" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "interview" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notes" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "offer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "screeningCall" BOOLEAN NOT NULL DEFAULT false;
