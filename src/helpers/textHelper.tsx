import { DescriptionType } from "@/types/common/Description";
import { TitleType } from "@/types/common/Title";
import { Text } from "@primer/react";
import Link from "next/link";
import React from "react";

function replacePattern<T>(
  text: string,
  items: T[] | T,
  pattern: RegExp,
  replaceFunction: (item: T, match: string) => JSX.Element,
): (string | JSX.Element)[] {
  const segments: (string | JSX.Element)[] = [];
  let lastIndex = 0;

  text.replace(pattern, (match, index, offset) => {
    const before = text.slice(lastIndex, offset);
    if (before) segments.push(before);

    const parsedIndex = index ? parseInt(index.replace(/\D/g, ""), 10) : 0;
    const item = Array.isArray(items) ? items[parsedIndex] : items;

    segments.push(item ? replaceFunction(item, match) : match);
    lastIndex = offset + match.length;
    return match;
  });

  const after = text.slice(lastIndex);
  if (after) segments.push(after);

  return segments;
}

export function injectTextSegments(
  textContent: DescriptionType["paragraphs"] | TitleType,
  margin = true,
): JSX.Element[] {
  const contentArray = Array.isArray(textContent) ? textContent : [textContent];

  return contentArray.map((content, index) => {
    let segments: (string | JSX.Element)[] = [content?.text || ""];

    if (content?.links) {
      segments = segments.flatMap((segment) =>
        typeof segment === "string"
          ? replacePattern(
              segment,
              content.links || [],
              /{{\s?link(\[\d+\])?\s?}}/g,
              (link) => <Link href={link.url}>{link.title}</Link>,
            )
          : segment,
      );
    }

    if (content?.highlights) {
      segments = segments.flatMap((segment) =>
        typeof segment === "string"
          ? replacePattern(
              segment,
              content.highlights || [],
              /{{\s?highlight(\[\d+\])?\s?}}/g,
              (highlight) => (
                <Text className={highlight.class}>{highlight.title}</Text>
              ),
            )
          : segment,
      );
    }

    return (
      <Text key={index} as="p" {...(margin && { sx: { marginBlock: "1em" } })}>
        {segments.map((segment, idx) =>
          typeof segment === "string" ? (
            segment
          ) : (
            <React.Fragment key={idx}>{segment}</React.Fragment>
          ),
        )}
      </Text>
    );
  });
}
