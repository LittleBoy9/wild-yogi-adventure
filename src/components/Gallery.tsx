'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GALLERY, imageSize } from '@/content/media';
import { Lightbox } from './Lightbox';
import styles from './Gallery.module.css';

const PAGE = 20;

export function Gallery() {
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);
  const visible = GALLERY.slice(0, shown);

  return (
    <>
      <div className={styles.masonry}>
        {visible.map((p, i) => {
          const size = imageSize(p.sm);
          return (
            <button
              key={p.sm}
              type="button"
              className={styles.item}
              onClick={() => setOpen(i)}
              aria-label={`Open photograph ${i + 1} of ${GALLERY.length}`}
            >
              <Image
                src={p.sm}
                alt=""
                width={size.w}
                height={size.h}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 260px"
              />
            </button>
          );
        })}
      </div>

      {shown < GALLERY.length && (
        <div className={styles.more}>
          <button
            type="button"
            className="btn btn--line"
            onClick={() => setShown((n) => Math.min(n + PAGE, GALLERY.length))}
          >
            Show more photographs
          </button>
        </div>
      )}

      {open !== null && (
        <Lightbox
          photos={visible}
          index={open}
          label="Wild Yogi Adventures"
          onClose={() => setOpen(null)}
          onMove={(d) => setOpen((i) => (i === null ? i : (i + d + visible.length) % visible.length))}
        />
      )}
    </>
  );
}
