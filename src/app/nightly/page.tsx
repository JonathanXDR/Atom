'use client';
import HeroHeader from '@/components/common/HeroHeader/HeroHeader';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import { BugIcon, CalendarIcon, RocketIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';

export default function Nightly() {
  return (
    <Box className="is-responsive">
      <Box className="footer-push">
        <NavLegacy />

        <Box className="welcome welcome-nightly">
          <Box as="section" className="section section--hero">
            <Box className="wrapper">
              <HeroHeader />
            </Box>
          </Box>
          <Box as="section" className="section section--features">
            <Box className="wrapper wrapper--nightly">
              <Heading as="h3">Try Atom Nightly✨</Heading>

              <Text as="p">
                Want to never wait for new improvements? The Nightly channel
                contains new features and bug fixes as soon as they get merged
                into master. It is intended for developers and very early
                adopters. See the{' '}
                <Link href="/blog2019/06/21/introducing-atom-nightly-releases.html">
                  blog post{' '}
                </Link>
                for more information.
              </Text>

              <Box className="features-item">
                <Box
                  className="mega-octicon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <RocketIcon size={24} />
                </Box>
                <Text as="p">
                  Keep your current Atom configuration when using Atom Nightly
                </Text>
              </Box>
              <Box className="features-item">
                <Box
                  className="mega-octicon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CalendarIcon size={24} />
                </Box>
                <Text as="p">
                  New Nightly releases are available every few days and
                  installed automatically
                </Text>
              </Box>
              <Box className="features-item">
                <Box
                  className="mega-octicon"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <BugIcon size={24} />
                </Box>
                <Text as="p">
                  There may be bugs. If you have problems, please{' '}
                  <Link href="https://github.com/atom/atom/blob/master/CONTRIBUTING.md#submitting-issues">
                    file an issue
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy />
    </Box>
  );
}
