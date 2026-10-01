'use client';

/**
 * Catches failures in the root layout itself, so it cannot rely on anything
 * the layout provides — no fonts, no global stylesheet, no nav. Styles are
 * inline for that reason, and it must render its own <html> and <body>.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          background: '#FBF8F1',
          color: '#15100C',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          lineHeight: 1.65,
        }}
      >
        <main style={{ maxWidth: '46ch', textAlign: 'center' }}>
          <h1 style={{ fontSize: '28px', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Wild Yogi Adventures
          </h1>
          <p style={{ margin: '0 0 22px', color: 'rgba(21,16,12,0.74)' }}>
            Something went badly wrong loading this site. You can still reach us on
            WhatsApp and we will answer.
          </p>
          <p style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => retry()}
              style={{
                padding: '14px 24px',
                borderRadius: '100px',
                border: 0,
                cursor: 'pointer',
                background: '#A84717',
                color: '#FFF7F0',
                fontSize: '14.5px',
                fontWeight: 600,
              }}
            >
              Try again
            </button>
            <a
              href="https://wa.me/918274960430"
              style={{
                padding: '14px 24px',
                borderRadius: '100px',
                border: '1.5px solid rgba(21,16,12,0.2)',
                textDecoration: 'none',
                color: '#15100C',
                fontSize: '14.5px',
                fontWeight: 600,
              }}
            >
              WhatsApp us
            </a>
          </p>
          {error.digest && (
            <p style={{ marginTop: '20px', fontSize: '12px', color: 'rgba(21,16,12,0.64)' }}>
              Reference: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
