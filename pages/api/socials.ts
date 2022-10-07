import type { NextApiRequest, NextApiResponse } from 'next';
import { socials } from './data/socials';

type Data = {
  id: number,
  icon: string,
  path: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(socials)
}
