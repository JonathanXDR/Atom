'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import {
  Box,
  Button,
  FormControl,
  Heading,
  PageLayout,
  TextInput,
  Textarea,
} from '@primer/react';
import Link from 'next/link';

export default function Contact() {
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
          width="large"
          sx={{
            minHeight: '100vh',
          }}
        >
          <Box className="columns">
            <Box className="column main-column">
              <Heading as="h3" className="contact-title">
                Get in touch
              </Heading>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <FormControl
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  <FormControl.Label>Name</FormControl.Label>
                  <TextInput
                    sx={{
                      width: '100%',
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  <FormControl.Label>Email</FormControl.Label>
                  <TextInput
                    sx={{
                      width: '100%',
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  <FormControl.Label>Subject</FormControl.Label>
                  <TextInput
                    sx={{
                      width: '100%',
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    marginBottom: 3,
                  }}
                >
                  <FormControl.Label>Message</FormControl.Label>
                  <Textarea
                    sx={{
                      width: '100%',
                    }}
                  />
                </FormControl>

                <FormControl
                  sx={{
                    marginBottom: 3,
                    alignSelf: 'flex-end',
                  }}
                >
                  <FormControl.Label visuallyHidden>
                    Send request
                  </FormControl.Label>
                  <Button variant="primary" size="large">
                    Send request
                  </Button>
                </FormControl>
              </Box>
            </Box>
            <Box className="column sidebar">
              <Heading as="h3" className="">
                Join the community
              </Heading>
              <Box as="table" className="contact-list">
                <Box as="tbody">
                  <Box as="tr">
                    <Box as="td">GitHub</Box>
                    <Box as="td">
                      <Link href="https://github.com/atom">@atom</Link>
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
                    <Box as="td">Github Discussions</Box>
                    <Box as="td">
                      <Link href="https://github.com/atom/atom/discussions">
                        Github Discussions
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </PageLayout.Content>

        <PageLayout.Footer>
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
