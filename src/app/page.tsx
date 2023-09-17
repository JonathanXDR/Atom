'use client';
import ContactLegacy from '@/components/legacy/ContactLegacy/ContactLegacy';
import FeatureListLegacy from '@/components/legacy/FeatureListLegacy/FeatureListLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroLegacy from '@/components/legacy/HeroLegacy/HeroLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import RiverLegacy from '@/components/legacy/RiverLegacy/RiverLegacy';
import contacts from '@/data/contacts.json';
import featureLists from '@/data/featureLists.json';
import footer from '@/data/footer.json';
import heros from '@/data/heros.json';
import nav from '@/data/nav.json';
import rivers from '@/data/rivers.json';
import { ContactProps } from '@/types/ContactProps';
import { Box } from '@primer/react';
import '/public/assets/css/application.css';
import '/public/assets/css/welcome.css';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavLegacy nav={nav} />

        <Box className="welcome">
          <HeroLegacy heros={heros.home} />

          {rivers.home.map((river, index) => {
            return <RiverLegacy river={river} key={index} />;
          })}

          <Box as="section" className="section section--features">
            <Box className="wrapper no-pad">
              <FeatureListLegacy
                featureList={featureLists.home.everythingYouExpect}
              />
              <FeatureListLegacy
                featureList={featureLists.home.makeItYourEditor}
              />
            </Box>
          </Box>

          <ContactLegacy contacts={contacts.home as ContactProps[]} />
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterLegacy footer={footer} />
    </>
  );
}
