'use client';
import * as octicons from '@primer/octicons-react';
import { Box, Heading, Octicon, OcticonProps } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavLegacy.css';
import { PageProps } from './PageProps';

interface NavLegacyProps {
  pages: PageProps[];
}

const NavLegacy: React.FC<NavLegacyProps> = ({ pages }) => {
  const pathname = usePathname();
  const currentPage = pages.find((page: PageProps) => {
    page.href === pathname;
  });
  console.log(currentPage?.topBarRight.icon);
  const icon = octicons[
    currentPage?.topBarRight.icon as keyof typeof octicons
  ] as React.ComponentType<OcticonProps>;

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

        {currentPage?.topBarRight && (
          <Box className="top-bar-right">
            <Link
              href={currentPage.topBarRight.href}
              key={currentPage.topBarRight.href}
              className={currentPage.topBarRight.className}
            >
              <Octicon
                icon={icon}
                size={16}
                sx={{
                  padding: '0',
                }}
              />{' '}
              {currentPage.topBarRight.text}
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NavLegacy;
