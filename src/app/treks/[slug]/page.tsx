import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight } from '@/components/Icons';
import { Nav } from '@/components/Nav';
import { ReviewGrid } from '@/components/Reviews';
import { TrekGallery } from '@/components/TrekGallery';
import { GALLERY, imageSize } from '@/content/media';
import { reviewsForTrek } from '@/content/reviews';
import { SITE, SITE_URL, whatsappLink } from '@/content/site';
import { TREKS, getTrek } from '@/content/treks';
import { breadcrumbSchema, trekSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import styles from './page.module.css';

/** Statically prerender every route at build time. */
export function generateStaticParams() {
  return TREKS.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<'/treks/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params;
  const trek = getTrek(slug);
  if (!trek) return {};

  const title = `${trek.name} trek — ${trek.altitudeLabel}`;
  const description = `${trek.hook} ${trek.days}, graded ${trek.grade}, in ${trek.region}. Run by Wild Yogi Adventures out of Kolkata — 5.0★ from ${SITE.reviewCount} Google reviews.`;

  return {
    title,
    description,
    alternates: { canonical: `/treks/${trek.slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}/treks/${trek.slug}`,
      images: [{ url: trek.image, alt: `${trek.name} — ${trek.region}` }],
    },
    twitter: { card: 'summary_large_image', images: [trek.image] },
  };
}

export default async function TrekPage(props: PageProps<'/treks/[slug]'>) {
  const { slug } = await props.params;
  const trek = getTrek(slug);
  if (!trek) notFound();

  const heroSize = imageSize(trek.image);
  const photos = trek.photos.map((i) => GALLERY[i - 1]).filter(Boolean);
  const { reviews, isSpecific } = reviewsForTrek(trek.reviewMatch);
  const peakFt = Math.max(0, ...trek.stages.map((s) => s.ft ?? 0));

  const enquiry = whatsappLink(
    `Hi Wild Yogi Adventures! I am interested in the ${trek.name} (${trek.altitudeLabel}). Could you send me the dates, cost and a kit list?`,
  );

  return (
    <>
      <JsonLd data={trekSchema(trek)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Journeys', path: '/treks' },
          { name: trek.name, path: `/treks/${trek.slug}` },
        ])}
      />
      <Nav />
      <main>
        <header className={styles.hero}>
          <Image
            src={trek.image}
            alt={`${trek.name} — ${trek.region}`}
            width={heroSize.w}
            height={heroSize.h}
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroScrim} />
          <div className={`wrap ${styles.heroInner}`}>
            <Link href="/treks" className={styles.back}>
              <ArrowLeft />
              All journeys
            </Link>
            <p className={styles.region}>{trek.region}</p>
            <h1 className={styles.title}>{trek.name}</h1>
            <p className={styles.hook}>{trek.hook}</p>
          </div>
        </header>

        <dl className={styles.stats}>
          <div>
            <dt>{trek.altitude ? 'Max altitude' : 'Known for'}</dt>
            <dd className={styles.hi}>{trek.altitudeLabel}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{trek.days}</dd>
          </div>
          <div>
            <dt>Grade</dt>
            <dd>{trek.grade}</dd>
          </div>
          <div>
            <dt>Season</dt>
            <dd>{trek.season}</dd>
          </div>
        </dl>

        <section className={styles.sec}>
          <div className="wrap">
            <h2 className={styles.h2}>The journey</h2>
            <p className={styles.lead}>{trek.long}</p>
            {(trek.bestTime || trek.fitness) && (
              <dl className={styles.notes}>
                {trek.bestTime && (
                  <div>
                    <dt>Best time</dt>
                    <dd>{trek.bestTime}</dd>
                  </div>
                )}
                {trek.fitness && (
                  <div>
                    <dt>Fitness needed</dt>
                    <dd>{trek.fitness}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>
        </section>

        <section className={styles.sec}>
          <div className="wrap">
            <h2 className={styles.h2}>What stands out</h2>
            <ul className={styles.highlights}>
              {trek.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </section>

        {trek.stages.length > 0 && (
          <section className={styles.sec}>
            <div className="wrap">
              <h2 className={styles.h2}>The route, stage by stage</h2>
              <ol className={styles.rail}>
                {trek.stages.map((s) => (
                  <li key={s.name} className={s.ft && s.ft === peakFt ? styles.peak : undefined}>
                    <h3 className={styles.stageName}>
                      {s.name}
                      {s.ft && <span className={styles.ft}>{s.ft.toLocaleString('en-IN')} ft</span>}
                    </h3>
                    <p className={styles.stageNote}>{s.note}</p>
                  </li>
                ))}
              </ol>
              <p className={styles.caption}>
                Wild Yogi have not published a day-by-day split for this route, so these are
                stages rather than days. Ask them on WhatsApp for the exact itinerary.
              </p>
            </div>
          </section>
        )}

        {photos.length > 0 && (
          <section className={styles.sec}>
            <div className="wrap">
              <h2 className={styles.h2}>Photographs</h2>
              <TrekGallery photos={photos} trekName={trek.name} />
              <p className={styles.caption}>
                From Wild Yogi&rsquo;s own albums, shot by their trekkers and leaders. Weighted
                to this trek&rsquo;s region rather than verified shot by shot.
              </p>
            </div>
          </section>
        )}

        <section className={styles.sec}>
          <div className="wrap">
            <h2 className={styles.h2}>
              {isSpecific ? 'What people said about this one' : 'What people say about Wild Yogi'}
            </h2>
            <ReviewGrid
              reviews={reviews}
              note={
                isSpecific
                  ? undefined
                  : 'No review in the public set names this route yet, so these are general reviews of Wild Yogi.'
              }
            />
          </div>
        </section>
      </main>

      <div className={styles.bar}>
        <span className={styles.barText}>
          <b>{trek.name}</b>
          <span>No deposit to ask a question.</span>
        </span>
        <a className="btn btn--fill" href={enquiry} target="_blank" rel="noopener noreferrer">
          Request dates &amp; cost
          <ArrowRight />
        </a>
      </div>

      <Footer />
    </>
  );
}
