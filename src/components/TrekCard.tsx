import Image from 'next/image';
import Link from 'next/link';
import type { Trek } from '@/types';
import { imageSize } from '@/content/media';
import { ArrowRight } from './Icons';
import styles from './TrekCard.module.css';

export function TrekCard({ trek, priority = false }: { trek: Trek; priority?: boolean }) {
  const size = imageSize(trek.image);
  return (
    <Link href={`/treks/${trek.slug}`} className={styles.card}>
      <span className={styles.media}>
        <Image
          src={trek.image}
          alt={`${trek.name} — ${trek.region}`}
          width={size.w}
          height={size.h}
          priority={priority}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className={styles.badges}>
          {trek.flagship && <span className={`${styles.pill} ${styles.pillHot}`}>Flagship</span>}
          <span className={styles.pill}>{trek.grade}</span>
        </span>
        <span className={styles.alt}>{trek.altitudeLabel}</span>
      </span>

      <span className={styles.body}>
        <span className={styles.region}>{trek.region}</span>
        <h3 className={styles.name}>{trek.name}</h3>
        <p className={styles.hook}>{trek.hook}</p>
        <span className={styles.foot}>
          <span className={styles.days}>{trek.days}</span>
          <span className={styles.go}>
            View journey
            <ArrowRight />
          </span>
        </span>
      </span>
    </Link>
  );
}

export { styles as trekCardStyles };
