"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface LinkProps {
  link: {
    title: string;
    class?: string;
    url: string;
    leadingIcon?: string;
    trailingIcon?: string;
  };
}

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const data: LinkProps[] = [
    { link: { title: "Packages", url: "/packages" } },
    { link: { title: "Themes", url: "/themes" } },
    { link: { title: "Documentation", url: "/docs" } },
    { link: { title: "Blog", url: "/blog" } },
    {
      link: {
        title: "Discussions",
        url: "https://github.com/atom/atom/discussions",
      },
    },
  ];

  const displayConditions: { [key: string]: (path: string) => string } = {
    Discussions: (path) =>
      path.startsWith("/blog") ||
      path.startsWith("/faq") ||
      path.startsWith("/flight-manual")
        ? "Discuss"
        : "Discussions",
  };

  const shouldDisplayTitle = (title: string, path: string) => {
    if (displayConditions[title]) {
      return displayConditions[title](path);
    }
    return title;
  };

  const filteredData = data.map((item) => ({
    ...item,
    link: {
      ...item.link,
      title: shouldDisplayTitle(item.link.title, pathname),
    },
  }));

  return (
    <nav className="top-bar" aria-label="Primary">
      <div className={`wrapper ${pathname === "/blog" ? "" : "no-pad"}`}>
        <ul className="navigation">
          {pathname !== "/" && (
            <li>
              <h1>
                <Link
                  href="/"
                  className="logo-small"
                  title="Atom: A hackable text editor for the 21st Century"
                ></Link>
              </h1>
            </li>
          )}{" "}
          {filteredData.map((item: LinkProps) => (
            <>
              <li key={item.link.title}>
                <Link
                  href={item.link.url}
                  className={pathname === item.link.url ? "is-selected" : ""}
                >
                  {item.link.title}
                </Link>
              </li>{" "}
            </>
          ))}
        </ul>

        <div className="top-bar-right">
          {pathname === "/blog" ? (
            <Link href="/blog/feed.xml" className="rss-link">
              <span className="octicon octicon-rss"></span> Subscribe
            </Link>
          ) : (
            !["/flight-manual", "/faq", "/blog"].includes(pathname) && (
              <Link href="/login">
                <span className="octicon octicon-log-in"></span> Sign in
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
