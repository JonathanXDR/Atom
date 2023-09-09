'use client';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Box, Heading, Octicon } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavLegacy.css';
import { PageProps } from './PageProps';

interface NavLegacyProps {
  pages: PageProps[];
}

const NavLegacy: React.FC<NavLegacyProps> = ({ pages }) => {
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
          {pages.map((page: PageProps) => (
            <Box as="li" key={page.link}>
              <Link
                href={page.link}
                className={pathname === page.link ? 'is-selected' : ''}
              >
                {page.title}
              </Link>
            </Box>
          ))}
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

export default NavLegacy;
