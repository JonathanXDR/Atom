// import "@primer/css/index.scss";
// import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  metadataBase: new URL("https://atom.io"),
  openGraph: {
    url: "https://atom.io/",
    siteName: "Atom",
    title: "A hackable text editor for the 21st Century",
    description:
      "At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it.",
    type: "website",
    images: [
      {
        url: "assets/png/atom-mark@1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  title: "Atom",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom Packages and Themes"
          href="/packages.atom"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
