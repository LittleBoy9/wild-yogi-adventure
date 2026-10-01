import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { TrekCard, trekCardStyles as grid } from '@/components/TrekCard';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { SITE } from '@/content/site';
import { TREKS } from '@/content/treks';
import { breadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'All journeys',
  description:
    'Every trek Wild Yogi Adventures run, from a 7,545 ft weekend hike to the 16,200 ft Bali Pass. Altitudes are the figures the company prints on its own summit banners.',
  alternates: { canonical: '/treks' },
};

export default function TreksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Journeys', path: '/treks' },
        ])}
      />
      <Nav />
      <main>
        <section className="section" style={{ paddingTop: 'clamp(110px, 16vh, 180px)' }}>
          <div className="wrap">
            <p className="kick">The journeys</p>
            <h1 className="head">Every route we lead.</h1>
            <p className="sub">
              Eight routes between 7,545 and 16,200 feet. Every altitude here is the figure
              Wild Yogi prints on its own summit banners. Open any journey for the route,
              the photographs and what people said about it.
            </p>
            <div className={grid.grid}>
              {TREKS.map((t, i) => (
                <TrekCard key={t.slug} trek={t} priority={i < 3} />
              ))}
            </div>
            <p className="sub" style={{ marginTop: 28, fontSize: 13 }}>
              Not sure which one fits? Message us on WhatsApp — {SITE.phones[0].display} — and
              we will tell you honestly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
