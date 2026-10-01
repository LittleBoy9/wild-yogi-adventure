'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE, WHATSAPP_HELLO, whatsappLink } from '@/content/site';
import { useTheme } from '@/lib/useTheme';
import { Moon, Sun } from './Icons';
import styles from './Nav.module.css';

const LINKS = [
  { href: '/#escapes', label: 'Escapes' },
  { href: '/treks', label: 'Journeys' },
  { href: '/#why', label: 'Why us' },
  { href: '/#reviews', label: 'Reviews' },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.locked = open ? 'true' : 'false';
    return () => { document.body.dataset.locked = 'false'; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`${styles.nav} ${stuck ? styles.stuck : ''}`}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/img/brand/logo.webp"
            alt=""
            width={42}
            height={42}
            priority
          />
          <span className={styles.brandText}>
            <b className={styles.brandName}>{SITE.name}</b>
            <i className={styles.brandMeta}>Est {SITE.established} · Kolkata</i>
          </span>
          <span className="srOnly">{SITE.name} — home</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.iconBtn}
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>

        <a
          className={`btn btn--fill ${styles.navCta}`}
          href={whatsappLink(WHATSAPP_HELLO)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to a trip expert
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i /><i />
        </button>
      </header>

      {open && (
        <div className={styles.menu} id="mobile-menu">
          <nav aria-label="Mobile">
            {LINKS.map((l, i) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                <em>{String(i + 1).padStart(2, '0')}</em> {l.label}
              </Link>
            ))}
          </nav>
          <a
            className={`btn btn--fill ${styles.menuCta}`}
            href={whatsappLink(WHATSAPP_HELLO)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to a trip expert
          </a>
        </div>
      )}
    </>
  );
}
