import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="section" style={{ paddingTop: 'clamp(140px, 22vh, 220px)' }}>
          <div className="wrap">
            <p className="kick">404</p>
            <h1 className="head">That trail does not exist.</h1>
            <p className="sub">
              The page you were looking for is not here. The routes we actually run are all
              on the journeys page.
            </p>
            <p style={{ marginTop: 26 }}>
              <Link className="btn btn--fill" href="/treks">Browse all journeys</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
