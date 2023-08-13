'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import HeroHeader from '@/components/HeroHeader/HeroHeader';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
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
import '/public/assets/css/atom.css';
import indexGithubScreenshot from '/public/assets/png/index-github-screenshot.png';
import indexIdeScreenshot from '/public/assets/png/index-ide-screenshot.png';
import indexTeletypeScreenshot from '/public/assets/png/index-teletype-screenshot.png';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <>
      <Box className="footer-push">
        <NavItemLegacy />

        <Box className="welcome">
          <section className="section section--hero">
            <SunsetBanner />
            <Box className="wrapper">
              <HeroHeader />
              <Box className="hero-features">
                <h1 className="hero-tagline">
                  A hackable
                  <Text className="hero-tagline-highlight">
                    {' '}
                    text editor
                  </Text>{' '}
                  for the 21st Century
                </h1>
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
          </section>

          <section id="teletype" className="section section--realtime">
            <Box className="wrapper">
              <Heading as="h3">Teletype for Atom</Heading>

              <Text
                as="p"
                sx={{
                  marginBlock: '1em',
                }}
              >
                Great things happen when developers work together—from teaching
                and sharing knowledge to building better software. Teletype for
                Atom makes collaborating on code just as easy as it is to code
                alone, right from your editor.
              </Text>

              <Box className="welcome-bgs">
                <Image
                  className="welcome-bg welcome-bg--screenshot"
                  src={indexTeletypeScreenshot}
                  alt="index-teletype-screenshot"
                />
              </Box>

              <Text as="p">
                Share your workspace and edit code together in real time. To
                start collaborating,{' '}
                <Link href="atom://settings-view/show-package?package=teletype">
                  open Teletype in Atom{' '}
                </Link>
                and install the package.
              </Text>

              <Text as="p" className="welcome-cta">
                <Link href="/teletype" className="welcome-button">
                  Learn more
                </Link>
              </Text>
            </Box>
          </section>

          <section id="ide" className="section section--ide">
            <Box className="wrapper">
              <Heading as="h3">Atom IDE</Heading>
              <Text
                as="p"
                sx={{
                  marginBlock: '1em',
                }}
              >
                Atom-IDE is a set of optional packages to bring IDE-like
                functionality to Atom and improve language integrations.
              </Text>
              <Box className="welcome-bgs">
                <Image
                  className="welcome-bg welcome-bg--screenshot"
                  src={indexIdeScreenshot}
                  alt="index-ide-screenshot"
                />
              </Box>
              <Text as="p">
                Get smarter context-aware auto-completion, code navigation
                features such as an outline view, go to definition and find all
                references. You can also hover-to-reveal information,
                diagnostics (errors and warnings) and document formatting. To
                get all these IDE features,
                <Link href="atom://settings-view/show-package?package=atom-ide-ui">
                  {' '}
                  open Atom IDE UI in Atom{' '}
                </Link>
                and install the package.
              </Text>
              <Text as="p" className="welcome-cta">
                <Link href="/ide" className="welcome-button">
                  Learn more
                </Link>
              </Text>
            </Box>
          </section>

          <section id="github" className="section section--github">
            <Box className="wrapper">
              <Heading as="h3">GitHub for Atom</Heading>

              <Text
                as="p"
                sx={{
                  marginBlock: '1em',
                }}
              >
                A text editor is at the core of a developer&apos;s toolbox, but
                it doesn&apos;t usually work alone. Work with Git and GitHub
                directly from Atom with the GitHub package.
              </Text>

              <Box className="welcome-bgs">
                <Image
                  className="welcome-bg welcome-bg--screenshot"
                  src={indexGithubScreenshot}
                  alt="index-github-screenshot"
                />
              </Box>

              <Text as="p">
                Create new branches, stage and commit, push and pull, resolve
                merge conflicts, view pull requests and more—all from within
                your editor. The GitHub package is already bundled with Atom, so
                you&apos;re ready to go!
              </Text>

              <Text as="p" className="welcome-cta">
                <Link href="/github" className="welcome-button">
                  Learn more
                </Link>
              </Text>
            </Box>
          </section>

          <section className="section section--features">
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
                  <h4>Cross-platform editing</h4>
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
                  <h4>Built-in package manager</h4>
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
                  <h4>Smart autocompletion</h4>
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
                  <h4>File system browser</h4>
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
                  <h4>Multiple panes</h4>
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
                  <h4>Find and replace</h4>
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
                  <h4>Packages</h4>
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
                  <h4>Themes</h4>
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
                  <h4>Customization</h4>
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
                  <h4>Under the hood</h4>
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
          </section>

          <section className="section section--contact">
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
          </section>
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterItem />
    </>
  );
}
