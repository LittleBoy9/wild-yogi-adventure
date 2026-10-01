'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import type { GalleryImage } from '@/types';
import { imageSize } from '@/content/media';
import styles from './Lightbox.module.css';

/** Shared by the home gallery and each trek's photo set. */
export function Lightbox({
  photos,
  index,
  label,
  onClose,
  onMove,
}: {
  photos: GalleryImage[];
  index: number;
  label: string;
  onClose: () => void;
  onMove: (delta: number) => void;
}) {
  const touchX = useRef(0);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onMove(-1);
      if (e.key === 'ArrowRight') onMove(1);
    },
    [onClose, onMove],
  );

  useEffect(() => {
    document.body.dataset.locked = 'true';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.dataset.locked = 'false';
    };
  }, [onKey]);

  const photo = photos[index];
  const size = imageSize(photo.lg);

  return (
    <div
      className={styles.lb}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={(e) => { touchX.current = e.changedTouches[0].clientX; }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 55) onMove(dx < 0 ? 1 : -1);
      }}
    >
      <button type="button" className={`${styles.btn} ${styles.close}`} onClick={onClose} aria-label="Close">✕</button>
      <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={() => onMove(-1)} aria-label="Previous photograph">‹</button>
      <button type="button" className={`${styles.btn} ${styles.next}`} onClick={() => onMove(1)} aria-label="Next photograph">›</button>
      <Image
        src={photo.lg}
        alt={`${label} — photograph ${index + 1} of ${photos.length}`}
        width={size.w}
        height={size.h}
        sizes="94vw"
        priority
      />
      <div className={styles.count}>{index + 1} / {photos.length}</div>
    </div>
  );
}
