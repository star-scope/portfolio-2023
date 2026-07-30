import crypto from 'crypto';

export const WORK_COOKIE_NAME = 'work_access';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error('Missing SESSION_SECRET environment variable');
  }
  return secret;
}

export function createWorkAccessToken(): string {
  return crypto.createHmac('sha256', getSessionSecret()).update('work-access-granted').digest('hex');
}

export function isValidWorkAccessToken(token: string | undefined | null): boolean {
  if (!token) return false;

  const expected = createWorkAccessToken();
  const provided = Buffer.from(token);
  const expectedBuf = Buffer.from(expected);

  return provided.length === expectedBuf.length && crypto.timingSafeEqual(provided, expectedBuf);
}

export function serializeWorkCookie(token: string): string {
  const parts = [
    `${WORK_COOKIE_NAME}=${token}`,
    'Path=/',
    `Max-Age=${MAX_AGE_SECONDS}`,
    'HttpOnly',
    'SameSite=Lax',
  ];
  if (process.env.NODE_ENV === 'production') {
    parts.push('Secure');
  }
  return parts.join('; ');
}
