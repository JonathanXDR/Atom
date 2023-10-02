import { injectTextSegments } from '@/helpers/textHelper';
import { PackageCardProps } from '@/types/PackageCardProps';
import { DownloadIcon, StarIcon, XIcon } from '@primer/octicons-react';
import {
  Avatar,
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  Popover,
  Text,
  Token,
  Tooltip,
} from '@primer/react';
import React, { useState } from 'react';

interface PackageCardLegacyProps {
  packageCard: PackageCardProps;
}

const PackageCardLegacy: React.FC<PackageCardLegacyProps> = ({
  packageCard,
}) => {
  const [open, setOpen] = useState(false);
  const description = injectTextSegments(
    packageCard.description.paragraphs,
    false
  );

  const DownloadPopover = () => {
    return (
      <Popover
        open={open}
        caret="bottom"
        sx={{
          top: -3,
        }}
      >
        <Popover.Content
          sx={{
            width: '260px',
          }}
        >
          <Heading as="h4" sx={{ fontSize: 2 }}>
            Launching Atom...
          </Heading>
          <IconButton
            icon={XIcon}
            variant="invisible"
            aria-label="Close"
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
            }}
          />
          <Text
            as="p"
            sx={{
              marginBlock: '1em',
            }}
          >
            If nothing happens,
            <Link href="https://atom.io/"> download Atom </Link>
            and try again.
          </Text>
        </Popover.Content>
      </Popover>
    );
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          border: '1px solid',
          borderColor: 'border.default',
          borderRadius: '0.25rem',
          // marginY: 4,
          backgroundColor: 'canvas.subtle',
          boxShadow: 'shadow.small',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
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
              as="h4"
              sx={{
                fontSize: '1.25rem',
                color: 'fg.muted',
                fontWeight: 'normal',
                lineHeight: '1.25',
              }}
            >
              <Link
                href="/teletype"
                sx={{
                  fontWeight: 'bold',
                  wordBreak: 'break-word',
                }}
              >
                {packageCard.title.text}
              </Link>{' '}
            </Heading>
            <Text
              as="p"
              sx={{
                color: 'fg.muted',
                marginBottom: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {description}
            </Text>
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'nowrap',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  overflowX: 'auto',
                  '::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                {packageCard.tags &&
                  packageCard.tags.map((tag, index) => (
                    <Token key={index} text={`#${tag}`} />
                  ))}
              </Box>
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
                  <Avatar square src={packageCard.user.avatar.url} />
                  <Link
                    href="/atom"
                    sx={{
                      color: 'fg.subtle',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {packageCard.user.username}
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
                  <Tooltip
                    aria-label={`${packageCard.downloads.toLocaleString()} downloads`}
                  >
                    <Box>
                      <DownloadIcon size={16} />
                      <Text> {packageCard.downloads.toLocaleString()}</Text>
                    </Box>
                  </Tooltip>
                  <Tooltip aria-label="You must be signed in to star packages">
                    <Button leadingIcon={StarIcon} size="small">
                      {/* Star */}
                      <Button.Counter>{packageCard.stars}</Button.Counter>
                    </Button>
                  </Tooltip>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Link
                      href="atom://settings-view/show-packageCard?packageCard=teletype"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'none',
                        },
                      }}
                    >
                      <Button
                        leadingIcon={DownloadIcon}
                        size="small"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Install
                      </Button>
                    </Link>
                    <DownloadPopover />
                  </Box>
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
