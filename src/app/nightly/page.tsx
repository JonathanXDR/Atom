'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import HeroHeader from '@/components/HeroHeader/HeroHeader';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
import { BugIcon, CalendarIcon, RocketIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';
import './main.css';

export default function Nightly() {
  return (
    <Box className="is-responsive">
      <Box className="footer-push">
        <NavItemLegacy />

        <Box className="welcome welcome-nightly">
          <section className="section section--hero">
            <Box className="wrapper">
              <HeroHeader />
            </Box>
          </section>
          <section className="section section--features">
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
          </section>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterItem />
    </Box>
  );
}
