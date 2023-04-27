-- CreateTable
CREATE TABLE "Works" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "techs" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Works_pkey" PRIMARY KEY ("id")
);
