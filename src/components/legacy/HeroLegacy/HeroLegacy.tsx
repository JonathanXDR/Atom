'use client';
import { BannerProps } from '@/types/Hero/BannerProps';
import { DownloadProps } from '@/types/Hero/DownloadProps';
import { MetaProps } from '@/types/Hero/MetaProps';
import { TagListProps } from '@/types/Hero/TagListProps';
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
  banner?: BannerProps;
  meta: MetaProps[];
  downloads: DownloadProps[];
  tagList?: TagListProps;
  octonautImage?: boolean;
}

const HeroLegacy: React.FC<HeroLegacyProps> = ({
  banner,
  meta,
  downloads,
  tagList,
  octonautImage = true,
}) => {
  return (
    <>
      <Box as="section" className="section section--hero">
        {banner && <SunsetBannerLegacy banner={banner} />}
        <Box className="wrapper">
          <Box as="header" className="hero-header">
            <HeroLogoLegacy />
            <HeroDownloadLegacy downloads={downloads} />
            <HeroMetaLegacy meta={meta} />
          </Box>
          {tagList && <TagListLegacy tagList={tagList} />}

          {octonautImage && (
            <Image className="hero-octonaut" src={octonaut} alt="octonaut" />
          )}
        </Box>
      </Box>
      {/* <Box as="section" className="section section--hero">
        <Box className="wrapper">
          <Box as="header" className="hero-header">
            <HeroLogoLegacy />
            <HeroDownloadLegacy />
            <HeroMetaLegacy />
          </Box>
        </Box>
      </Box> */}
    </>
  );
};

export default HeroLegacy;
