"use client";

export default function Home() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>Atom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          media="all"
          href="assets/css/application.css"
          data-turbolinks-track="true"
        />
        <script
          src="assets/js/application.js"
          data-turbolinks-track="true"
        ></script>
        <meta name="csrf-param" content="authenticity_token" />
        <meta
          name="csrf-token"
          content="vGyi0oHbZiIVCar7A6ZH/7fwqqT9hbgUL3d67RXYxqvGkDNwa8MRalwIfORYxf/XkeEz7Pizew717ggBQitT+Q=="
        />
        <meta
          property="og:url"
          content="https://web.archive.org/web/20221207004815/https://atom.io/"
        />
        <meta property="og:site_name" content="Atom" />
        <meta
          property="og:title"
          content="A hackable text editor for the 21st Century"
        />
        <meta
          property="og:description"
          content="At GitHub, we’re building the text editor we’ve always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can’t wait to see what you build with it."
        />
        <meta property="og:type" content="website" />
        <meta property="og:author" content="https://www.facebook.com/GitHub" />
        <meta property="og:image" content="assets/png/atom-mark@1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@AtomEditor" />
        <meta property="twitter:creator" content="@github" />
        <meta property="twitter:title" content="Atom" />
        <meta
          property="twitter:description"
          content="A hackable text editor for the 21st Century"
        />
        <meta
          property="twitter:image:src"
          content="assets/png/atom-logo@1200x630.png"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />

        <meta
          name="description"
          content="At GitHub, we’re building the text editor we’ve always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can’t wait to see what you build with it."
        />
        <meta
          name="google-site-verification"
          content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"
        />

        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom Packages and Themes"
          href="https://web.archive.org/web/20221207004815/https://atom.io/packages.atom"
        />
      </head>
      <body className="is-responsive">
        <div className="footer-push">
          <nav className="top-bar" aria-label="Primary">
            <div className="wrapper no-pad">
              <ul className="navigation">
                <li>
                  <a
                    className=""
                    href="https://web.archive.org/web/20221207004815/https://atom.io/packages"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://web.archive.org/web/20221207004815/https://atom.io/themes"
                  >
                    Themes
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://web.archive.org/web/20221207004815/https://atom.io/docs"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://blog.atom.io/">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://github.com/atom/atom/discussions">
                    Discussions
                  </a>
                </li>
              </ul>

              <div className="top-bar-right">
                <a href="https://web.archive.org/web/20221207004815/https://atom.io/login?last_url=%2F">
                  <span className="octicon octicon-log-in"></span> Sign in
                </a>
              </div>
            </div>
          </nav>

          <div id="js-pjax-container">
            <div className="welcome">
              <section className="section section--hero">
                <p className="sunset-banner sunset-text-color">
                  Atom and all repositories under Atom will be archived on
                  December 15, 2022
                  <a
                    className="sunset-text-color"
                    href="https://web.archive.org/web/20221207004815/https://github.blog/2022-06-08-sunsetting-atom/"
                  >
                    Learn more in our official statement
                  </a>
                </p>
                <div className="wrapper">
                  <header className="hero-header">
                    <div
                      className="hero-header-item hero-logo"
                      aria-hidden="true"
                    >
                      <div className="hero-logo-circles">
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-red-semi.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-red.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-orange-semi.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-orange.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-yellow-semi.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-yellow.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-green-semi.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-green.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-blue-semi.svg"
                        />
                        <img
                          className="hero-logo-circle"
                          src="assets/svg/portal-blue.svg"
                        />
                      </div>
                    </div>
                    <ul className="hero-header-item hero-download">
                      <li>
                        <img
                          className="logo-wordmark"
                          src="assets/svg/atom-wordmark.svg"
                        />
                      </li>
                      <li>
                        <span className="version">1.63</span>
                        <a href="https://web.archive.org/web/20221207004815/https://atom.io/releases">
                          Release notes
                        </a>
                      </li>

                      <li>
                        <span className="platform">Windows</span>
                        <span className="support">
                          For 64-bit Windows 7 or later
                        </span>
                      </li>
                      <li>
                        <a
                          href="https://web.archive.org/web/20221207004815/https://atom.io/download/windows_x64"
                          className="welcome-button js-download-button"
                        >
                          <span className="octicon octicon-move-down"></span>
                          Download
                        </a>
                      </li>
                    </ul>

                    <p className="hero-meta">
                      <span className="hero-tos">
                        By downloading, you agree to the
                        <a href="https://web.archive.org/web/20221207004815/https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                          Terms and Conditions
                        </a>
                        .
                      </span>
                      <a href="https://web.archive.org/web/20221207004815/https://github.com/atom/atom/releases/latest">
                        Other platforms
                      </a>
                      <a href="https://web.archive.org/web/20221207004815/https://atom.io/beta">
                        Try Atom Beta
                      </a>
                      <a href="https://web.archive.org/web/20221207004815/https://atom.io/nightly">
                        Try Atom Nightly
                      </a>
                    </p>
                  </header>

                  <div className="hero-features">
                    <h1 className="hero-tagline">
                      A hackable
                      <span className="hero-tagline-highlight">
                        text editor
                      </span>{" "}
                      for the 21st Century
                    </h1>
                  </div>

                  <img
                    className="hero-octonaut"
                    src="assets/svg/octonaut.svg"
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
                    <img
                      className="welcome-bg welcome-bg--screenshot"
                      src="assets/png/teletype-screenshot.png"
                    />
                  </div>

                  <p>
                    Share your workspace and edit code together in real time. To
                    start collaborating,
                    <a href="https://web.archive.org/web/20221207004815/atom://settings-view/show-package?package=teletype">
                      open Teletype in Atom
                    </a>
                    and install the package.
                  </p>

                  <p className="welcome-cta">
                    <a
                      href="https://web.archive.org/web/20221207004815/https://teletype.atom.io/"
                      className="welcome-button"
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </section>

              <section id="github" className="section section--github">
                <div className="wrapper">
                  <h3>GitHub for Atom</h3>

                  <p>
                    A text editor is at the core of a developer’s toolbox, but
                    it doesn't usually work alone. Work with Git and GitHub
                    directly from Atom with the GitHub package.
                  </p>

                  <div className="welcome-bgs">
                    <img
                      className="welcome-bg welcome-bg--screenshot"
                      src="assets/png/github-screenshot.png"
                    />
                  </div>

                  <p>
                    Create new branches, stage and commit, push and pull,
                    resolve merge conflicts, view pull requests and more—all
                    from within your editor. The GitHub package is already
                    bundled with Atom, so you're ready to go!
                  </p>

                  <p className="welcome-cta">
                    <a
                      href="https://web.archive.org/web/20221207004815/https://github.atom.io/"
                      className="welcome-button"
                    >
                      Learn more
                    </a>
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
                        Choose from thousands of
                        <a href="https://web.archive.org/web/20221207004815/https://atom.io/packages">
                          open source packages
                        </a>
                        that add new features and functionality to Atom, or
                        build a package from scratch and publish it for everyone
                        else to use.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-paintcan"></span>
                      <h4>Themes</h4>
                      <p>
                        Atom comes pre-installed with four UI and eight syntax
                        <a href="https://web.archive.org/web/20221207004815/https://atom.io/themes">
                          themes
                        </a>
                        in both dark and light colors. Can't find what you're
                        looking for? Install themes created by the Atom
                        community or create your own.
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-tools"></span>
                      <h4>Customization</h4>
                      <p>
                        It's easy to customize and style Atom. Tweak the look
                        and feel of your UI with CSS/Less, and add major
                        features with HTML and JavaScript.
                      </p>
                      <p>
                        <br />
                        <a
                          href="https://web.archive.org/web/20221207004815/https://www.youtube.com/watch?v=U5POoGSrtGg"
                          target="_blank"
                        >
                          See how to set up Atom
                        </a>
                      </p>
                    </div>
                    <div className="features-item">
                      <span className="mega-octicon octicon-code"></span>
                      <h4>Under the hood</h4>
                      <p>
                        Atom is a desktop application built with HTML,
                        JavaScript, CSS, and Node.js integration. It runs on
                        <a href="https://web.archive.org/web/20221207004815/https://electronjs.org/">
                          Electron
                        </a>
                        , a framework for building cross platform apps using web
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section section--contact">
                <a name="contact"></a>
                <div className="wrapper no-pad">
                  <div className="columns">
                    <div className="column">
                      <h3>Open source</h3>
                      <p>
                        Atom is open source. Be part of the Atom community or
                        help improve your favorite text editor.
                      </p>
                      <p className="welcome-cta">
                        <a
                          href="https://web.archive.org/web/20221207004815/https://github.com/atom/atom"
                          className="welcome-button"
                        >
                          Fork on GitHub
                        </a>
                      </p>
                    </div>

                    <div className="column">
                      <h3>Keep in touch</h3>
                      <table className="welcome-contact-table">
                        <tbody>
                          <tr>
                            <td>GitHub</td>
                            <td>
                              <a href="https://web.archive.org/web/20221207004815/https://github.com/atom">
                                github.com/atom
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Twitter</td>
                            <td>
                              <a href="https://web.archive.org/web/20221207004815/https://twitter.com/atomeditor">
                                @AtomEditor
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Discussions</td>
                            <td>
                              <a href="https://web.archive.org/web/20221207004815/https://github.com/atom/atom/discussions">
                                Github Discussions
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Stuff</td>
                            <td>
                              <a href="https://web.archive.org/web/20221207004815/https://github.myshopify.com/search?q=atom">
                                Atom Gear
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>RSS Feed</td>
                            <td>
                              <a href="https://web.archive.org/web/20221207004815/https://atom.io/packages.atom">
                                Packages &amp; Themes
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <script
                  src="https://web.archive.org/web/20221207004815js_/https://platform.twitter.com/oct.js"
                  type="text/javascript"
                ></script>
                {/* <script type="text/javascript">
              twttr.conversion.trackPid('l6c37', {
                tw_sale_amount: 0,
                tw_order_quantity: 0,
              });
            </script> */}
                <noscript>
                  <img
                    height="1"
                    width="1"
                    style="display: none"
                    alt=""
                    src="https://web.archive.org/web/20221207004815im_/https://analytics.twitter.com/i/adsct?txn_id=l6c37&amp;p_id=Twitter&amp;tw_sale_amount=0&amp;tw_order_quantity=0"
                  />
                  <img
                    height="1"
                    width="1"
                    style="display: none"
                    alt=""
                    src="https://web.archive.org/web/20221207004815im_/https://t.co/i/adsct?txn_id=l6c37&amp;p_id=Twitter&amp;tw_sale_amount=0&amp;tw_order_quantity=0"
                  />
                </noscript>
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
                  <a href="https://web.archive.org/web/20221207004815/https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://atom.io/releases">
                    Releases
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://flight-manual.atom.io/faq/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="https://web.archive.org/web/20221207004815/https://atom.io/contact">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="footer-right">
                <a href="https://web.archive.org/web/20221207004815/https://github.com/">
                  <span className="octicon octicon-code"></span> with
                  <span className="octicon octicon-heart"></span> by
                  <span className="octicon octicon-logo-github"></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
