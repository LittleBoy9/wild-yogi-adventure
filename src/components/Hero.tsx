'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COPY } from '@/content/copy';
import { SITE, WHATSAPP_HELLO, whatsappLink } from '@/content/site';
import { ArrowRight } from './Icons';
import styles from './Hero.module.css';

/**
 * `position` is the focal point. The hero is full-bleed, so on a phone it
 * crops to a tall centre slice — which pushed the hiker in the second frame
 * almost out of shot at the default 50%. On desktop the container is wider
 * than these images are, so `cover` scales by width and the horizontal value
 * has no effect there; it only steers the phone crop.
 */
const SLIDES = [
  { src: '/img/hero/v1-1.webp', position: '50% 50%', alt: "The trekkers' hut at Sandakphu at golden hour" },
  { src: '/img/hero/v1-2.webp', position: '62% 50%', alt: 'A trekker looking out at a misty Himalayan peak' },
  { src: '/img/hero/v1-3.webp', position: '50% 50%', alt: 'A snow face above the treeline' },
  { src: '/img/hero/v1-4.webp', position: '56% 50%', alt: 'Deoria Tal, with snow peaks reflected in the lake' },
];

const INTERVAL = 6500;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={styles.slide}
            data-on={i === active}
            role="img"
            aria-label={i === active ? s.alt : undefined}
            aria-hidden={i !== active}
            style={{ backgroundImage: `url('${s.src}')`, backgroundPosition: s.position }}
          />
        ))}
      </div>
      <div className={styles.scrim} />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>{COPY.eyebrow}</p>
        <h1 className={styles.title}>
          <span><i>{COPY.titleA}</i></span>
          <span><i>{COPY.titleB}</i></span>
        </h1>
        <p className={styles.sub}>{COPY.sub}</p>

        <div className={styles.ctas}>
          <Link className="btn btn--fill" href="/treks">
            {COPY.ctaA}
            <ArrowRight />
          </Link>
          <a
            className="btn btn--onDark"
            href={whatsappLink(WHATSAPP_HELLO)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {COPY.ctaB}
          </a>
        </div>

        <Link className={styles.proof} href="/#reviews">
          <span className={styles.stars} aria-hidden="true">★★★★★</span>
          <b>{SITE.rating.toFixed(1)}</b>
          <span className={styles.proofMeta}>
            <b>{SITE.reviewCount}</b> Google reviews
          </span>
        </Link>
      </div>

      <div className={styles.dots}>
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-current={i === active}
            aria-label={`Show image ${i + 1} of ${SLIDES.length}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <Link className={styles.scroll} href="/#escapes">
        <b className={styles.scrollLine}><i /></b>
        <span>{COPY.scroll}</span>
      </Link>
    </section>
  );
}
