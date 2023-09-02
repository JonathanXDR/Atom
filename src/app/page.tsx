'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import HeroHeader from '@/components/HeroHeader/HeroHeader';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
import RiverItem from '@/components/RiverItem/RiverItem';
import SunsetBanner from '@/components/SunsetBanner/SunsetBanner';
import {
  CodeIcon,
  DeviceDesktopIcon,
  FileCodeIcon,
  LightBulbIcon,
  MirrorIcon,
  PackageIcon,
  PaintbrushIcon,
  SearchIcon,
  ToolsIcon,
} from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavItemLegacy />

        <Box className="welcome">
          <Box as="section" className="section section--hero">
            <SunsetBanner />
            <Box className="wrapper">
              <HeroHeader />
              <Box className="hero-features">
                <Heading as="h1" className="hero-tagline">
                  A hackable
                  <Text className="hero-tagline-highlight">
                    {' '}
                    text editor
                  </Text>{' '}
                  for the 21st Century
                </Heading>
                <Link
                  className="hero-link hero-link--teletype"
                  href="#teletype"
                >
                  Real-time collaboration
                </Link>
                <Link className="hero-link hero-link--ide" href="#ide">
                  IDE features
                </Link>
                <Link className="hero-link hero-link--github" href="#github">
                  Git and GitHub integration
                </Link>
              </Box>
              <Image className="hero-octonaut" src={octonaut} alt="octonaut" />
            </Box>
          </Box>

          <RiverItem />

          <Box as="section" className="section section--features">
            <Box className="wrapper no-pad">
              <Heading as="h3">Everything you would expect</Heading>

              <Box className="features">
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <DeviceDesktopIcon size={24} />
                  </Box>
                  <Heading as="h4">Cross-platform editing</Heading>
                  <Text as="p">
                    Atom works across operating systems. Use it on OS X,
                    Windows, or Linux.
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PackageIcon size={24} />
                  </Box>
                  <Heading as="h4">Built-in package manager</Heading>
                  <Text as="p">
                    Search for and install new packages or create your own right
                    from Atom.
                  </Text>
                </Box>

                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LightBulbIcon size={24} />
                  </Box>
                  <Heading as="h4">Smart autocompletion</Heading>
                  <Text as="p">
                    Atom helps you write code faster with a smart and flexible
                    autocomplete.
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FileCodeIcon size={24} />
                  </Box>
                  <Heading as="h4">File system browser</Heading>
                  <Text as="p">
                    Easily browse and open a single file, a whole project, or
                    multiple projects in one window.
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MirrorIcon size={24} />
                  </Box>
                  <Heading as="h4">Multiple panes</Heading>
                  <Text as="p">
                    Split your Atom interface into multiple panes to compare and
                    edit code across files.
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <SearchIcon size={24} />
                  </Box>
                  <Heading as="h4">Find and replace</Heading>
                  <Text as="p">
                    Find, preview, and replace text as you type in a file or
                    across all your projects.
                  </Text>
                </Box>
              </Box>

              <Heading as="h3">Make it your editor</Heading>

              <Box className="features">
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PackageIcon size={24} />
                  </Box>
                  <Heading as="h4">Packages</Heading>
                  <Text as="p">
                    Choose from thousands of{' '}
                    <Link href="/packages">open source packages </Link>
                    that add new features and functionality to Atom, or build a
                    package from scratch and publish it for everyone else to
                    use.
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PaintbrushIcon size={24} />
                  </Box>
                  <Heading as="h4">Themes</Heading>
                  <Text as="p">
                    Atom comes pre-installed with four UI and eight syntax{' '}
                    <Link href="/themes">themes </Link>
                    in both dark and light colors. Can&apos;t find what
                    you&apos;re looking for? Install themes created by the Atom
                    community or create your own.
                  </Text>
                </Box>

                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ToolsIcon size={24} />
                  </Box>
                  <Heading as="h4">Customization</Heading>
                  <Text as="p">
                    It&apos;s easy to customize and style Atom. Tweak the look
                    and feel of your UI with CSS/Less, and add major features
                    with HTML and JavaScript.
                  </Text>
                  <Text as="p">
                    <br />
                    <Link
                      href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                      target="_blank"
                    >
                      See how to set up Atom
                    </Link>
                  </Text>
                </Box>
                <Box className="features-item">
                  <Box
                    className="mega-octicon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CodeIcon size={24} />
                  </Box>
                  <Heading as="h4">Under the hood</Heading>
                  <Text as="p">
                    Atom is a desktop application built with HTML, JavaScript,
                    CSS, and Node.js integration. It runs on{' '}
                    <Link href="https://electronjs.org/">Electron</Link>, a
                    framework for building cross platform apps using web
                    technologies.
                  </Text>
                </Box>
              </Box>
            </Box>
            R
          </Box>

          <Box as="section" className="section section--contact">
            <Box className="wrapper no-pad">
              <Box className="columns">
                <Box className="column">
                  <Heading as="h3">Open source</Heading>
                  <Text as="p">
                    Atom is open source. Be part of the Atom community or help
                    improve your favorite text editor.
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
                  <table className="welcome-contact-table">
                    <tbody>
                      <tr>
                        <td>GitHub</td>
                        <td>
                          <Link href="https://github.com/atom">
                            github.com/atom
                          </Link>
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
                        <td>Discussions</td>
                        <td>
                          <Link href="https://github.com/atom/atom/discussions">
                            Github Discussions
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Stuff</td>
                        <td>
                          <Link href="https://github.myshopify.com/search?q=atom">
                            Atom Gear
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>RSS Feed</td>
                        <td>
                          <Link href="/packages.atom">
                            Packages &amp; Themes
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterItem />
    </>
  );
}
