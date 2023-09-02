import CreditBadgeLegacy from '@/components/legacy/CreditBadgeLegacy/CreditBadgeLegacy';
import { Box } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './main.css';

const FooterLegacy: React.FC = () => {
  const pathname = usePathname();
  return (
    <Box as="footer">
      <Box className="footer">
        <Box className="wrapper no-pad">
          <Box as="ul" className="footer-left">
            <Box as="li">
              <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                Terms of Use
              </Link>
            </Box>
            {pathname !== '/blog' && (
              <>
                <Box as="li">
                  <Link href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                    Privacy
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">
                    Code of Conduct
                  </Link>
                </Box>
              </>
            )}
            <Box as="li">
              <Link href="/releases">Releases</Link>
            </Box>
            <Box as="li">
              <Link href="/faq">FAQ</Link>
            </Box>
            <Box as="li">
              <Link href="/contact">Contact</Link>
            </Box>
            {pathname === '/faq' ||
              (pathname === '/flight-manual' && (
                <Box as="li">
                  <Link href="https://github.com/atom/flight-manual.atom.io/blob/master/CONTRIBUTING.md">
                    Contribute!
                  </Link>
                </Box>
              ))}
          </Box>

          <Box className="footer-right">
            <CreditBadgeLegacy />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLegacy;
