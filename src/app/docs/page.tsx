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
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import flightManualCover from '/public/assets/png/flight-manual-cover.png';

export default function Docs() {
  return (
    <>
      <Box className="footer-push">
        <NavLegacy nav={nav} />

        <Box className="wrapper documents content-push wide atom-doc-index">
          <Heading as="h2" className="center index-title">
            Atom Documentation
          </Heading>
          <Heading as="h3" className="center subheader">
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

          <Box as="table">
            <Box as="tbody">
              <Box as="tr">
                <Box as="td" valign="top" width="33%">
                  <Box className="doc-section">
                    <Heading
                      as="h3"
                      sx={{
                        fontSize: 'unset',
                      }}
                    >
                      <BookIcon size={16} /> Atom Flight Manual
                    </Heading>
                    <Text as="p">
                      The
                      <Link
                        data-skip-pjax="yeahokiguess"
                        href="https://flight-manual.atom.io/"
                      >
                        {' '}
                        Atom Flight Manual{' '}
                      </Link>
                      covers everything from getting off the ground to replacing
                      the engine.
                      <Link href="https://flight-manual.atom.io/">
                        {' '}
                        Go here to read the one and only book on everything
                        Atom.
                      </Link>
                    </Text>
                    <Text as="p">
                      <Link href="https://flight-manual.atom.io/">
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
                </Box>
                <Box as="td" valign="top" width="33%">
                  <Box className="doc-section">
                    <Heading
                      as="h3"
                      sx={{
                        fontSize: 'unset',
                      }}
                    >
                      <GearIcon size={16} /> API Reference
                    </Heading>
                    <Text as="p">
                      The
                      <Link href="https://flight-manual.atom.io/api">
                        {' '}
                        Atom API reference documentation{' '}
                      </Link>
                      is automatically generated from the Atom source code. Go
                      here to see what tools you can use to build your own
                      plugins.
                    </Text>
                    <Link href="https://flight-manual.atom.io/api">
                      View all API docs
                    </Link>
                  </Box>
                </Box>
                <Box as="td" valign="top" width="33%">
                  <Box className="doc-section">
                    <Heading
                      as="h3"
                      sx={{
                        fontSize: 'unset',
                      }}
                    >
                      <CommentDiscussionIcon size={16} /> Atom Discussions
                    </Heading>
                    <Text as="p">
                      The
                      <Link href="https://github.com/atom/atom/discussions">
                        {' '}
                        Atom Discussions{' '}
                      </Link>
                      is the place to discuss anything and everything Atom
                      related with the entire Atom community. If you have
                      problems or are looking for help, this is your place.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <FooterLegacy footer={footer} />
    </>
  );
}
