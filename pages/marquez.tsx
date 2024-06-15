import { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import styles from '../pages/marquez.module.css';

interface Photo {
  id: string;
  name: string;
  thumbnailLink: string;
}

const Marquez: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>('/api/googleDrivePhotos');
        setPhotos(response.data.reverse());
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const downloadAll = () => {
    window.location.href = 'https://drive.google.com/drive/folders/1jktnKTUnbMaCZYL09PezC98BHsC6ffQ8?usp=drive_link';
  };

  const getDirectImageLink = (fileId: string) => `https://drive.google.com/uc?export=download&id=${fileId}`;
  const getThumbnailLink = (fileId: string) => `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000-h750`;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Image className={styles.icon} src="/images/signature.png" alt="Signature White" width={80} height={80}></Image>
      <form className={styles.form}>
        <div className={styles.buttonWrapper} id="section3">
          <button className={styles.button} type="button" onClick={downloadAll}>
            DOWNLOAD ALL
          </button>
        </div>
      </form>
      <div className={styles.masonryWrapper}>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.myMasonryGrid}
            columnClassName={styles.myMasonryGridColumn}
        >
            {photos.map((photo, index) => (
            <a key={index} href={getDirectImageLink(photo.id)} download={photo.name}>
                <Image
                className={styles.image}
                src={getThumbnailLink(photo.id)}
                alt={photo.name}
                width={300}
                height={200}
                layout="responsive"
                loading="lazy"
                blurDataURL={getThumbnailLink(photo.id)}
                placeholder="blur"
                />
            </a>
            ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Marquez;
