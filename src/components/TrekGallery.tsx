'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { GalleryImage } from '@/types';
import { imageSize } from '@/content/media';
import { Lightbox } from './Lightbox';
import styles from './TrekGallery.module.css';

export function TrekGallery({ photos, trekName }: { photos: GalleryImage[]; trekName: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((p, i) => {
          const size = imageSize(p.sm);
          return (
            <button
              key={p.sm}
              type="button"
              className={styles.thumb}
              onClick={() => setOpen(i)}
              aria-label={`Open photograph ${i + 1} of ${photos.length}`}
            >
              <Image
                src={p.sm}
                alt=""
                width={size.w}
                height={size.h}
                loading="lazy"
                sizes="(max-width: 700px) 50vw, 220px"
              />
            </button>
          );
        })}
      </div>

      {open !== null && (
        <Lightbox
          photos={photos}
          index={open}
          label={trekName}
          onClose={() => setOpen(null)}
          onMove={(d) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length))}
        />
      )}
    </>
  );
}
