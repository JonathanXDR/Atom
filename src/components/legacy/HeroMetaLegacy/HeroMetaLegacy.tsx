'use client';
import { injectTextSegments } from '@/helpers/textHelper';
import { MetaProps } from '@/types/Hero/MetaProps';
import { Text } from '@primer/react';
import Link from 'next/link';
import './HeroMetaLegacy.css';

interface HeroMetaLegacyProps {
  meta: MetaProps;
}

const HeroMetaLegacy: React.FC<HeroMetaLegacyProps> = ({ meta }) => {
  const title = injectTextSegments(meta.title);

  return (
    <>
      <Text as="p" className="hero-meta">
        <Text className="hero-tos">{title}</Text>
        {meta.links &&
          meta.links.map((link, index) => {
            return (
              <Link href={link.url} key={index}>
                {link.title}
              </Link>
            );
          })}
      </Text>
    </>
  );
};

export default HeroMetaLegacy;
