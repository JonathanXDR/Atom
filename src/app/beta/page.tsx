'use client';
import FeatureLegacy from '@/components/legacy/FeatureLegacy/FeatureLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroHeaderLegacy from '@/components/legacy/HeroHeaderLegacy/HeroHeaderLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import pillars from '@/data/pillars.json';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';

export default function Beta() {
  return (
    <Box className="is-responsive">
      <Box className="footer-push">
        <NavLegacy />

        <Box className="welcome welcome-beta">
          <Box as="section" className="section section--hero">
            <Box className="wrapper">
              <HeroHeaderLegacy />
            </Box>
          </Box>
          <Box as="section" className="section section--features">
            <Box className="wrapper wrapper--beta">
              <Heading as="h3">Try Atom Beta</Heading>

              <Text as="p">
                Want to be on the bleeding edge? The Beta channel contains new
                features and bug fixes before they land on the{' '}
                <Link href="/">stable channel</Link>. It is intended for
                developers and early adopters. See the{' '}
                <Link href="/blog2015/10/21/introducing-the-atom-beta-channel.html">
                  blog post{' '}
                </Link>
                for more information.
              </Text>

              <FeatureLegacy pillars={pillars.beta.tryAtomBeta} />
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy />
    </Box>
  );
}
