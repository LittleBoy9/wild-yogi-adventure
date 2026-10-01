import { TEAM } from '@/content/team';
import styles from './Team.module.css';

export function Team() {
  return (
    <div className={styles.grid}>
      {TEAM.map((m) => (
        <article key={m.name} className={styles.person}>
          <h3 className={styles.name}>{m.name}</h3>
          <p className={styles.role}>{m.role}</p>
          <p className={styles.note}>{m.note}</p>
        </article>
      ))}
    </div>
  );
}
