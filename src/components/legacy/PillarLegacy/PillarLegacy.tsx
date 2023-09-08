import * as octicons from '@primer/octicons-react';
import { Box, Heading, Link, Octicon, OcticonProps, Text } from '@primer/react';
import React from 'react';
import { PillarProps } from './PillarProps';

interface PillarLegacyProps {
  pillar: PillarProps;
}

const PillarLegacy: React.FC<PillarLegacyProps> = ({ pillar }) => {
  const icon = octicons[
    pillar.icon as keyof typeof octicons
  ] as React.ComponentType<OcticonProps>;

  const [beforeLink, afterLink] = pillar.description.mainText.split('{ Link }');

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
        {pillar.title && <Heading as="h4">{pillar.title}</Heading>}
        <Text as="p">
          {beforeLink}
          {pillar.description.linkText && pillar.description.linkUrl && (
            <Link href={pillar.description.linkUrl}>
              {pillar.description.linkText}
            </Link>
          )}
          {afterLink}
        </Text>

        {pillar.externalLink && (
          <Text as="p">
            <br />
            <Link href={pillar.externalLink.url} target="_blank">
              {pillar.externalLink.text}
            </Link>
          </Text>
        )}
      </Box>
    </>
  );
};

export default PillarLegacy;
