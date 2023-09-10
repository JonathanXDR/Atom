'use client';
import { LinkProps } from '@/types/LinkProps';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Box, Heading, Octicon } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavLegacy.css';

interface NavLegacyProps {
  nav: LinkProps[];
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
          {nav.map((item: LinkProps) => (
            <Box as="li" key={item.link.title}>
              <Link
                href={item.link.url}
                className={pathname === item.link.url ? 'is-selected' : ''}
              >
                {item.link.title}
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
