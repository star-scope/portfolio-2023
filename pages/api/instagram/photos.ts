import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchInstagramMedia, getStoredAccessToken } from '../../../src/lib/instagram';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await getStoredAccessToken();
    if (!token) {
      return res.status(503).json({ error: 'Instagram is not connected yet.' });
    }

    const media = await fetchInstagramMedia(token);
    res.status(200).json(media);
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
