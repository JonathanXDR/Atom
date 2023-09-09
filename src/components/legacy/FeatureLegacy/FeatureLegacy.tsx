import * as octicons from '@primer/octicons-react';
import { Box, Heading, Link, Octicon, OcticonProps, Text } from '@primer/react';
import React from 'react';
// import './FeatureLegacy.css';
import { FeatureProps } from './FeatureProps';

interface FeatureLegacyProps {
  feature: FeatureProps;
}

const FeatureLegacy: React.FC<FeatureLegacyProps> = ({ feature }) => {
  const icon = octicons[
    feature.icon as keyof typeof octicons
  ] as React.ComponentType<OcticonProps>;

  const [beforeLink, afterLink] = feature.description.text.split('{ Link }');

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
        {feature.title && <Heading as="h4">{feature.title}</Heading>}
        <Text as="p">
          {beforeLink}
          {feature.description?.link?.title &&
            feature.description?.link.url && (
              <Link href={feature.description?.link.url}>
                {feature.description?.link.title}
              </Link>
            )}
          {afterLink}
        </Text>

        {feature.link && (
          <Text as="p">
            <br />
            <Link href={feature.link.url} target="_blank">
              {feature.link.title}
            </Link>
          </Text>
        )}
      </Box>
    </>
  );
};

export default FeatureLegacy;
