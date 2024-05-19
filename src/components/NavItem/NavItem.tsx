"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="wrapper no-pad">
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
          )}
          <li>
            <Link
              href="/packages"
              className={pathname === "/packages" ? "is-selected" : ""}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              href="/themes"
              className={pathname === "/themes" ? "is-selected" : ""}
            >
              Themes
            </Link>
          </li>
          <li>
            <Link
              href="/docs"
              className={pathname === "/docs" ? "is-selected" : ""}
            >
              Documentation
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? "is-selected" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link href="https://github.com/atom/atom/discussions">
              Discussions
            </Link>
          </li>
        </ul>

        <div className="top-bar-right">
          {pathname === "/blog" ? (
            <Link href="/blog/feed.xml" className="rss-link">
              <span className="octicon octicon-rss"></span> Subscribe
            </Link>
          ) : (
            <Link href="/login">
              <span className="octicon octicon-log-in"></span> Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavItem;
