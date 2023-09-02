'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroHeaderLegacy from '@/components/legacy/HeroHeaderLegacy/HeroHeaderLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PillarLegacy from '@/components/legacy/PillarLegacy/PillarLegacy';
import pillars from '@/data/pillars.json';
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
              <HeroHeaderLegacy />
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

              <PillarLegacy pillars={pillars.nightly.tryAtomNightly} />
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy />
    </Box>
  );
}
