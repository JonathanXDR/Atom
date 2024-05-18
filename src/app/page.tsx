'use client';
import ContactLegacy from '@/components/legacy/ContactLegacy/ContactLegacy';
import FeatureListLegacy from '@/components/legacy/FeatureListLegacy/FeatureListLegacy';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import HeroLegacy from '@/components/legacy/HeroLegacy/HeroLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import RiverLegacy from '@/components/legacy/RiverLegacy/RiverLegacy';
import banners from '@/data/Hero/banners.json';
import downloads from '@/data/Hero/downloads.json';
import meta from '@/data/Hero/meta.json';
import tagLists from '@/data/Hero/tagLists.json';
import contacts from '@/data/contacts.json';
import featureLists from '@/data/featureLists.json';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import rivers from '@/data/rivers.json';
import { ContactProps } from '@/types/ContactProps';
import { Box, PageLayout } from '@primer/react';
import '/public/assets/css/application.css';
import '/public/assets/css/welcome.css';

export default function Home() {
  return (
    <>
      <PageLayout containerWidth="full" padding="none">
        <PageLayout.Header
          sx={{
            marginBottom: 0,
          }}
        >
          <NavLegacy nav={nav} />
        </PageLayout.Header>
        <PageLayout.Content padding="none" width="full">
          <Box className="welcome">
            <HeroLegacy
              banner={banners.home}
              meta={meta.home}
              downloads={downloads.home}
              tagList={tagLists.home.hackableTextEditor}
            />

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
        </PageLayout.Content>

        <PageLayout.Footer>
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
