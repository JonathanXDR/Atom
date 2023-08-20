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
import Image from 'next/image';
import Link from 'next/link';
import '/public/assets/css/application.css';
import indexGithubScreenshot from '/public/assets/png/index-github-screenshot.png';
import indexIdeScreenshot from '/public/assets/png/index-ide-screenshot.png';
import indexTeletypeScreenshot from '/public/assets/png/index-teletype-screenshot.png';
import octonaut from '/public/assets/svg/octonaut.svg';

export default function Home() {
  return (
    <div className="is-responsive">
      <div className="footer-push">
        <NavItemLegacy />
        <div id="js-pjax-container">
          <div className="welcome">
            <section className="section section--hero">
              <SunsetBanner />
              <div className="wrapper">
                <HeroHeader />
                <div className="hero-features">
                  <h1 className="hero-tagline">
                    A hackable
                    <span className="hero-tagline-highlight">
                      {' '}
                      text editor
                    </span>{' '}
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
                </div>
                <Image
                  className="hero-octonaut"
                  src={octonaut}
                  alt="octonaut"
                />
              </div>
            </section>

            <section id="teletype" className="section section--realtime">
              <div className="wrapper">
                <h3>Teletype for Atom</h3>

                <p
                  style={{
                    marginBlock: '1em',
                  }}
                >
                  Great things happen when developers work together—from
                  teaching and sharing knowledge to building better software.
                  Teletype for Atom makes collaborating on code just as easy as
                  it is to code alone, right from your editor.
                </p>

                <div className="welcome-bgs">
                  <Image
                    className="welcome-bg welcome-bg--screenshot"
                    src={indexTeletypeScreenshot}
                    alt="index-teletype-screenshot"
                  />
                </div>

                <p>
                  Share your workspace and edit code together in real time. To
                  start collaborating,{' '}
                  <Link href="atom://settings-view/show-package?package=teletype">
                    open Teletype in Atom{' '}
                  </Link>
                  and install the package.
                </p>

                <p className="welcome-cta">
                  <Link href="/teletype" className="welcome-button">
                    Learn more
                  </Link>
                </p>
              </div>
            </section>

            <section id="ide" className="section section--ide">
              <div className="wrapper">
                <h3>Atom IDE</h3>
                <p
                  style={{
                    marginBlock: '1em',
                  }}
                >
                  Atom-IDE is a set of optional packages to bring IDE-like
                  functionality to Atom and improve language integrations.
                </p>
                <div className="welcome-bgs">
                  <Image
                    className="welcome-bg welcome-bg--screenshot"
                    src={indexIdeScreenshot}
                    alt="index-ide-screenshot"
                  />
                </div>
                <p>
                  Get smarter context-aware auto-completion, code navigation
                  features such as an outline view, go to definition and find
                  all references. You can also hover-to-reveal information,
                  diagnostics (errors and warnings) and document formatting. To
                  get all these IDE features,
                  <Link href="atom://settings-view/show-package?package=atom-ide-ui">
                    {' '}
                    open Atom IDE UI in Atom{' '}
                  </Link>
                  and install the package.
                </p>
                <p className="welcome-cta">
                  <Link href="/ide" className="welcome-button">
                    Learn more
                  </Link>
                </p>
              </div>
            </section>

            <section id="github" className="section section--github">
              <div className="wrapper">
                <h3>GitHub for Atom</h3>

                <p
                  style={{
                    marginBlock: '1em',
                  }}
                >
                  A text editor is at the core of a developer&apos;s toolbox,
                  but it doesn&apos;t usually work alone. Work with Git and
                  GitHub directly from Atom with the GitHub package.
                </p>

                <div className="welcome-bgs">
                  <Image
                    className="welcome-bg welcome-bg--screenshot"
                    src={indexGithubScreenshot}
                    alt="index-github-screenshot"
                  />
                </div>

                <p>
                  Create new branches, stage and commit, push and pull, resolve
                  merge conflicts, view pull requests and more—all from within
                  your editor. The GitHub package is already bundled with Atom,
                  so you&apos;re ready to go!
                </p>

                <p className="welcome-cta">
                  <Link href="/github" className="welcome-button">
                    Learn more
                  </Link>
                </p>
              </div>
            </section>

            <section className="section section--features">
              <div className="wrapper no-pad">
                <h3>Everything you would expect</h3>

                <div className="features">
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DeviceDesktopIcon size={24} />
                    </div>
                    <h4>Cross-platform editing</h4>
                    <p>
                      Atom works across operating systems. Use it on OS X,
                      Windows, or Linux.
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PackageIcon size={24} />
                    </div>
                    <h4>Built-in package manager</h4>
                    <p>
                      Search for and install new packages or create your own
                      right from Atom.
                    </p>
                  </div>

                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LightBulbIcon size={24} />
                    </div>
                    <h4>Smart autocompletion</h4>
                    <p>
                      Atom helps you write code faster with a smart and flexible
                      autocomplete.
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FileCodeIcon size={24} />
                    </div>
                    <h4>File system browser</h4>
                    <p>
                      Easily browse and open a single file, a whole project, or
                      multiple projects in one window.
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MirrorIcon size={24} />
                    </div>
                    <h4>Multiple panes</h4>
                    <p>
                      Split your Atom interface into multiple panes to compare
                      and edit code across files.
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <SearchIcon size={24} />
                    </div>
                    <h4>Find and replace</h4>
                    <p>
                      Find, preview, and replace text as you type in a file or
                      across all your projects.
                    </p>
                  </div>
                </div>

                <h3>Make it your editor</h3>

                <div className="features">
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PackageIcon size={24} />
                    </div>
                    <h4>Packages</h4>
                    <p>
                      Choose from thousands of{' '}
                      <Link href="/packages">open source packages </Link>
                      that add new features and functionality to Atom, or build
                      a package from scratch and publish it for everyone else to
                      use.
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PaintbrushIcon size={24} />
                    </div>
                    <h4>Themes</h4>
                    <p>
                      Atom comes pre-installed with four UI and eight syntax{' '}
                      <Link href="/themes">themes </Link>
                      in both dark and light colors. Can&apos;t find what
                      you&apos;re looking for? Install themes created by the
                      Atom community or create your own.
                    </p>
                  </div>

                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ToolsIcon size={24} />
                    </div>
                    <h4>Customization</h4>
                    <p>
                      It&apos;s easy to customize and style Atom. Tweak the look
                      and feel of your UI with CSS/Less, and add major features
                      with HTML and JavaScript.
                    </p>
                    <p>
                      <br />
                      <Link
                        href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                        target="_blank"
                      >
                        See how to set up Atom
                      </Link>
                    </p>
                  </div>
                  <div className="features-item">
                    <div
                      className="mega-octicon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CodeIcon size={24} />
                    </div>
                    <h4>Under the hood</h4>
                    <p>
                      Atom is a desktop application built with HTML, JavaScript,
                      CSS, and Node.js integration. It runs on{' '}
                      <Link href="https://electronjs.org/">Electron</Link>, a
                      framework for building cross platform apps using web
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--contact">
              <div className="wrapper no-pad">
                <div className="columns">
                  <div className="column">
                    <h3>Open source</h3>
                    <p>
                      Atom is open source. Be part of the Atom community or help
                      improve your favorite text editor.
                    </p>
                    <p className="welcome-cta">
                      <Link
                        href="https://github.com/atom/atom"
                        className="welcome-button"
                      >
                        Fork on GitHub
                      </Link>
                    </p>
                  </div>

                  <div className="column">
                    <h3>Keep in touch</h3>
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="footer-pad"></div>
      </div>

      <FooterItem />
    </div>
  );
}
