import { injectTextSegments } from '@/helpers/textHelper';
import { MetaProps } from '@/types/Hero/MetaProps';
import { Text } from '@primer/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './HeroMetaLegacy.css';

interface HeroMetaLegacyProps {
  meta: MetaProps;
}

const HeroMetaLegacy: React.FC<HeroMetaLegacyProps> = ({ meta }) => {
  const [isClient, setIsClient] = useState(false);
  const title = injectTextSegments(meta.title);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Text as="p" className="hero-meta">
        <Text className="hero-tos">{isClient && title}</Text>
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
