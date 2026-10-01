import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { SITE, SITE_URL } from '@/content/site';
import { ThemeScript } from '@/components/ThemeScript';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-mono-jb',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — Himalayan Treks, Yatras & Outdoor Journeys`,
    template: `%s · ${SITE.name}`,
  },
  description:
    'Walk into the wild. Return to yourself. Himalayan treks, yatras, road trips and camping run out of Kolkata. 5.0★ from 105 Google reviews.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    'Sandakphu trek',
    'Phalut trek',
    'Himalayan trekking Kolkata',
    'Valley of Flowers trek',
    'Rupin Pass trek',
    'Bali Pass trek',
    'Har Ki Dun trek',
    'Hampta Pass trek',
    'trekking company Kolkata',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_IN',
    url: SITE_URL,
    title: `${SITE.name} — Walk into the wild`,
    description:
      'Himalayan treks, yatras, road trips and camping, run out of Kolkata. 5.0★ from 105 reviews.',
    images: [
      {
        url: '/img/og.jpg',
        width: 1200,
        height: 630,
        alt: "The trekkers' hut at Sandakphu at golden hour, with Kanchenjunga behind.",
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/img/og.jpg'] },
  robots: { index: true, follow: true },
  icons: { icon: '/img/brand/logo.png', apple: '/img/brand/logo.png' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF8F1' },
    { media: '(prefers-color-scheme: dark)', color: '#100D0A' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
