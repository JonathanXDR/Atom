"use client";
import FeatureListLegacy from "@/components/legacy/FeatureListLegacy/FeatureListLegacy";
import FooterLegacy from "@/components/legacy/FooterLegacy/FooterLegacy";
import HeroLegacy from "@/components/legacy/HeroLegacy/HeroLegacy";
import NavLegacy from "@/components/legacy/NavLegacy/NavLegacy";
import downloads from "@/data/Hero/downloads.json";
import meta from "@/data/Hero/meta.json";
import featureLists from "@/data/featureLists.json";
import footer from "@/data/footer.json";
import nav from "@/data/nav.json";
import { Box } from "@primer/react";

export default function Beta() {
  return (
    <Box className="is-responsive">
      <NavLegacy nav={nav} />

      <Box className="welcome welcome-beta">
        <HeroLegacy
          meta={meta.beta}
          downloads={downloads.beta}
          octonautImage={false}
        />
        <Box as="section" className="section section--features">
          <Box className="wrapper wrapper--beta">
            <FeatureListLegacy featureList={featureLists.beta.tryAtomBeta} />
          </Box>
        </Box>
      </Box>

      <FooterLegacy footer={footer} />
    </Box>
  );
}
