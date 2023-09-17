import Link from 'next/link';
import React from 'react';
// import './TagLegacy.css';
import { TagProps } from '../../../types/Hero/TagProps';

interface TagLegacyProps {
  tag: TagProps;
}

const TagLegacy: React.FC<TagLegacyProps> = ({ tag }) => {
  return (
    <>
      <Link className="hero-link" href={tag.link.url}>
        {tag.link.title}
      </Link>
    </>
  );
};

export default TagLegacy;
