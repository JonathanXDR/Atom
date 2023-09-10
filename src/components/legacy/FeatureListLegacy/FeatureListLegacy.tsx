import { stringTemplateParser } from '@/helpers/template-parser';
import { FeatureListProps } from '@/types/FeatureListProps';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';
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
    (paragraph, index) => {
      const parsedParagraph: any = stringTemplateParser(
        { text: paragraph.text },
        { links: paragraph.links }
      );

      if (typeof parsedParagraph === 'string') {
        return (
          <Text
            key={index}
            as="p"
            sx={{
              marginBlock: '1em',
            }}
          >
            {parsedParagraph}
          </Text>
        );
      } else {
        return (
          paragraph.links && (
            <Text
              key={index}
              as="p"
              sx={{
                marginBlock: '1em',
              }}
            >
              {(parsedParagraph as any).beforeLink}
              <Link href={(parsedParagraph as any).link?.url}>
                {(parsedParagraph as any).link?.title}
              </Link>
              {(parsedParagraph as any).afterLink}
            </Text>
          )
        );
      }
    }
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

          <Heading as="h3">{featureList.title.text}</Heading>
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
