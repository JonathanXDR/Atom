// import "@primer/css/index.scss";
// import "../globals.css";

export const metadata = {
  title: "The page you were looking for doesn't exist (404)",
  icons: {
    icon: "favicon.ico",
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
