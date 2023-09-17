import { injectDescriptionLinks } from '@/helpers/descriptionHelper';
import { TagListProps } from '@/types/Hero/TagListProps';
import { TagProps } from '@/types/Hero/TagProps';
import { Box, Heading, Text } from '@primer/react';
import React from 'react';
import TagLegacy from '../TagLegacy/TagLegacy';
import './TagListLegacy.css';

interface TagListLegacyProps {
  tagList: TagListProps;
}

const TagListLegacy: React.FC<TagListLegacyProps> = ({ tagList }) => {
  const description = injectDescriptionLinks(
    tagList?.description?.paragraphs || []
  );

  return (
    <>
      <Box className="hero-features">
        <Heading as="h1" className="hero-tagline">
          A hackable
          <Text className="hero-tagline-highlight"> text editor</Text> for the
          21st Century
        </Heading>
        {tagList.tags.map((tag: TagProps, index: number) => {
          return <TagLegacy tag={tag} key={index} />;
        })}
      </Box>
    </>
  );
};

export default TagListLegacy;
