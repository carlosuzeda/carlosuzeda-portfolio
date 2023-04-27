/*
  Warnings:

  - You are about to drop the `Works` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Works";

-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "techs" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);
