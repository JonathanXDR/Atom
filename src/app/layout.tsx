import PrimerProvider from '@/providers/PrimerProvider';
import '@primer/css/index.scss';
import '@primer/react-brand/lib/css/main.css';
import { Metadata } from 'next';
import './tailwind.css';
// import '/public/assets/css/application.css';
// import '/public/assets/css/welcome.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://atom.io'),
  title: 'Atom',
  description:
    "At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it.",
  openGraph: {
    url: '/',
    siteName: 'Atom',
    type: 'website',
    title: 'A hackable text editor for the 21st Century',
    description:
      "At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it.",
    images: [
      {
        url: '/assets/png/atom-mark@1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  authors: [
    {
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      name: 'Jonathan Russ',
      url: 'https://jonathan-russ.com',
    },
  ],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/atom+xml': [
        {
          url: '/packages.atom',
          title: 'Atom Packages and Themes',
        },
      ],
    },
  },
};

const brandPages = [
  { title: 'Home', url: '/' },
  { title: 'Beta', url: '/beta' },
  { title: 'Nightly', url: '/nightly' },
  { title: 'Teletype', url: '/teletype' },
  { title: 'GitHub', url: '/github' },
  { title: 'IDE', url: '/ide' },
  { title: '404', url: '/not-found' },
  { title: '500', url: '/error' },
];

interface BrandPageProps {
  title: string;
  url: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="is-responsive">
        <PrimerProvider>{children}</PrimerProvider>
      </body>
    </html>
  );
}
