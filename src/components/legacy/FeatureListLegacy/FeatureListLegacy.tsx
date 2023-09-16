import { injectDescriptionLinks } from '@/helpers/descriptionHelper';
import { FeatureListProps } from '@/types/FeatureListProps';
import { Box, Heading } from '@primer/react';
import React from 'react';
import FeatureLegacy from '../FeatureLegacy/FeatureLegacy';
import './FeatureListLegacy.css';

interface FeatureListLegacyProps {
  featureList: FeatureListProps;
}

const FeatureListLegacy: React.FC<FeatureListLegacyProps> = ({
  featureList,
}) => {
  const description = injectDescriptionLinks(
    featureList?.description?.paragraphs || []
  );

  return (
    <>
      <Box as="section" className="section section--features">
        <Box className={featureList.class}>
          <Heading as="h3">{featureList.title.text}</Heading>

          {description}

          <Box className="features">
            {featureList.features.map((feature, index) => {
              return <FeatureLegacy feature={feature} key={index} />;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeatureListLegacy;
