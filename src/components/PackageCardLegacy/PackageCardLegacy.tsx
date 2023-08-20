import { DownloadIcon, StarIcon } from '@primer/octicons-react';
import {
  Avatar,
  Box,
  Button,
  Heading,
  Link,
  Text,
  Token,
  Tooltip,
} from '@primer/react';
import React from 'react';

const PackageCardLegacy: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: '0.25rem',
          marginY: 4,
          backgroundColor: 'canvas.subtle',
          boxShadow: 'shadow.small',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              marginY: 3,
              paddingX: 3,
            }}
          >
            <Heading
              as="h3"
              sx={{
                fontSize: '1.25rem',
                color: 'fg.muted',
                fontWeight: 'normal',
                lineHeight: '1.25',
              }}
            >
              <Link
                href="/n64decomp/mk64"
                sx={{
                  fontWeight: 'bold',
                  wordBreak: 'break-word',
                }}
              >
                mk64
              </Link>{' '}
            </Heading>
            <Text
              as="p"
              sx={{
                color: 'fg.muted',
                marginBottom: 0,
              }}
            >
              A speedy Mario Kart 64 decompilation, brought to you by the cousin
              of a tame racing driver.
            </Text>
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                gap: 1,
              }}
            >
              <Token text="#scroll" />
              <Token text="#time" />
              <Token text="#space" />
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: 'canvas.default',
              borderRadius: '0 0 0.25rem 0.25rem',
            }}
          >
            <Box
              sx={{
                padding: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 2,
                  fontSize: '0.75rem',
                  listStyle: 'none',
                  color: 'fg.muted',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Avatar
                    square
                    src="https://avatars.githubusercontent.com/atom"
                  />
                  <Link
                    href="/atom"
                    sx={{
                      color: 'fg.subtle',
                    }}
                  >
                    {' '}
                    Atom
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <DownloadIcon size={16} /> <Text>1,473,857</Text>
                  <Tooltip aria-label="You must be signed in to star packages">
                    <Button leadingIcon={StarIcon} size="small">
                      Star
                      <Button.Counter>{1}</Button.Counter>
                    </Button>
                  </Tooltip>
                  <Link
                    href="atom://settings-view/show-package?package=teletype"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'none',
                      },
                    }}
                  >
                    <Button leadingIcon={DownloadIcon} size="small">
                      Install
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PackageCardLegacy;
