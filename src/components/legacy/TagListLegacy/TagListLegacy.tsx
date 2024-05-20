import { injectTextSegments } from "@/helpers/textHelper";
import { TagListProps } from "@/types/Hero/TagListProps";
import { TagProps } from "@/types/Hero/TagProps";
import { Box, Heading } from "@primer/react";
import React from "react";
import TagLegacy from "../TagLegacy/TagLegacy";
import "./TagListLegacy.css";

interface TagListLegacyProps {
  tagList: TagListProps;
}

const TagListLegacy: React.FC<TagListLegacyProps> = ({ tagList }) => {
  const title = injectTextSegments(tagList.title);

  return (
    <>
      <Box className="hero-features">
        <Heading as="h1" className="hero-tagline">
          <>{title}</>
        </Heading>
        {tagList.tags.map((tag: TagProps, index: number) => {
          return <TagLegacy tag={tag} key={index} />;
        })}
      </Box>
    </>
  );
};

export default TagListLegacy;
