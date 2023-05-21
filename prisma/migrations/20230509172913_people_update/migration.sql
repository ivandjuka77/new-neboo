-- CreateTable
CREATE TABLE "People" (
    "name" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobCompanyName" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "People_name_key" ON "People"("name");
