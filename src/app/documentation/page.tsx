import Image from "next/image";
import Link from "next/link";
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
                  <Link href="https://atom.io/" className="logo-small"></Link>
                </h1>
              </li>
              <li>
                <Link className="" href="https://atom.io/packages">
                  Packages
                </Link>
              </li>
              <li>
                <Link className="" href="https://atom.io/themes">
                  Themes
                </Link>
              </li>
              <li>
                <Link className="is-selected" href="https://atom.io/docs">
                  Documentation
                </Link>
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
              <Link href="https://atom.io/login?last_url=%2Fdocs">
                <span className="octicon octicon-log-in"></span> Sign in
              </Link>
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
                  <Link
                    href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                    target="_blank"
                  >
                    <span className="training-video-play">
                      <span className="octicon octicon-playback-play"></span>
                    </span>
                    Play video
                  </Link>
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
                          <Link
                            data-skip-pjax="yeahokiguess"
                            href="https://flight-manual.atom.io/"
                          >
                            Atom Flight Manual
                          </Link>
                          covers everything from getting off the ground to
                          replacing the engine.
                          <Link href="https://flight-manual.atom.io/">
                            Go here to read the one and only book on everything
                            Atom.
                          </Link>
                        </p>
                        <p>
                          <Link href="https://flight-manual.atom.io/">
                            <Image
                              style={{
                                width: "200px",
                              }}
                              src="assets/png/flight-manual-cover.png"
                              alt="flight-manual-cover"
                            />
                          </Link>
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
                          <Link href="https://flight-manual.atom.io/api">
                            Atom API reference documentation
                          </Link>
                          is automatically generated from the Atom source code.
                          Go here to see what tools you can use to build your
                          own plugins.
                        </p>
                        <Link href="https://flight-manual.atom.io/api">
                          View all API docs
                        </Link>
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
                          <Link href="https://github.com/atom/atom/discussions">
                            Atom Discussions
                          </Link>
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
                <Link href="https://atom.io/releases">Releases</Link>
              </li>
              <li>
                <Link href="https://flight-manual.atom.io/faq/">FAQ</Link>
              </li>
              <li>
                <Link href="https://atom.io/contact">Contact</Link>
              </li>
            </ul>

            <div className="footer-right">
              <Link href="https://github.com/">
                <span className="octicon octicon-code"></span> with
                <span className="octicon octicon-heart"></span> by
                <span className="octicon octicon-logo-github"></span>
              </Link>
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
