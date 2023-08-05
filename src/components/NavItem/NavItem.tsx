"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem: React.FC = () => {
  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="wrapper no-pad">
        <ul className="navigation">
          {["/nightly", "/beta"].includes(usePathname()) && (
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
            <Link href="/packages">Packages</Link>
          </li>
          <li>
            <Link href="/themes">Themes</Link>
          </li>
          <li>
            <Link href="/docs">Documentation</Link>
          </li>
          <li>
            <Link href="https://blog.atom.io/">Blog</Link>
          </li>
          <li>
            <Link href="https://github.com/atom/atom/discussions">
              Discussions
            </Link>
          </li>
        </ul>

        <div className="top-bar-right">
          <Link href="/login">
            <span className="octicon octicon-log-in"></span> Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavItem;
