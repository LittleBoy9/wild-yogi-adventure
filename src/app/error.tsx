'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { SITE, WHATSAPP_HELLO, whatsappLink } from '@/content/site';
import styles from './error.module.css';

/**
 * Route-level error boundary.
 *
 * Note the prop is `retry`, not `reset` — that changed in Next.js 16.
 *
 * The recovery path matters more than the apology here: if the page is broken,
 * the visitor should still be able to reach the company, so WhatsApp and the
 * phone number stay available.
 */
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // No error reporting service is wired up yet; the console is all we have.
    console.error(error);
  }, [error]);

  return (
    <main className={`wrap ${styles.wrap}`}>
      <p className="kick">Something went wrong</p>
      <h1 className="head">That did not load.</h1>
      <p className="sub">
        Our fault, not yours. Try again — and if it keeps happening, message us and we
        will answer anyway. The treks are still running.
      </p>

      <div className={styles.actions}>
        <button type="button" className="btn btn--fill" onClick={() => retry()}>
          Try again
        </button>
        <Link className="btn btn--line" href="/">
          Back to the home page
        </Link>
        <a
          className="btn btn--line"
          href={whatsappLink(WHATSAPP_HELLO)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp
        </a>
      </div>

      <p className={styles.digest}>
        Or call {SITE.phones[0].display}.
        {error.digest ? ` Reference: ${error.digest}` : ''}
      </p>
    </main>
  );
}
