"use client";
import Image from "next/image";
import "/public/assets/css/application.css";

import portalBlueSemi from "/public/assets/svg/portal-blue-semi.svg";
import portalBlue from "/public/assets/svg/portal-blue.svg";
import portalGreenSemi from "/public/assets/svg/portal-green-semi.svg";
import portalGreen from "/public/assets/svg/portal-green.svg";
import portalOrangeSemi from "/public/assets/svg/portal-orange-semi.svg";
import portalOrange from "/public/assets/svg/portal-orange.svg";
import portalRedSemi from "/public/assets/svg/portal-red-semi.svg";
import portalRed from "/public/assets/svg/portal-red.svg";
import portalYellowSemi from "/public/assets/svg/portal-yellow-semi.svg";
import portalYellow from "/public/assets/svg/portal-yellow.svg";

import Link from "next/link";
import githubScreenshot from "/public/assets/png/github-screenshot.png";
import teletypeScreenshot from "/public/assets/png/teletype-screenshot.png";
import atomWordmark from "/public/assets/svg/atom-wordmark.svg";
import octonaut from "/public/assets/svg/octonaut.svg";

export default function Home() {
  return (
    <>
      <head>
        <title>Atom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://atom.io/" />
        <meta property="og:site_name" content="Atom" />
        <meta
          property="og:title"
          content="A hackable text editor for the 21st Century"
        />
        <meta
          property="og:description"
          content="At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it."
        />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="https://www.facebook.com/GitHub" />
        <meta property="og:image" content="assets/png/atom-mark@1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="description"
          content="At GitHub, we're building the text editor we've always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can't wait to see what you build with it."
        />

        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom Packages and Themes"
          href="/packages.atom"
        />
      </head>
      <body className="is-responsive">
        <div className="footer-push">
          <nav className="top-bar" aria-label="Primary">
            <div className="wrapper no-pad">
              <ul className="navigation">
                <li>
                  <Link href="/packages">Packages</Link>
                </li>
                <li>
                  <Link href="/themes">Themes</Link>
                </li>
                <li>
                  <Link href="/docs">Documentation</Link>
                </li>
                <li>
                  <Link href="https://blog.atom.io/">Blog</Link>
                </li>
                <li>
                  <Link href="https://github.com/atom/atom/discussions">
                    Discussions
                  </Link>
                </li>
              </ul>

              <div className="top-bar-right">
                <Link href="/login?last_url=%2F">
                  <span className="octicon octicon-log-in"></span> Sign in
                </Link>
              </div>
            </div>
          </nav>

          <div id="js-pjax-container">
            <div className="welcome">
              <section className="section section--hero">
                <p className="sunset-banner sunset-text-color">
                  Atom and all repositories under Atom will be archived on
                  December 15, 2022
                  <Link
                    className="sunset-text-color"
                    href="https://github.blog/2022-06-08-sunsetting-atom/"
                  >
                    {" "}
                    Learn more in our official statement
                  </Link>
                </p>
                <div className="wrapper">
                  <header className="hero-header">
                    <div
                      className="hero-header-item hero-logo"
                      aria-hidden="true"
                    >
                      <div className="hero-logo-circles">
                        <Image
                          className="hero-logo-circle"
                          src={portalRedSemi}
                          alt="portal-red-semi"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalRed}
                          alt="portal-red"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalOrangeSemi}
                          alt="portal-orange-semi"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalOrange}
                          alt="portal-orange"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalYellowSemi}
                          alt="portal-yellow-semi"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalYellow}
                          alt="portal-yellow"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalGreenSemi}
                          alt="portal-green-semi"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalGreen}
                          alt="portal-green"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalBlueSemi}
                          alt="portal-blue-semi"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Image
                          className="hero-logo-circle"
                          src={portalBlue}
                          alt="portal-blue"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                    <ul className="hero-header-item hero-download">
                      <li>
                        <Image
                          className="logo-wordmark"
                          src={atomWordmark}
                          alt="atom-wordmark"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </li>
                      <li>
                        <span className="version">1.63</span>
                        <Link href="/releases">Release notes</Link>
                      </li>

                      <li>
                        <span className="platform">macOS</span>
                        <span className="support">
                          For macOS 10.10 or later
                        </span>
                      </li>
                      <li>
                        <Link
                          href="/download/windows_x64"
                          className="welcome-button js-download-button"
                        >
                          <span className="octicon octicon-move-down"></span>
                          Download
                        </Link>
                      </li>
                    </ul>

                    <p className="hero-meta">
                      <span className="hero-tos">
                        By downloading, you agree to the{" "}
                        <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                          Terms and Conditions
                        </Link>
                        .
                      </span>
                      <Link href="https://github.com/atom/atom/releases/latest">
                        Other platforms
                      </Link>
                      <Link href="/beta">Try Atom Beta</Link>
                      <Link href="/nightly">Try Atom Nightly</Link>
                    </p>
                  </header>

                  <div className="hero-features">
                    <h1 className="hero-tagline">
                      A hackable
                      <span className="hero-tagline-highlight">
                        {" "}
                        text editor
                      </span>{" "}
                      for the 21st Century
                    </h1>
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

                  <p>
                    Great things happen when developers work together—from
                    teaching and sharing knowledge to building better software.
                    Teletype for Atom makes collaborating on code just as easy
                    as it is to code alone, right from your editor.
                  </p>

                  <div className="welcome-bgs">
                    <Image
                      className="welcome-bg welcome-bg--screenshot"
                      src={teletypeScreenshot}
                      alt="teletype-screenshot"
                    />
                  </div>

                  <p>
                    Share your workspace and edit code together in real time. To
                    start collaborating,{" "}
                    <Link href="atom://settings-view/show-package?package=teletype">
                      open Teletype in Atom{" "}
                    </Link>
                    and install the package.
                  </p>

                  <p className="welcome-cta">
                    <Link
                      href="https://teletype.atom.io/"
                      className="welcome-button"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </section>

              <section id="github" className="section section--github">
                <div className="wrapper">
                  <h3>GitHub for Atom</h3>

                  <p>
                    A text editor is at the core of a developer&apos;s toolbox,
                    but it doesn&apos;t usually work alone. Work with Git and
                    GitHub directly from Atom with the GitHub package.
                  </p>

                  <div className="welcome-bgs">
                    <Image
                      className="welcome-bg welcome-bg--screenshot"
                      src={githubScreenshot}
                      alt="github-screenshot"
                    />
                  </div>

                  <p>
                    Create new branches, stage and commit, push and pull,
                    resolve merge conflicts, view pull requests and more—all
                    from within your editor. The GitHub package is already
                    bundled with Atom, so you&apos;re ready to go!
                  </p>

                  <p className="welcome-cta">
                    <Link
                      href="https://github.atom.io/"
                      className="welcome-button"
                    >
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
                      <span className="mega-octicon octicon-device-desktop"></span>
                      <h4>Cross-platform editing</h4>
                      <p>
                        Atom works across operating systems. Use it on OS X,
                        Windows, or Linux.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-package"></span>
                      <h4>Built-in package manager</h4>
                      <p>
                        Search for and install new packages or create your own
                        right from Atom.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-light-bulb"></span>
                      <h4>Smart autocompletion</h4>
                      <p>
                        Atom helps you write code faster with a smart and
                        flexible autocomplete.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-file-code"></span>
                      <h4>File system browser</h4>
                      <p>
                        Easily browse and open a single file, a whole project,
                        or multiple projects in one window.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-mirror"></span>
                      <h4>Multiple panes</h4>
                      <p>
                        Split your Atom interface into multiple panes to compare
                        and edit code across files.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-search"></span>
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
                      <span className="mega-octicon octicon-package"></span>
                      <h4>Packages</h4>
                      <p>
                        Choose from thousands of{" "}
                        <Link href="/packages">open source packages </Link>
                        that add new features and functionality to Atom, or
                        build a package from scratch and publish it for everyone
                        else to use.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-paintcan"></span>
                      <h4>Themes</h4>
                      <p>
                        Atom comes pre-installed with four UI and eight syntax{" "}
                        <Link href="/themes">themes </Link>
                        in both dark and light colors. Can&apos;t find what
                        you&apos;re looking for? Install themes created by the
                        Atom community or create your own.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-tools"></span>
                      <h4>Customization</h4>
                      <p>
                        It&apos;s easy to customize and style Atom. Tweak the
                        look and feel of your UI with CSS/Less, and add major
                        features with HTML and JavaScript.
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
                      <span className="mega-octicon octicon-code"></span>
                      <h4>Under the hood</h4>
                      <p>
                        Atom is a desktop application built with HTML,
                        JavaScript, CSS, and Node.js integration. It runs on{" "}
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
                        Atom is open source. Be part of the Atom community or
                        help improve your favorite text editor.
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

        <footer>
          <div className="footer">
            <div className="wrapper no-pad">
              <ul className="footer-left">
                <li>
                  <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link href="/releases">Releases</Link>
                </li>
                <li>
                  <Link href="https://flight-manual.atom.io/faq/">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <div className="footer-right">
                <Link href="https://github.com/">
                  <span className="octicon octicon-code"></span> with{" "}
                  <span className="octicon octicon-heart"></span> by{" "}
                  <span className="octicon octicon-logo-github"></span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
