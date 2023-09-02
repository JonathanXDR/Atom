'use client';
import SunsetBanner from '@/components/common/SunsetBanner/SunsetBanner';
import ContactLegacy from '@/components/legacy/ContactLegacy/ContactLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroHeaderLegacy from '@/components/legacy/HeroHeaderLegacy/HeroHeaderLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PillarLegacy from '@/components/legacy/PillarLegacy/PillarLegacy';
import RiverLegacy from '@/components/legacy/RiverLegacy/RiverLegacy';
import pillars from '@/data/pillars.json';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavLegacy />

        <Box className="welcome">
          <Box as="section" className="section section--hero">
            <SunsetBanner />
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
                <Link
                  className="hero-link hero-link--teletype"
                  href="#teletype"
                >
                  Real-time collaboration
                </Link>
                <Link className="hero-link hero-link--ide" href="#ide">
                  IDE features
                </Link>
                <Link className="hero-link hero-link--github" href="#github">
                  Git and GitHub integration
                </Link>
              </Box>
              <Image className="hero-octonaut" src={octonaut} alt="octonaut" />
            </Box>
          </Box>

          <RiverLegacy />

          <Box as="section" className="section section--features">
            <Box className="wrapper no-pad">
              <Heading as="h3">Everything you would expect</Heading>

              <Box className="features">
                <PillarLegacy pillars={pillars.pillars.everythingYouExpect} />
              </Box>

              <Heading as="h3">Make it your editor</Heading>

              <Box className="features">
                <PillarLegacy pillars={pillars.pillars.makeItYourEditor} />
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
