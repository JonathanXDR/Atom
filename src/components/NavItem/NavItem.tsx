'use client';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Header, Octicon } from '@primer/react';
import { usePathname } from 'next/navigation';

const NavItem: React.FC = () => {
  const pathname = usePathname();
  return (
    <Header>
      {pathname !== '/' && (
        <Header.Item>
          <Header.Link
            href="/"
            className="logo-small"
            title="Atom: A hackable text editor for the 21st Century"
          ></Header.Link>
        </Header.Item>
      )}
      <Header.Item>
        {pathname !== '/packages' ? (
          <Header.Link href="/packages">Packages</Header.Link>
        ) : (
          'Packages'
        )}
      </Header.Item>
      <Header.Item>
        {pathname !== '/themes' ? (
          <Header.Link href="/themes">Themes</Header.Link>
        ) : (
          'Themes'
        )}
      </Header.Item>
      <Header.Item>
        {pathname !== '/docs' ? (
          <Header.Link href="/docs">Documentation</Header.Link>
        ) : (
          'Documentation'
        )}
      </Header.Item>
      <Header.Item>
        {pathname !== '/blog' ? (
          <Header.Link href="/blog">Blog</Header.Link>
        ) : (
          'Blog'
        )}
      </Header.Item>
      <Header.Item full>
        <Header.Link href="https://github.com/atom/atom/discussions">
          Discussions
        </Header.Link>
      </Header.Item>
      <Header.Item>
        {pathname === '/blog' ? (
          <Header.Link href="/blog/feed.xml" className="rss-link">
            <Octicon
              icon={RssIcon}
              size={16}
              sx={{
                padding: '0',
              }}
            />{' '}
            Subscribe
          </Header.Link>
        ) : (
          <Header.Link href="/login">
            <Octicon
              icon={SignInIcon}
              size={16}
              sx={{
                padding: '0',
              }}
            />{' '}
            Sign in
          </Header.Link>
        )}
      </Header.Item>
    </Header>
  );
};

export default NavItem;
