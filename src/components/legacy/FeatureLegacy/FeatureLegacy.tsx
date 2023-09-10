import { stringTemplateParser } from '@/helpers/template-parser';
import * as octicons from '@primer/octicons-react';
import { Box, Heading, Link, Octicon, OcticonProps, Text } from '@primer/react';
import React from 'react';
import { FeatureProps } from '../../../types/FeatureProps';
import './FeatureLegacy.css';

interface FeatureLegacyProps {
  feature: FeatureProps;
}

const FeatureLegacy: React.FC<FeatureLegacyProps> = ({ feature }) => {
  const icon = octicons[
    feature.icon as keyof typeof octicons
  ] as React.ComponentType<OcticonProps>;

  const description = feature.description.paragraphs.map((paragraph, index) => {
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
  });

  return (
    <>
      <Box className="features-item">
        <Box
          className="mega-octicon"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Octicon icon={icon} size={24} />
        </Box>
        {feature.title && <Heading as="h4">{feature.title.text}</Heading>}
        {description}

        {feature.links &&
          feature.links.map((link, index) => (
            <Text as="p" key={index}>
              <br />
              <Link href={link.url} target="_blank">
                {link.title}
              </Link>
            </Text>
          ))}
      </Box>
    </>
  );
};

export default FeatureLegacy;
