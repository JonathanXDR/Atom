// import "@primer/css/index.scss";
// import "../globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  metadataBase: new URL("/"),
  title: "Teletype for Atom",
  icons: {
    icon: "favicon.ico",
  },
  openGraph: {
    url: "https://teletype.atom.io/",
    siteName: "teletype.atom.io",
    type: "website",
    title: "Code together in real time in Atom",
    description:
      "Teletype for Atom lets developers share their workspace with team members and collaborate on code in real time.",
    images: [
      {
        url: "assets/png/teletype.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
