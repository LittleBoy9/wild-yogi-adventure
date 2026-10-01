import Link from 'next/link';
import { CategoryGrid } from '@/components/CategoryGrid';
import { EnquiryFacts, EnquiryForm, MapEmbed, enquiryStyles } from '@/components/EnquiryForm';
import { Faq } from '@/components/Faq';
import { FeaturedTreks } from '@/components/FeaturedTreks';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { ArrowRight } from '@/components/Icons';
import { InstagramStrip } from '@/components/InstagramStrip';
import { JsonLd } from '@/components/JsonLd';
import { Nav } from '@/components/Nav';
import { ReviewMarquee } from '@/components/Reviews';
import { Team } from '@/components/Team';
import { Trust } from '@/components/Trust';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { COPY } from '@/content/copy';
import { PILLARS } from '@/content/pillars';
import { REVIEWS } from '@/content/reviews';
import { SITE, WHATSAPP_HELLO, whatsappLink } from '@/content/site';
import { FEATURED, FEATURED_SLUGS, TREKS } from '@/content/treks';
import { faqSchema, organisationSchema } from '@/lib/schema';
import styles from './page.module.css';

export default function HomePage() {
  const rest = TREKS.filter((t) => !FEATURED_SLUGS.includes(t.slug as never));

  return (
    <>
      <JsonLd data={organisationSchema()} />
      <JsonLd data={faqSchema()} />
      <Nav />
      <main>
        <Hero />
        <Trust />

        <section className="section" id="escapes">
          <div className="wrap">
            <p className="kick">{COPY.catsKick}</p>
            <h2 className="head">{COPY.catsHead}</h2>
            <p className="sub">
              Wild Yogi do more than trek. Pick the kind of trip you want and we will take
              it from there.
            </p>
            <CategoryGrid />
          </div>
        </section>

        <section className="section section--alt" id="journeys">
          <div className="wrap">
            <p className="kick">{COPY.trekKick}</p>
            <h2 className="head">{COPY.trekHead}</h2>
            <p className="sub">{COPY.trekSub}</p>
            <FeaturedTreks featured={FEATURED} rest={rest} />
          </div>
        </section>

        <section className="section" id="why">
          <div className="wrap">
            <p className="kick">Why Wild Yogi</p>
            <h2 className="head">Six things the reviews keep saying.</h2>
            <p className="sub">
              We did not write these claims. We read {SITE.reviewCount} reviews and counted
              what came up.
            </p>
            <ul className={styles.pillars}>
              {PILLARS.map((p) => (
                <li key={p.n} className={styles.pillar}>
                  <span className={styles.pillarN}>{p.n}</span>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarBody}>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="team">
          <div className="wrap">
            <p className="kick">The team</p>
            <h2 className="head">The people trekkers name.</h2>
            <p className="sub">
              Reviewers do not usually name their guides. On this listing they do, over and
              over, which is why these three are here.
            </p>
            <Team />
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="wrap" style={{ marginBottom: 30 }}>
            <p className="kick">Reviews</p>
            <h2 className="head">
              Still a perfect {SITE.rating.toFixed(1)} after {SITE.reviewCount} reviews.
            </h2>
            <p className="sub">
              Pulled from the public Google listing. Long ones are trimmed, never reworded.
            </p>
          </div>
          <ReviewMarquee reviews={REVIEWS} />
          <div className={`wrap ${styles.center}`}>
            <a
              className="btn btn--line"
              href={SITE.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all {SITE.reviewCount} on Google
              <ArrowRight />
            </a>
          </div>
        </section>

        <section className="section section--alt" id="gallery">
          <div className="wrap">
            <p className="kick">From the trail</p>
            <h2 className="head">Every photograph here is theirs.</h2>
            <p className="sub">
              Shot by Wild Yogi trekkers and leaders. No stock, no borrowed mountains — with
              one exception, noted in the project README.
            </p>
            <Gallery />
          </div>
        </section>

        <section className="section" id="instagram">
          <InstagramStrip />
        </section>

        <section className="section section--alt" id="plan">
          <div className="wrap">
            <div className={enquiryStyles.layout}>
              <div>
                <p className="kick">Plan your trek</p>
                <h2 className="head">Tell us where you want to stand.</h2>
                <p className="sub">
                  Pick a route and we will send you dates, cost and a kit list on WhatsApp.
                  No deposit to ask a question.
                </p>
                <EnquiryFacts />
              </div>
              <EnquiryForm />
            </div>
            <MapEmbed />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap">
            <p className="kick">Questions</p>
            <h2 className="head">The things people ask first.</h2>
            <p className="sub">
              Answered from what Wild Yogi publish and what their trekkers wrote. Where a
              figure has not been confirmed, we say so rather than guess.
            </p>
            <Faq />
          </div>
        </section>

        <section className="section section--alt">
          <div className="wrap">
            <div className={styles.band}>
              <h2 className={styles.bandTitle}>Not sure which one is yours?</h2>
              <p className={styles.bandText}>
                Tell us how fit you are, how many days you have and whether you have trekked
                before. We will tell you honestly which route fits — including if the answer
                is none of them yet.
              </p>
              <div className={styles.bandCtas}>
                <a
                  className="btn btn--fill"
                  href={whatsappLink(WHATSAPP_HELLO)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask on WhatsApp
                  <ArrowRight />
                </a>
                <Link className="btn btn--onDark" href="/treks">
                  Browse all journeys
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
