import '@primer/css/index.scss';
import '@primer/react-brand/lib/css/main.css';
import '../tailwind.css';
import './main.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://atom.io/teletype'),
  title: 'Teletype for Atom',
  description:
    'Teletype for Atom lets developers share their workspace with team members and collaborate on code in real time.',
  openGraph: {
    url: '/teletype',
    siteName: 'Atom',
    type: 'website',
    title: 'Code together in real time in Atom',
    description:
      'Teletype for Atom lets developers share their workspace with team members and collaborate on code in real time.',
    images: [
      {
        url: '/assets/png/teletype.png',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
