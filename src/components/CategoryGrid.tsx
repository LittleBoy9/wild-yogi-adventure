import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/content/categories';
import { TREKS } from '@/content/treks';
import { whatsappLink } from '@/content/site';
import { imageSize } from '@/content/media';
import { ArrowRight } from './Icons';
import styles from './CategoryGrid.module.css';

export function CategoryGrid() {
  return (
    <div className={styles.grid}>
      {CATEGORIES.map((c) => {
        const size = imageSize(c.image);
        const inner = (
          <>
            <Image
              src={c.image}
              alt=""
              width={size.w}
              height={size.h}
              sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
            />
            <span className={`${styles.tag} ${c.live ? '' : styles.tagSoft}`}>
              {c.live ? `${TREKS.length} journeys` : 'Enquire'}
            </span>
            <span className={styles.body}>
              <span className={styles.n}>{c.n}</span>
              <h3 className={styles.name}>{c.name}</h3>
              <p className={styles.blurb}>{c.blurb}</p>
              <span className={styles.meta}>
                <span>{c.meta}</span>
                <span className={styles.go}>
                  {c.live ? 'Browse' : 'Ask us'}
                  <ArrowRight />
                </span>
              </span>
            </span>
          </>
        );

        const className = `${styles.card} ${c.live ? styles.wide : ''}`;

        // Only Treks has real content behind it. The rest open a WhatsApp
        // enquiry rather than pretending to a page that does not exist.
        return c.live ? (
          <Link key={c.slug} href="/treks" className={className}>{inner}</Link>
        ) : (
          <a
            key={c.slug}
            href={whatsappLink(
              `Hi Wild Yogi Adventures! I am interested in your ${c.name}. What do you currently run?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
