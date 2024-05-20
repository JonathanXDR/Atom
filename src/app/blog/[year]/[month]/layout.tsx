import "@/styles/blog.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <a href="/blog/feed.xml">Subscribe</a>
      </nav>
      <div>{children}</div>
    </div>
  );
}
