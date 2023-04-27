// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getWork } from '@/lib/work';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET"){
    const jobs = await getWork()

    return res.status(200).json({
      data: jobs,
    })
  }
  
  return res.status(404).json({ message: "Route not found."})
}
