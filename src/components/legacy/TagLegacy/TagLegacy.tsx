import Link from 'next/link';
import React from 'react';
import './TagLegacy.module.css';
import { TagProps } from './TagProps';

interface TagLegacyProps {
  tag: TagProps;
}

const TagLegacy: React.FC<TagLegacyProps> = ({ tag }) => {
  return (
    <>
      <Link className="hero-link" href={tag.link}>
        {tag.title}
      </Link>
    </>
  );
};

export default TagLegacy;
