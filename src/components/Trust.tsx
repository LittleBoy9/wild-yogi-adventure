'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Trust.module.css';

type Stat = { to: number; decimals?: number; group?: boolean; label: string };

const STATS: Stat[] = [
  { to: 5, decimals: 1, label: 'Google rating' },
  { to: 105, label: 'Reviews, all real' },
  { to: 16200, group: true, label: 'Highest pass, ft' },
  { to: 2024, label: 'Trekking since' },
];

function format(value: number, s: Stat) {
  if (s.group) return Math.round(value).toLocaleString('en-IN');
  return value.toFixed(s.decimals ?? 0);
}

export function Trust() {
  const ref = useRef<HTMLUListElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver: show the final figures rather than zeroes.
    // Scheduled rather than set inline so it does not cascade renders.
    if (typeof IntersectionObserver === 'undefined') {
      const id = requestAnimationFrame(() => setRun(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setRun(true);
          io.disconnect();
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.trust}>
      <ul className={`wrap ${styles.list}`} ref={ref}>
        {STATS.map((s) => (
          <li key={s.label} className={styles.item}>
            <Counter stat={s} run={run} />
            <span className={styles.label}>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Counter({ stat, run }: { stat: Stat; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setValue(stat.to));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    const start = performance.now();
    const DURATION = 1400;
    const step = (now: number) => {
      const k = Math.min(1, (now - start) / DURATION);
      setValue(stat.to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [run, stat.to]);

  return <b className={styles.value}>{format(value, stat)}</b>;
}
