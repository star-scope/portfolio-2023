import { Redis } from '@upstash/redis';

const TOKEN_KEY = 'instagram:access_token';

function getRedisUrl(): string {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  if (!url) {
    throw new Error('Missing KV_REST_API_URL (or UPSTASH_REDIS_REST_URL) environment variable');
  }
  return url;
}

function getRedisToken(): string {
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!token) {
    throw new Error('Missing KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_TOKEN) environment variable');
  }
  return token;
}

const redis = new Redis({ url: getRedisUrl(), token: getRedisToken() });

export interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

export function getRedirectUri(): string {
  const uri = process.env.INSTAGRAM_REDIRECT_URI;
  if (!uri) {
    throw new Error('Missing INSTAGRAM_REDIRECT_URI environment variable');
  }
  return uri;
}

export async function getStoredAccessToken(): Promise<string | null> {
  return redis.get<string>(TOKEN_KEY);
}

export async function setStoredAccessToken(token: string): Promise<void> {
  await redis.set(TOKEN_KEY, token);
}

export async function exchangeCodeForShortLivedToken(code: string): Promise<string> {
  const appId = process.env.INSTAGRAM_APP_ID;
  const appSecret = process.env.INSTAGRAM_APP_SECRET;
  if (!appId || !appSecret) {
    throw new Error('Missing INSTAGRAM_APP_ID or INSTAGRAM_APP_SECRET environment variable');
  }

  const body = new URLSearchParams({
    client_id: appId,
    client_secret: appSecret,
    grant_type: 'authorization_code',
    redirect_uri: getRedirectUri(),
    code,
  });

  const response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body,
  });

  if (!response.ok) {
    throw new Error(`Failed to exchange code for short-lived token: ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function exchangeForLongLivedToken(shortLivedToken: string): Promise<string> {
  const appSecret = process.env.INSTAGRAM_APP_SECRET;
  if (!appSecret) {
    throw new Error('Missing INSTAGRAM_APP_SECRET environment variable');
  }

  const params = new URLSearchParams({
    grant_type: 'ig_exchange_token',
    client_secret: appSecret,
    access_token: shortLivedToken,
  });

  const response = await fetch(`https://graph.instagram.com/access_token?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to exchange for long-lived token: ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function refreshLongLivedToken(currentToken: string): Promise<string> {
  const params = new URLSearchParams({
    grant_type: 'ig_refresh_token',
    access_token: currentToken,
  });

  const response = await fetch(`https://graph.instagram.com/refresh_access_token?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to refresh long-lived token: ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

export interface InstagramMediaPage {
  media: InstagramMedia[];
  nextCursor: string | null;
}

export async function fetchInstagramMedia(
  token: string,
  { after, limit = 50 }: { after?: string; limit?: number } = {}
): Promise<InstagramMediaPage> {
  const params = new URLSearchParams({
    fields: 'id,media_type,media_url,permalink',
    limit: String(limit),
    access_token: token,
  });
  if (after) {
    params.set('after', after);
  }

  const response = await fetch(`https://graph.instagram.com/me/media?${params}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Instagram media: ${await response.text()}`);
  }

  const data = await response.json();
  const media = (data.data as InstagramMedia[]).filter((item) => item.media_type === 'IMAGE');
  const nextCursor: string | null = data.paging?.cursors?.after ?? null;

  return { media, nextCursor };
}
