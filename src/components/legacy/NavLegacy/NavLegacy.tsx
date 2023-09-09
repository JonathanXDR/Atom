'use client';
import { RssIcon, SignInIcon } from '@primer/octicons-react';
import { Box, Heading, Octicon, OcticonProps } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import './NavLegacy.css';

interface NavProps {
  href: string;
  text: string;
  topBarRight: {
    icon: OcticonProps['icon'];
    href: string;
    text: string;
    className: string;
  };
}

const pages = [
  {
    href: '/packages',
    text: 'Packages',
    topBarRight: {
      icon: SignInIcon,
      href: '/login',
      text: 'Sign in',
      className: '',
    },
  },
  {
    href: '/themes',
    text: 'Themes',
    topBarRight: {
      icon: SignInIcon,
      href: '/login',
      text: 'Sign in',
      className: '',
    },
  },
  {
    href: '/docs',
    text: 'Documentation',
    topBarRight: {
      icon: SignInIcon,
      href: '/login',
      text: 'Sign in',
      className: '',
    },
  },
  {
    href: '/blog',
    text: 'Blog',
    topBarRight: {
      icon: RssIcon,
      href: '/blog/feed.xml',
      text: 'Subscribe',
      className: 'rss-link',
    },
  },
  {
    href: 'https://github.com/atom/atom/discussions',
    text: ' Discussions',
    topBarRight: {
      icon: SignInIcon,
      href: '/login',
      text: 'Sign in',
      className: '',
    },
  },
];

const NavLegacy: React.FC = () => {
  const pathname = usePathname();
  const currentPage = pages.find((page: NavProps) => page.href === pathname);

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
          {pages.map((page: NavProps) => (
            <Box as="li" key={page.href}>
              <Link
                href={page.href}
                className={pathname === page.href ? 'is-selected' : ''}
              >
                {page.text}
              </Link>
            </Box>
          ))}
        </Box>

        <Box className="top-bar-right">
          {currentPage?.topBarRight && (
            <Link
              href={currentPage.topBarRight.href}
              key={currentPage.topBarRight.href}
              className={currentPage.topBarRight.className}
            >
              <Octicon
                icon={currentPage.topBarRight.icon}
                size={16}
                sx={{
                  padding: '0',
                }}
              />{' '}
              {currentPage.topBarRight.text}
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavLegacy;
