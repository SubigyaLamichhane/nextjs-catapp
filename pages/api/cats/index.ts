import { NextApiRequest, NextApiResponse } from 'next';
import { cats } from '../../../data';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cats);
}
