import { google, drive_v3 } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GaxiosResponse } from 'gaxios';

const drive = google.drive('v3');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// Define the Photo interface
interface Photo {
  id: string;
  name: string;
  thumbnailLink: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const authClient = (await auth.getClient()) as any;
    google.options({ auth: authClient });

    const folderId = process.env.YOUR_GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      throw new Error('Missing Google Drive Folder ID');
    }

    let photos: Photo[] = [];
    let pageToken: string | null = null;

    do {
      const response: GaxiosResponse<drive_v3.Schema$FileList> = await drive.files.list({
        q: `'${folderId}' in parents and mimeType contains 'image/'`,
        fields: 'nextPageToken, files(id, name, thumbnailLink)',
        pageToken: pageToken || undefined,
      });

      if (response.data.files) {
        photos = photos.concat(response.data.files as Photo[]);
      }
      pageToken = response.data.nextPageToken || null;
    } while (pageToken);

    res.status(200).json(photos);
  } catch (error) {
    console.error('Error fetching photos from Google Drive:', error);
    res.status(500).json({ error: 'Error fetching photos from Google Drive' });
  }
}