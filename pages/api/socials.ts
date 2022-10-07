import type { NextApiRequest, NextApiResponse } from 'next';
import { socials } from './data/socials';
import { SocialData } from '../../types/social-data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialData[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(socials)
  }
}
