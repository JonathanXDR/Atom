import "@primer/css/index.scss";
import "@primer/react-brand/lib/css/main.css";
import "../globals.css";

import PrimerProvider from "@/providers/PrimerProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://atom.io/ide"),
  title: "Atom IDE",
  description:
    "At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it.",
  openGraph: {
    url: "/ide",
    siteName: "Atom",
    type: "website",
    title: "A hackable text editor for the 21st Century",
    description:
      "At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it.",
    images: [
      {
        url: "/assets/png/atom-mark@1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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
          url: "/packages.atom",
          title: "Atom Packages and Themes",
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
      <PrimerProvider>{children}</PrimerProvider>
    </html>
  );
}
