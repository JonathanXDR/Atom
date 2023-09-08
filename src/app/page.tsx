'use client';
import SunsetBannerLegacy from '@/components/common/SunsetBannerLegacy/SunsetBannerLegacy';
import ContactLegacy from '@/components/legacy/ContactLegacy/ContactLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroHeaderLegacy from '@/components/legacy/HeroHeaderLegacy/HeroHeaderLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PillarLegacy from '@/components/legacy/PillarLegacy/PillarLegacy';
import RiverLegacy from '@/components/legacy/RiverLegacy/RiverLegacy';
import TagLegacy from '@/components/legacy/TagLegacy/TagLegacy';
import pillars from '@/data/pillars.json';
import tags from '@/data/tags.json';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavLegacy />

        <Box className="welcome">
          <Box as="section" className="section section--hero">
            <SunsetBannerLegacy />
            <Box className="wrapper">
              <HeroHeaderLegacy />
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

          <RiverLegacy />

          <Box as="section" className="section section--features">
            <Box className="wrapper no-pad">
              <Heading as="h3">Everything you would expect</Heading>
              <Box className="features">
                {pillars.home.everythingYouExpect.map((pillar, index) => {
                  return <PillarLegacy pillar={pillar} key={index} />;
                })}
              </Box>

              <Heading as="h3">Make it your editor</Heading>
              <Box className="features">
                {pillars.home.makeItYourEditor.map((pillar, index) => {
                  return <PillarLegacy pillar={pillar} key={index} />;
                })}
              </Box>
            </Box>
          </Box>

          <ContactLegacy />
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy />
    </>
  );
}
