import React, { useCallback, useEffect, useRef, useState } from "react";
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

interface PhotosResponse {
  media: Photo[];
  nextCursor: string | null;
}

const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasFetchedFirstPage = useRef(false);

  const loadMore = useCallback(async (after?: string) => {
    setLoading(true);
    try {
      const response = await axios.get<PhotosResponse>('/api/instagram/photos', {
        params: after ? { after } : {},
      });
      setPhotos((prev) => (after ? [...prev, ...response.data.media] : response.data.media));
      setNextCursor(response.data.nextCursor);
    } catch (error) {
      console.error('Error fetching Instagram photos:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (hasFetchedFirstPage.current) return;
    hasFetchedFirstPage.current = true;
    loadMore();
  }, [loadMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextCursor && !loading) {
          loadMore(nextCursor);
        }
      },
      { rootMargin: '600px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [nextCursor, loading, loadMore]);

  return (
    <>
      <Head>
        <title>Caleb Faulkner - Photography</title>
      </Head>
      <BackButtonHeader title="PHOTOGRAPHY" />
      <div className={styles.grid}>
        {photos.map((photo) => (
          <a key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer">
            <img className={styles.image} src={photo.media_url} alt="" loading="lazy" />
          </a>
        ))}
      </div>
      <div ref={sentinelRef} style={{ height: 1 }} />
    </>
  );
};

export default Photography;
