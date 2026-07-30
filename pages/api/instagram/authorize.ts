import type { NextApiRequest, NextApiResponse } from 'next';
import { getRedirectUri } from '../../../src/lib/instagram';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const appId = process.env.INSTAGRAM_APP_ID;
  if (!appId) {
    return res.status(500).json({ error: 'Missing INSTAGRAM_APP_ID environment variable' });
  }

  const params = new URLSearchParams({
    client_id: appId,
    redirect_uri: getRedirectUri(),
    response_type: 'code',
    scope: 'instagram_business_basic',
  });

  res.redirect(`https://www.instagram.com/oauth/authorize?${params}`);
}
