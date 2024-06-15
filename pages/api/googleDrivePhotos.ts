import { google, drive_v3 } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

const drive = google.drive('v3');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authClient = (await auth.getClient()) as any; // Explicit type assertion
    google.options({ auth: authClient });

    const folderId = process.env.YOUR_GOOGLE_DRIVE_FOLDER_ID;

    let photos = [];
    let pageToken: string | null = null;

    do {
      const response = await drive.files.list({
        q: `'${folderId}' in parents and mimeType contains 'image/'`,
        fields: 'nextPageToken, files(id, name, thumbnailLink)',
        pageToken: pageToken || undefined,
      });

      if (response.data.files) {
        photos = photos.concat(response.data.files);
      }
      pageToken = response.data.nextPageToken;
    } while (pageToken);

    res.status(200).json(photos);
  } catch (error) {
    console.error('Error fetching photos from Google Drive:', error);
    res.status(500).json({ error: 'Error fetching photos from Google Drive' });
  }
}
