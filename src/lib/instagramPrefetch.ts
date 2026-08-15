import axios from 'axios';

// Warms the photography page from the side projects page, which links to it.
//
// Two things make /photography feel slow on arrival: the API round trip, which
// has to reach Redis for the token and then Instagram for the media, and the
// images themselves. Starting both while someone is still reading the side
// projects list means the grid usually has data and cached images by the time
// they click through.
//
// The cache lives at module scope, which survives client-side navigation but
// not a hard reload. Landing on /photography directly just takes the normal
// path, so this is a speedup and never a correctness dependency.

export interface Photo {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

export interface PhotosResponse {
  media: Photo[];
  nextCursor: string | null;
}

// Long enough to cover a browse through the side projects page, short enough
// that a new post isn't missed by someone who left the tab open.
const TTL_MS = 5 * 60 * 1000;

// Roughly the first couple of rows. Warming all 50 would compete for bandwidth
// with the images actually on screen.
const IMAGES_TO_WARM = 12;

let cached: { at: number; promise: Promise<PhotosResponse> } | null = null;

function isFresh(entry: typeof cached): entry is NonNullable<typeof cached> {
  return entry !== null && Date.now() - entry.at < TTL_MS;
}

function warmImages(media: Photo[]): void {
  media.slice(0, IMAGES_TO_WARM).forEach((photo) => {
    const img = new Image();
    img.src = photo.media_url;
  });
}

export function prefetchPhotos(): void {
  if (isFresh(cached)) return;

  const promise = axios
    .get<PhotosResponse>('/api/instagram/photos')
    .then((response) => {
      warmImages(response.data.media);
      return response.data;
    });

  // A failed warm-up should be invisible: drop it so the page falls back to its
  // own request, and keep it from surfacing as an unhandled rejection.
  promise.catch(() => {
    cached = null;
  });

  cached = { at: Date.now(), promise };
}

export function takePrefetchedPhotos(): Promise<PhotosResponse> | null {
  return isFresh(cached) ? cached.promise : null;
}
