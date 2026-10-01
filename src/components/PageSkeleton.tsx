import styles from './PageSkeleton.module.css';

/** Shared by every route's loading.tsx, so the markup lives in one place. */
export function PageSkeleton() {
  return (
    <main className={`wrap ${styles.wrap}`} aria-busy="true">
      <span className="srOnly">Loading…</span>
      <div className={styles.skeleton} aria-hidden="true">
        <div className={styles.bar} style={{ width: '22%' }} />
        <div className={styles.bar} style={{ width: '58%', height: 34 }} />
        <div className={styles.bar} style={{ width: '42%' }} />
      </div>
      <div className={styles.cards} aria-hidden="true">
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </div>
    </main>
  );
}
