import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getWork() {
  const jobs = await prisma.work.findMany()
  return jobs
}
