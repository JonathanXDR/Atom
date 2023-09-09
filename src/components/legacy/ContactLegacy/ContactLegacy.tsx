import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';
// import './ContactLegacy.css';

const ContactLegacy: React.FC = () => {
  return (
    <Box as="section" className="section section--contact">
      <Box className="wrapper no-pad">
        <Box className="columns">
          <Box className="column">
            <Heading as="h3">Open source</Heading>
            <Text as="p">
              Atom is open source. Be part of the Atom community or help improve
              your favorite text editor.
            </Text>
            <Text as="p" className="welcome-cta">
              <Link
                href="https://github.com/atom/atom"
                className="welcome-button"
              >
                Fork on GitHub
              </Link>
            </Text>
          </Box>

          <Box className="column">
            <Heading as="h3">Keep in touch</Heading>
            <Box as="table" className="welcome-contact-table">
              <Box as="tbody">
                <Box as="tr">
                  <Box as="td">GitHub</Box>
                  <Box as="td">
                    <Link href="https://github.com/atom">github.com/atom</Link>
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="td">Twitter</Box>
                  <Box as="td">
                    <Link href="https://twitter.com/atomeditor">
                      @AtomEditor
                    </Link>
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="td">Discussions</Box>
                  <Box as="td">
                    <Link href="https://github.com/atom/atom/discussions">
                      Github Discussions
                    </Link>
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="td">Stuff</Box>
                  <Box as="td">
                    <Link href="https://github.myshopify.com/search?q=atom">
                      Atom Gear
                    </Link>
                  </Box>
                </Box>
                <Box as="tr">
                  <Box as="td">RSS Feed</Box>
                  <Box as="td">
                    <Link href="/packages.atom">Packages &amp; Themes</Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactLegacy;
