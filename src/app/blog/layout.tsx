import "@primer/css/index.scss";
import "@primer/react-brand/lib/css/main.css";
import "../globals.css";

import PrimerProvider from "@/providers/PrimerProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://atom.io/blog"),
  title: "Atom Blog | A hackable text editor for the 21st Century",
  description: "A hackable text editor for the 21st Century",
  openGraph: {
    url: "/blog",
    siteName: "Atom Blog",
    type: "website",
    title: "Atom Blog",
    description: "A hackable text editor for the 21st Century",
    images: [
      {
        url: "/assets/png/atom-mark@1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  publisher: "https://github.com",
  authors: [
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "Jonathan Russ",
      url: "https://jonathan-russ.com",
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/atom+xml": [
        {
          url: "/blog/feed.xml",
          title: "Atom Blog",
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
  return (
    <html lang="en">
      <body>
        <PrimerProvider>{children}</PrimerProvider>
      </body>
    </html>
  );
}
