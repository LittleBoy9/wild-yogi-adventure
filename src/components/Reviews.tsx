import type { Review } from '@/types';
import styles from './Reviews.module.css';

function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <span className={styles.avatar} aria-hidden="true">{initials(review.name)}</span>
        <span>
          <b className={styles.name}>{review.name}</b>
          <time className={styles.when}>{review.when}</time>
        </span>
        <span className={styles.stars} aria-label={`${review.stars} out of 5 stars`}>
          {'★'.repeat(review.stars)}
        </span>
      </header>
      <p className={styles.text}>
        {review.text}
        {review.trimmed && <span className={styles.trimmed}> …</span>}
      </p>
    </article>
  );
}

/** Duplicated once so the marquee loops without a visible seam. */
export function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  return (
    <div className={styles.row}>
      <div className={styles.track}>
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export function ReviewGrid({ reviews, note }: { reviews: Review[]; note?: string }) {
  return (
    <>
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
      {note && <p className={styles.note}>{note}</p>}
    </>
  );
}
