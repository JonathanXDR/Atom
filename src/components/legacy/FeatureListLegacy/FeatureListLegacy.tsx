import { paragraphProcessor } from '@/helpers/paragraph.helper';
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
  const description = featureList?.description?.paragraphs.map(
    (paragraph, index) =>
      paragraphProcessor(paragraph.text, paragraph.links, index)
  );

  return (
    <>
      <Box as="section" className="section section--features">
        <Box className="wrapper no-pad">
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
