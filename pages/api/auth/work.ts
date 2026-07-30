import type { NextApiRequest, NextApiResponse } from 'next';
import { createWorkAccessToken, serializeWorkCookie } from '../../../src/lib/workAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const correctPassword = process.env.WORK_PAGE_PASSWORD;
  if (!correctPassword) {
    return res.status(500).json({ success: false, error: 'Server is missing WORK_PAGE_PASSWORD' });
  }

  const { password } = req.body || {};
  if (typeof password !== 'string' || password !== correctPassword) {
    return res.status(401).json({ success: false, error: 'Incorrect password' });
  }

  const token = createWorkAccessToken();
  res.setHeader('Set-Cookie', serializeWorkCookie(token));
  return res.status(200).json({ success: true });
}
