import { DescriptionType } from '@/types/common/Description';
import { TitleType } from '@/types/common/Title';
import { Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';

const linkMatcher = /{{\s?link(\[\d+\])?\s?}}/g;
const highlightMatcher = /{{\s?highlight(\[\d+\])?\s?}}/g;

function replacePattern<T>(
  text: string,
  replacements: T[] | T,
  matcher: RegExp,
  renderReplacement: (
    replacement: T,
    match: string,
    index?: number
  ) => JSX.Element | string
): (string | JSX.Element)[] {
  const segments: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  text.replace(matcher, (match, index, offset) => {
    const beforePattern = text.slice(lastIndex, offset);
    if (beforePattern) segments.push(beforePattern);

    let replacementItem;
    if (index) {
      const parsedIndex = parseInt(index.replace(/\D/g, ''), 10);
      replacementItem = Array.isArray(replacements)
        ? replacements[parsedIndex]
        : replacements;
    } else {
      replacementItem = Array.isArray(replacements)
        ? replacements[0]
        : replacements;
    }

    segments.push(renderReplacement(replacementItem, match, index));

    lastIndex = offset + match.length;
    return match;
  });

  const afterPattern = text.slice(lastIndex);
  if (afterPattern) segments.push(afterPattern);

  return segments;
}

export function injectTextSegments(
  descriptionContent: DescriptionType['paragraphs'] | TitleType
): JSX.Element[] {
  const contentArray = Array.isArray(descriptionContent)
    ? descriptionContent
    : [descriptionContent];

  return contentArray.map((content, index) => {
    let segments: (string | JSX.Element)[] = [content?.text || ''];

    if (content?.links) {
      segments = segments.flatMap((segment) =>
        typeof segment === 'string'
          ? replacePattern(
              segment,
              content.links || [],
              linkMatcher,
              (link, match) =>
                link ? <Link href={link.url}>{link.title}</Link> : match
            )
          : segment
      );
    }

    if (content?.highlights) {
      segments = segments.flatMap((segment) =>
        typeof segment === 'string'
          ? replacePattern(
              segment,
              content.highlights || [],
              highlightMatcher,
              (highlight, match) =>
                highlight ? (
                  <Text className={highlight.class}>{highlight.title}</Text>
                ) : (
                  match
                )
            )
          : segment
      );
    }

    return (
      <Text key={index} as="p" sx={{ marginBlock: '1em' }}>
        {segments.map((segment, idx) =>
          typeof segment === 'string' ? (
            segment
          ) : (
            <React.Fragment key={idx}>{segment}</React.Fragment>
          )
        )}
      </Text>
    );
  });
}
