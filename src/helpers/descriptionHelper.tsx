import { DescriptionType } from '@/types/common/Description';
import { Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';

export function injectDescriptionLinks(
  paragraphs: DescriptionType['paragraphs']
): JSX.Element[] {
  return paragraphs.map((paragraph, index) => {
    const text = paragraph.text;
    const links = paragraph.links;

    const linkMatcher = /{{\s?([a-zA-Z0-9]+)(\[\d+\])?\s?}}/g;
    const segments: (string | JSX.Element)[] = [];
    let lastIndex = 0;

    text?.replace(linkMatcher, (match, key, index, offset) => {
      const beforeLink = text?.slice(lastIndex, offset);
      if (beforeLink) {
        segments.push(beforeLink);
      }

      if (index) {
        const parsedIndex = parseInt(index.replace(/\D/g, ''), 10);
        const link = links && links[parsedIndex];
        if (link) {
          segments.push(<Link href={link.url}>{link.title}</Link>);
        } else {
          segments.push(match);
        }
      } else if (key === 'link' && links && links[0]) {
        segments.push(<Link href={links[0].url}>{links[0].title}</Link>);
      } else {
        segments.push(match);
      }

      lastIndex = offset + match.length;
      return match;
    });

    const afterLastLink = text?.slice(lastIndex);
    if (afterLastLink) {
      segments.push(afterLastLink);
    }

    return (
      <Text
        key={index}
        as="p"
        sx={{
          marginBlock: '1em',
        }}
      >
        {segments.map((segment, index) =>
          typeof segment === 'string' ? (
            segment
          ) : (
            <React.Fragment key={index}>{segment}</React.Fragment>
          )
        )}
      </Text>
    );
  });
}
