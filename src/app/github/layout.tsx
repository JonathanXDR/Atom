import '@primer/css/index.scss';
import '@primer/react-brand/lib/css/main.css';
import { Metadata } from 'next';
import '../tailwind.css';
import './main.css';
import '/public/assets/css/github.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://atom.io/github'),
  title: 'Github for Atom',
  description:
    'Create new branches, stage and commit, push and pull, resolve merge conflicts, view pull requests and more—all from within your editor.',
  openGraph: {
    url: '/github',
    siteName: 'Atom',
    type: 'website',
    title: 'The Git and GitHub integration right inside your editor!',
    description:
      'Create new branches, stage and commit, push and pull, resolve merge conflicts, view pull requests and more—all from within your editor.',
    images: [
      {
        url: '/assets/png/github.png',
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
