'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import {
  BookIcon,
  CommentDiscussionIcon,
  GearIcon,
  PlayIcon,
} from '@primer/octicons-react';
import { Box, Heading, PageLayout, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import flightManualCover from '/public/assets/png/flight-manual-cover.png';

export default function Docs() {
  return (
    <>
      <PageLayout containerWidth="full" padding="none">
        <PageLayout.Header
          sx={{
            marginBottom: 6,
          }}
        >
          <NavLegacy nav={nav} />
        </PageLayout.Header>

        <PageLayout.Content
          padding="normal"
          width="full"
          sx={{
            minHeight: '100vh',
          }}
        >
          <Box className="documents atom-doc-index">
            <Heading as="h2" className="center index-title">
              Atom Documentation
            </Heading>
            <Heading
              as="h3"
              className="center subheader"
              sx={{
                fontSize: 'unset',
              }}
            >
              Current Version: v1.63.1
            </Heading>
            <Box className="training-video-cta">
              New to Atom? Check out the getting started video.
              <Text className="training-video-link">
                <Link
                  href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                  target="_blank"
                >
                  <Text className="training-video-play">
                    <PlayIcon size={16} />
                  </Text>
                  Play video
                </Link>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box className="doc-section">
                <Heading
                  as="h3"
                  sx={{
                    marginBlock: '1em',
                    fontSize: 'unset',
                  }}
                >
                  <BookIcon size={16} /> Atom Flight Manual
                </Heading>
                <Text
                  as="p"
                  sx={{
                    marginBlock: '1em',
                  }}
                >
                  The
                  <Link
                    data-skip-pjax="yeahokiguess"
                    href="/flight-manual/"
                  >
                    {' '}
                    Atom Flight Manual{' '}
                  </Link>
                  covers everything from getting off the ground to replacing the
                  engine.
                  <Link href="/flight-manual/">
                    {' '}
                    Go here to read the one and only book on everything Atom.
                  </Link>
                </Text>
                <Text
                  as="p"
                  sx={{
                    marginBlock: '1em',
                  }}
                >
                  <Link href="/flight-manual/">
                    <Image
                      style={{
                        width: '200px',
                      }}
                      src={flightManualCover}
                      alt="flight-manual-cover"
                    />
                  </Link>
                </Text>
              </Box>

              <Box className="doc-section">
                <Heading
                  as="h3"
                  sx={{
                    marginBlock: '1em',
                    fontSize: 'unset',
                  }}
                >
                  <GearIcon size={16} /> API Reference
                </Heading>
                <Text
                  as="p"
                  sx={{
                    marginBlock: '1em',
                  }}
                >
                  The
                  <Link href="/flight-manual/api">
                    {' '}
                    Atom API reference documentation{' '}
                  </Link>
                  is automatically generated from the Atom source code. Go here
                  to see what tools you can use to build your own plugins.
                </Text>
                <Link href="/flight-manual/api">
                  View all API docs
                </Link>
              </Box>

              <Box className="doc-section">
                <Heading
                  as="h3"
                  sx={{
                    marginBlock: '1em',
                    fontSize: 'unset',
                  }}
                >
                  <CommentDiscussionIcon size={16} /> Atom Discussions
                </Heading>
                <Text
                  as="p"
                  sx={{
                    marginBlock: '1em',
                  }}
                >
                  The
                  <Link href="https://github.com/atom/atom/discussions">
                    {' '}
                    Atom Discussions{' '}
                  </Link>
                  is the place to discuss anything and everything Atom related
                  with the entire Atom community. If you have problems or are
                  looking for help, this is your place.
                </Text>
              </Box>
            </Box>{' '}
          </Box>
        </PageLayout.Content>

        <PageLayout.Footer
          sx={{
            margin: '0 !important',
          }}
        >
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
