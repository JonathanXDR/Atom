import { LinkType } from '@/types/common/Link';
import Link from 'next/link';

export function paragraphProcessor(
  paragraph: string,
  links?: LinkType[]
): (string | JSX.Element)[] {
  const linkMatcher = /{{\s?([a-zA-Z0-9]*)(\[\d+\])?\s?}}/g;
  const segments: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  paragraph.replace(linkMatcher, (match, key, index, offset) => {
    const beforeLink = paragraph.slice(lastIndex, offset);
    if (beforeLink) {
      segments.push(beforeLink);
    }

    if (index) {
      const parsedIndex = parseInt(index.replace(/\\D/g, ''), 10);
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

  const afterLastLink = paragraph.slice(lastIndex);
  if (afterLastLink) {
    segments.push(afterLastLink);
  }

  return segments;
}
