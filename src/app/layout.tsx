import PrimerProvider from '@/providers/PrimerProvider';
import '@primer/css/index.scss';
import '@primer/react-brand/lib/css/main.css';
import { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './tailwind.css';
// import '/public/assets/css/application.css';

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
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/beta',
    text: 'Beta',
  },
  {
    href: '/nightly',
    text: 'Nightly',
  },
  {
    href: '/teletype',
    text: 'Teletype',
  },
  {
    href: '/github',
    text: 'GitHub',
  },
  {
    href: '/ide',
    text: 'IDE',
  },
  {
    href: '/not-found',
    text: '404',
  },
  {
    href: '/error',
    text: '500',
  },
];

interface BrandPageProps {
  href: string;
  text: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPage = brandPages.find(
    (page: BrandPageProps) => page.href === pathname
  );

  return (
    <html lang="en">
      <body className="is-responsive">
        {currentPage && currentPage.href !== '/' ? (
          children
        ) : (
          <PrimerProvider>{children}</PrimerProvider>
        )}
      </body>
    </html>
  );
}
