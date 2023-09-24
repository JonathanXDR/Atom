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
  TextInput,
  Textarea,
} from '@primer/react';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <NavLegacy nav={nav} />

      <Box className="contact content-push">
        <Box className="wrapper">
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
              <table className="contact-list">
                <tbody>
                  <tr>
                    <td>GitHub</td>
                    <td>
                      <Link href="https://github.com/atom">@atom</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>
                      <Link href="https://twitter.com/atomeditor">
                        @AtomEditor
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Github Discussions</td>
                    <td>
                      <Link href="https://github.com/atom/atom/discussions">
                        Github Discussions
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>
        </Box>
      </Box>

      <FooterLegacy footer={footer} />
    </>
  );
}
