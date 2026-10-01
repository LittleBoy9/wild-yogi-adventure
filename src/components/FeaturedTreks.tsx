'use client';

import { useState } from 'react';
import type { Trek } from '@/types';
import { TrekCard, trekCardStyles as styles } from './TrekCard';

/**
 * The client's brief was that a visitor lands and sees the top few journeys,
 * then can open one. The rest stay behind a toggle so the page does not open
 * with a wall of eight cards.
 */
export function FeaturedTreks({ featured, rest }: { featured: Trek[]; rest: Trek[] }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? [...featured, ...rest] : featured;

  return (
    <>
      <div className={styles.grid}>
        {shown.map((t, i) => (
          <TrekCard key={t.slug} trek={t} priority={i === 0} />
        ))}
      </div>
      {rest.length > 0 && (
        <div className={styles.more}>
          <button type="button" className="btn btn--line" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show fewer' : `Show all ${featured.length + rest.length} journeys`}
          </button>
        </div>
      )}
    </>
  );
}
