import "./main.css";
import "/public/assets/css/application.css";

export default function Documentation() {
  return (
    <body>
      <div className="footer-push">
        <nav className="top-bar" aria-label="Primary">
          <div className="wrapper no-pad">
            <ul className="navigation">
              <li>
                <h1>
                  <a
                    href="https://web.archive.org/web/20221207004847/https://atom.io/"
                    className="logo-small"
                    title="Atom: A hackable text editor for the 21st Century"
                  ></a>
                </h1>
              </li>
              <li>
                <a
                  className=""
                  href="https://web.archive.org/web/20221207004847/https://atom.io/packages"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://web.archive.org/web/20221207004847/https://atom.io/themes"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className="is-selected"
                  href="https://web.archive.org/web/20221207004847/https://atom.io/docs"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://blog.atom.io/">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://github.com/atom/atom/discussions">
                  Discussions
                </a>
              </li>
            </ul>

            <div className="top-bar-right">
              <a href="https://web.archive.org/web/20221207004847/https://atom.io/login?last_url=%2Fdocs">
                <span className="octicon octicon-log-in"></span> Sign in
              </a>
            </div>
          </div>
        </nav>

        <div id="js-pjax-container">
          <div id="docs-pjax-container">
            <div className="wrapper documents content-push wide atom-doc-index">
              <h2 className="center index-title">Atom Documentation</h2>
              <h3 className="center subheader">Current Version: v1.60.0</h3>

              <div className="training-video-cta">
                New to Atom? Check out the getting started video.
                <span className="training-video-link">
                  <a
                    href="https://web.archive.org/web/20221207004847/https://www.youtube.com/watch?v=U5POoGSrtGg"
                    target="_blank"
                  >
                    <span className="training-video-play">
                      <span className="octicon octicon-playback-play"></span>
                    </span>
                    Play video
                  </a>
                </span>
              </div>

              <table>
                <tbody>
                  <tr>
                    <td valign="top" width="33%">
                      <div className="doc-section">
                        <h3>
                          <span className="octicon octicon-book"></span> Atom
                          Flight Manual
                        </h3>
                        <p>
                          The
                          <a
                            data-skip-pjax="yeahokiguess"
                            href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/"
                          >
                            Atom Flight Manual
                          </a>
                          covers everything from getting off the ground to
                          replacing the engine.
                          <a href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/">
                            Go here to read the one and only book on everything
                            Atom.
                          </a>
                        </p>
                        <p>
                          <a href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/">
                            <img
                              style="width: 200px"
                              src="assets/png/flight-manual-cover.png"
                            />
                          </a>
                        </p>
                      </div>
                    </td>
                    <td valign="top" width="33%">
                      <div className="doc-section">
                        <h3>
                          <span className="octicon octicon-gear"></span> API
                          Reference
                        </h3>
                        <p>
                          The
                          <a href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/api">
                            Atom API reference documentation
                          </a>
                          is automatically generated from the Atom source code.
                          Go here to see what tools you can use to build your
                          own plugins.
                        </p>
                        <a href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/api">
                          View all API docs
                        </a>
                      </div>
                    </td>
                    <td valign="top" width="33%">
                      <div className="doc-section">
                        <h3>
                          <span className="octicon octicon-comment-discussion"></span>
                          Atom Discussions
                        </h3>
                        <p>
                          The
                          <a href="https://web.archive.org/web/20221207004847/https://github.com/atom/atom/discussions">
                            Atom Discussions
                          </a>
                          is the place to discuss anything and everything Atom
                          related with the entire Atom community. If you have
                          problems or are looking for help, this is your place.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="footer-pad"></div>
      </div>

      <footer>
        <div className="footer">
          <div className="wrapper no-pad">
            <ul className="footer-left">
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://atom.io/releases">
                  Releases
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://flight-manual.atom.io/faq/">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004847/https://atom.io/contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer-right">
              <a href="https://web.archive.org/web/20221207004847/https://github.com/">
                <span className="octicon octicon-code"></span> with
                <span className="octicon octicon-heart"></span> by
                <span className="octicon octicon-logo-github"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
    </body>
  );
}
