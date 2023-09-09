'use client';
'use client';
import FeatureLegacy from '@/components/legacy/FeatureLegacy/FeatureLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroDownloadLegacy from '@/components/legacy/HeroDownloadLegacy/HeroDownloadLegacy';
import HeroLogoLegacy from '@/components/legacy/HeroLogoLegacy/HeroLogoLegacy';
import HeroMetaLegacy from '@/components/legacy/HeroMetaLegacy/HeroMetaLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import features from '@/data/features.json';
import nav from '@/data/nav.json';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';

export default function Nightly() {
  return (
    <Box className="is-responsive">
      <Box className="footer-push">
        <NavLegacy pages={nav.pages} />

        <Box className="welcome welcome-nightly">
          <Box as="section" className="section section--hero">
            <Box className="wrapper">
              <HeroLogoLegacy />
              <HeroDownloadLegacy />
              <HeroMetaLegacy />
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

              {features.nightly.tryAtomNightly.map((feature, index) => {
                return <FeatureLegacy feature={feature} key={index} />;
              })}
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy />
    </Box>
  );
}
