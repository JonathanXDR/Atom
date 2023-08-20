'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
import { Box, Button, FormControl, TextInput, Textarea } from '@primer/react';
import Link from 'next/link';
import './main.css';
import '/public/assets/css/application.css';

export default function Contact() {
  return (
    <>
      <div className="footer-push">
        <NavItemLegacy />

        <div id="js-pjax-container">
          <div className="contact content-push">
            <div className="wrapper">
              <div className="columns">
                <div className="column main-column">
                  <h3 className="contact-title">Get in touch</h3>
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
                </div>
                <div className="column sidebar">
                  <h3 className="">Join the community</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-pad"></div>
      </div>

      <FooterItem />

      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
    </>
  );
}
