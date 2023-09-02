/* eslint-disable primer-react/no-system-props */
import { CalendarIcon, CopilotIcon } from '@primer/octicons-react';
import { Avatar, Box, Text } from '@primer/react';
import { Pillar } from '@primer/react-brand';
import Image from 'next/image';
import React from 'react';
import atomNightlyHeading from '/public/assets/png/atom-nightly-heading.png';

const PillarItem: React.FC = () => {
  return (
    <Pillar>
      <Pillar.Icon icon={CopilotIcon} color="purple" />
      <Pillar.Heading>Code search & code view</Pillar.Heading>
      <Pillar.Description>
        <Box
          sx={{
            marginBottom: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CalendarIcon size={16} /> July 23, 2019
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar square src="https://avatars.githubusercontent.com/atom" />
            <Text sx={{ color: 'fg.muted' }}>Atom</Text>
          </Box>
        </Box>
        <Image src={atomNightlyHeading} alt="Atom Nightly" />
      </Pillar.Description>

      <Pillar.Description>
        Enables you to rapidly search, navigate, and understand code, right from
        GitHub.com.
      </Pillar.Description>
      <Pillar.Link href="#">Learn more</Pillar.Link>
    </Pillar>
  );
};

export default PillarItem;
