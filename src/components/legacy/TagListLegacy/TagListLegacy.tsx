import tags from '@/data/tags.json';
import { injectDescriptionLinks } from '@/helpers/descriptionHelper';
import { FeatureListProps } from '@/types/FeatureListProps';
import { Box, Heading, Text } from '@primer/react';
import React from 'react';
import TagLegacy from '../TagLegacy/TagLegacy';
import './TagListLegacy.css';

interface TagListLegacyProps {
  featureList: FeatureListProps;
}

const TagListLegacy: React.FC<TagListLegacyProps> = ({ featureList }) => {
  const description = injectDescriptionLinks(
    featureList?.description?.paragraphs || []
  );

  return (
    <>
      <Box className="hero-features">
        <Heading as="h1" className="hero-tagline">
          A hackable
          <Text className="hero-tagline-highlight"> text editor</Text> for the
          21st Century
        </Heading>
        {tags.home.hackableTextEditor.map((tag, index) => {
          return <TagLegacy tag={tag} key={index} />;
        })}
      </Box>
    </>
  );
};

export default TagListLegacy;
