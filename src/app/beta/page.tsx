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
import atomWordmark from "/public/assets/svg/atom-wordmark.svg";

export default function Beta() {
  return (
    <>
      <head>
        <title>Atom</title>
        <meta property="og:url" content="/" />
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
                  <h1>
                    <Link
                      href="/"
                      className="logo-small"
                      title="Atom: A hackable text editor for the 21st Century"
                    ></Link>
                  </h1>
                </li>
                <li>
                  <a className="" href="/packages">
                    Packages
                  </a>
                </li>
                <li>
                  <a className="" href="/themes">
                    Themes
                  </a>
                </li>
                <li>
                  <a className="" href="/docs">
                    Documentation
                  </a>
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
                <Link href="/login?last_url=%2Fbeta">
                  <span className="octicon octicon-log-in"></span> Sign in
                </Link>
              </div>
            </div>
          </nav>

          <div id="js-pjax-container">
            <div className="welcome welcome-beta">
              <section className="section section--hero">
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
                        <span className="version">BETA</span>
                        <Link href="/releases">Release notes</Link>
                      </li>

                      <li>
                        <span className="platform">macOS</span>
                        <span className="support">
                          For macOS 10.10 or later
                        </span>
                      </li>
                      <li>
                        <a
                          href="/download/windows_x64?channel=beta"
                          className="welcome-button js-download-button"
                        >
                          <span className="octicon octicon-move-down"></span>
                          Download
                        </a>
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
                      <Link href="https://github.com/atom/atom/releases">
                        Other platforms
                      </Link>
                      <Link href="/">Back to Atom Stable</Link>
                    </p>
                  </header>
                </div>
              </section>

              <section className="section section--features">
                <div className="wrapper wrapper--beta">
                  <h3>Try Atom Beta</h3>

                  <p>
                    Want to be on the bleeding edge? The Beta channel contains
                    new features and bug fixes before they land on the{" "}
                    <Link href="/">stable channel</Link>. It is intended for
                    developers and early adopters. See the{" "}
                    <Link href="https://blog.atom.io/2015/10/21/introducing-the-atom-beta-channel.html">
                      blog post{" "}
                    </Link>
                    for more information.
                  </p>

                  <div className="features-item">
                    <span className="mega-octicon octicon-rocket"></span>
                    <p>
                      Keep your current Atom configuration when using Atom Beta
                    </p>
                  </div>
                  <div className="features-item">
                    <span className="mega-octicon octicon-calendar"></span>
                    <p>
                      New Beta releases are available regularly and installed
                      automatically
                    </p>
                  </div>
                  <div className="features-item">
                    <span className="mega-octicon octicon-bug"></span>
                    <p>
                      There may be bugs. If you have problems, please{" "}
                      <Link href="https://github.com/atom/atom/blob/master/CONTRIBUTING.md#submitting-issues">
                        file an issue
                      </Link>
                    </p>
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
