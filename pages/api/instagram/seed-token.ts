import type { NextApiRequest, NextApiResponse } from 'next';
import { setStoredAccessToken } from '../../../src/lib/instagram';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, secret } = req.query;

  // Next sets no Content-Type for string bodies; pin it so nothing here is MIME sniffed.
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (typeof secret !== 'string' || secret !== process.env.CRON_SECRET) {
    return res.status(401).send('Unauthorized');
  }

  if (typeof token !== 'string' || token.length === 0) {
    return res.status(400).send('Missing "token" query parameter.');
  }

  try {
    await setStoredAccessToken(token);
    res.status(200).send('Instagram token saved. /photography is ready to go.');
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).send(`Failed to save token: ${message}`);
  }
}
