// import "@primer/css/index.scss";
// import "../globals.css";

export const metadata = {
  title: "Teletype for Atom",
  description:
    "Teletype for Atom lets developers share their workspace with team members and collaborate on code in real time.",
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
