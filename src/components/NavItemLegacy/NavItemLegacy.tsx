'use client';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Box, Heading, Octicon } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './main.css';

const NavItemLegacy: React.FC = () => {
  const pathname = usePathname();
  return (
    <Box as="nav" className="top-bar" aria-label="Primary">
      <Box className="wrapper no-pad">
        <Box as="ul" className="navigation">
          {pathname !== '/' && (
            <Box as="li">
              <Heading as="h1">
                <Link
                  href="/"
                  className="logo-small"
                  title="Atom: A hackable text editor for the 21st Century"
                ></Link>
              </Heading>
            </Box>
          )}
          <Box as="li">
            <Link
              href="/packages"
              className={pathname === '/packages' ? 'is-selected' : ''}
            >
              Packages
            </Link>
          </Box>
          <Box as="li">
            <Link
              href="/themes"
              className={pathname === '/themes' ? 'is-selected' : ''}
            >
              Themes
            </Link>
          </Box>
          <Box as="li">
            <Link
              href="/docs"
              className={pathname === '/docs' ? 'is-selected' : ''}
            >
              Documentation
            </Link>
          </Box>
          <Box as="li">
            <Link
              href="/blog"
              className={pathname === '/blog' ? 'is-selected' : ''}
            >
              Blog
            </Link>
          </Box>
          <Box as="li">
            <Link href="https://github.com/atom/atom/discussions">
              Discussions
            </Link>
          </Box>
        </Box>

        <Box className="top-bar-right">
          {pathname === '/blog' ? (
            <Link href="/blog/feed.xml" className="rss-link">
              <Octicon
                icon={RssIcon}
                size={16}
                sx={{
                  padding: '0',
                }}
              />{' '}
              Subscribe
            </Link>
          ) : (
            <Link href="/login">
              <Octicon
                icon={SignInIcon}
                size={16}
                sx={{
                  padding: '0',
                }}
              />{' '}
              Sign in
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavItemLegacy;
