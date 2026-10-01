import Image from 'next/image';
import { INSTAGRAM, imageSize } from '@/content/media';
import { SITE } from '@/content/site';
import { ArrowRight, Instagram, Play } from './Icons';
import styles from './InstagramStrip.module.css';

/**
 * Their ten most recent real posts, each deep-linking to that post.
 *
 * Not a live feed, and that is a platform limit rather than a choice:
 * Instagram's Basic Display API shut down in December 2024, and the Graph API
 * needs a linked Facebook Business account plus a server to hold the token.
 * Thumbnails are self-hosted because Instagram's CDN URLs are signed and
 * expire within days.
 */
export function InstagramStrip() {
  return (
    <>
      <div className={`wrap ${styles.head}`}>
        <div>
          <p className="kick">Instagram</p>
          <h2 className={styles.handle}>@{SITE.instagram}</h2>
        </div>
        <a
          className="btn btn--fill"
          href={`https://www.instagram.com/${SITE.instagram}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
          <ArrowRight />
        </a>
      </div>

      <div className={styles.row}>
        {INSTAGRAM.map((p) => {
          const size = imageSize(p.image);
          return (
            <a
              key={p.href}
              className={styles.cell}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View this post on Instagram, posted ${p.date}`}
            >
              <Image
                src={p.image}
                alt={`Instagram post by Wild Yogi Adventures, ${p.date}`}
                width={size.w}
                height={size.h}
                loading="lazy"
                sizes="230px"
              />
              {p.reel && (
                <span className={styles.reel}><Play /></span>
              )}
              <span className={styles.overlay}>
                <Instagram />
                <span className={styles.date}>{p.date}</span>
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
