import type { NextApiRequest, NextApiResponse } from 'next';
import {
  exchangeCodeForShortLivedToken,
  exchangeForLongLivedToken,
  setStoredAccessToken,
} from '../../../src/lib/instagram';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, error, error_description } = req.query;

  // Next sets no Content-Type for string bodies, which leaves these responses open to
  // MIME sniffing. error/error_description come straight off the query string, so pin
  // them to plain text rather than letting a browser decide they might be HTML.
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (error) {
    return res.status(400).send(`Instagram authorization failed: ${error_description || error}`);
  }

  if (typeof code !== 'string') {
    return res.status(400).send('Missing "code" query parameter from Instagram redirect.');
  }

  try {
    // Instagram appends "#_" to the code on some redirects; strip it defensively.
    const cleanCode = code.replace(/#_$/, '');
    const shortLivedToken = await exchangeCodeForShortLivedToken(cleanCode);
    const longLivedToken = await exchangeForLongLivedToken(shortLivedToken);
    await setStoredAccessToken(longLivedToken);

    res.status(200).send('Instagram connected successfully. You can close this tab — /photography is ready to go.');
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).send(`Failed to connect Instagram: ${message}`);
  }
}
