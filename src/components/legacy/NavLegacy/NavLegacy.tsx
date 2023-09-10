'use client';
import { LinkType } from '@/types/common/Link';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Box, Heading, Octicon } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavLegacy.css';

interface NavLegacyProps {
  nav: LinkType[];
}

const NavLegacy: React.FC<NavLegacyProps> = ({ nav }) => {
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
          {nav.map((item: LinkType) => (
            <Box as="li" key={item.title}>
              <Link
                href={item.url}
                className={pathname === item.url ? 'is-selected' : ''}
              >
                {item.title}
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
