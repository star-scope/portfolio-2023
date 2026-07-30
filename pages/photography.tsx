import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from 'axios';

// Styles
import styles from "./photography.module.css";

// Components
import BackButtonHeader from '../src/components/nav/backHeader'

interface Photo {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>('/api/instagram/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching Instagram photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <Head>
        <title>Caleb Faulkner - Photography</title>
      </Head>
      <BackButtonHeader title="PHOTOGRAPHY" />
      <div className={styles.grid}>
        {photos.map((photo) => (
          <a key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer">
            <img className={styles.image} src={photo.media_url} alt="" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Photography;
