import Link from "next/link";

const NavItem: React.FC = () => {
  return (
    <nav className="top-bar" aria-label="Primary">
      <div className="wrapper no-pad">
        <ul className="navigation">
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
          <Link href="/login?last_url=%2F">
            <span className="octicon octicon-log-in"></span> Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavItem;
