import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/content/categories';
import { SITE } from '@/content/site';
import { TREKS } from '@/content/treks';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/img/brand/logo.webp" alt="" width={62} height={62} />
          <p className={styles.tag}>
            Walk into the wild.
            <br />
            Return to yourself.
          </p>
          <p className={styles.real}>
            Their printed banners say: “{SITE.tagline}”
          </p>
        </div>

        <div className={styles.col}>
          <h3>Explore</h3>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={c.live ? '/treks' : '/#escapes'}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Journeys</h3>
          <ul>
            {TREKS.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link href={`/treks/${t.slug}`}>{t.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Contact</h3>
          <ul>
            {SITE.phones.map((p) => (
              <li key={p.e164}>
                <a href={`tel:${p.e164}`}>+91 {p.display}</a>
              </li>
            ))}
            <li>
              <a
                href={`https://www.instagram.com/${SITE.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{SITE.instagram}
              </a>
            </li>
            <li className={styles.addr}>{SITE.address.full}</li>
          </ul>
        </div>
      </div>

      <div className={`wrap ${styles.base}`}>
        <span>
          © {new Date().getFullYear()} {SITE.name} · Est {SITE.established}
        </span>
        <span className={styles.rating}>
          ★ {SITE.rating.toFixed(1)} · {SITE.reviewCount} Google reviews
        </span>
      </div>
    </footer>
  );
}
