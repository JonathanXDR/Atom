'use client';
import ContactLegacy from '@/components/legacy/ContactLegacy/ContactLegacy';
import FeatureListLegacy from '@/components/legacy/FeatureListLegacy/FeatureListLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroDownloadLegacy from '@/components/legacy/HeroDownloadLegacy/HeroDownloadLegacy';
import HeroLogoLegacy from '@/components/legacy/HeroLogoLegacy/HeroLogoLegacy';
import HeroMetaLegacy from '@/components/legacy/HeroMetaLegacy/HeroMetaLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import RiverLegacy from '@/components/legacy/RiverLegacy/RiverLegacy';
import SunsetBannerLegacy from '@/components/legacy/SunsetBannerLegacy/SunsetBannerLegacy';
import TagLegacy from '@/components/legacy/TagLegacy/TagLegacy';
import featureLists from '@/data/featureLists.json';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import rivers from '@/data/rivers.json';
import tags from '@/data/tags.json';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavLegacy nav={nav} />

        <Box className="welcome">
          <Box as="section" className="section section--hero">
            <SunsetBannerLegacy />
            <Box className="wrapper">
              <Box as="header" className="hero-header">
                <HeroLogoLegacy />
                <HeroDownloadLegacy />
                <HeroMetaLegacy />
              </Box>
              <Box className="hero-features">
                <Heading as="h1" className="hero-tagline">
                  A hackable
                  <Text className="hero-tagline-highlight">
                    {' '}
                    text editor
                  </Text>{' '}
                  for the 21st Century
                </Heading>
                {tags.home.hackableTextEditor.map((tag, index) => {
                  return <TagLegacy tag={tag} key={index} />;
                })}
              </Box>
              <Image className="hero-octonaut" src={octonaut} alt="octonaut" />
            </Box>
          </Box>

          {rivers.home.map((river, index) => {
            return <RiverLegacy river={river} key={index} />;
          })}

          <FeatureListLegacy
            featureList={featureLists.home.everythingYouExpect}
          />
          <FeatureListLegacy featureList={featureLists.home.makeItYourEditor} />

          <ContactLegacy />
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy footer={footer} />
    </>
  );
}
