'use client';
import { HeroProps } from '@/types/Hero/HeroProps';
import { Box } from '@primer/react';
import Image from 'next/image';
import HeroDownloadLegacy from '../HeroDownloadLegacy/HeroDownloadLegacy';
import HeroLogoLegacy from '../HeroLogoLegacy/HeroLogoLegacy';
import HeroMetaLegacy from '../HeroMetaLegacy/HeroMetaLegacy';
import SunsetBannerLegacy from '../SunsetBannerLegacy/SunsetBannerLegacy';
import TagListLegacy from '../TagListLegacy/TagListLegacy';
import './HeroLegacy.css';
import octonaut from '/public/assets/svg/octonaut.svg';

interface HeroLegacyProps {
  hero: HeroProps;
}

const HeroLegacy: React.FC<HeroLegacyProps> = ({ hero }) => {
  return (
    <>
      <Box as="section" className="section section--hero">
        {hero. && <SunsetBannerLegacy />}
        <Box className="wrapper">
          <Box as="header" className="hero-header">
            <HeroLogoLegacy />
            <HeroDownloadLegacy />
            <HeroMetaLegacy />
          </Box>

          <TagListLegacy tags={hero.features} />
          <Image className="hero-octonaut" src={octonaut} alt="octonaut" />
        </Box>
      </Box>
      <Box as="section" className="section section--hero">
        <Box className="wrapper">
          <Box as="header" className="hero-header">
            <HeroLogoLegacy />
            <HeroDownloadLegacy />
            <HeroMetaLegacy />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroLegacy;
