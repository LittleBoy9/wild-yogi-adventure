import { FAQS } from '@/content/faq';
import styles from './Faq.module.css';

/**
 * Built on <details>/<summary> so it works without JavaScript, is keyboard
 * operable and is announced correctly by screen readers — no ARIA needed.
 */
export function Faq() {
  return (
    <div className={styles.list}>
      {FAQS.map((f) => (
        <details key={f.q} className={styles.item} name="faq">
          <summary className={styles.summary}>
            {f.q}
            <span className={styles.mark} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
