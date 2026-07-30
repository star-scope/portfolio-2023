import type { NextApiRequest, NextApiResponse } from 'next';
import { getStoredAccessToken, refreshLongLivedToken, setStoredAccessToken } from '../../../src/lib/instagram';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const token = await getStoredAccessToken();
    if (!token) {
      return res.status(503).json({ error: 'Instagram is not connected yet.' });
    }

    const refreshedToken = await refreshLongLivedToken(token);
    await setStoredAccessToken(refreshedToken);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
