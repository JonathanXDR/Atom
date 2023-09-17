'use client';
import FeatureListLegacy from '@/components/legacy/FeatureListLegacy/FeatureListLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroDownloadLegacy from '@/components/legacy/HeroDownloadLegacy/HeroDownloadLegacy';
import HeroLogoLegacy from '@/components/legacy/HeroLogoLegacy/HeroLogoLegacy';
import HeroMetaLegacy from '@/components/legacy/HeroMetaLegacy/HeroMetaLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import featureLists from '@/data/featureLists.json';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import { Box } from '@primer/react';

export default function Nightly() {
  return (
    <Box className="is-responsive">
      <Box className="footer-push">
        <NavLegacy nav={nav} />

        <Box className="welcome welcome-nightly">
          <Box as="section" className="section section--hero">
            <Box className="wrapper">
              <Box as="header" className="hero-header">
                <HeroLogoLegacy />
                <HeroDownloadLegacy />
                <HeroMetaLegacy />
              </Box>
            </Box>
          </Box>
          <Box as="section" className="section section--features">
            <Box className="wrapper wrapper--nightly">
              <FeatureListLegacy
                featureList={featureLists.nightly.tryAtomNightly}
              />
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy footer={footer} />
    </Box>
  );
}
