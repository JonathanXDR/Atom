"use client";
import FooterItem from "@/components/Footer/Footer";
import NavItem from "@/components/Navigation/Navigation";
import Image from "next/image";
import Link from "next/link";
import "./main.css";
import flightManualCover from "/public/assets/png/flight-manual-cover.png";

export default function Docs() {
  return (
    <body>
      <div className="footer-push">
        <NavItem />

        <div id="js-pjax-container">
          <div id="docs-pjax-container">
            <div className="wrapper documents content-push wide atom-doc-index">
              <h2 className="center index-title">Atom Documentation</h2>
              <h3 className="center subheader">Current Version: v1.63.1</h3>

              <div className="training-video-cta">
                New to Atom? Check out the getting started video.{" "}
                <span className="training-video-link">
                  <Link
                    href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                    target="_blank"
                  >
                    <span className="training-video-play">
                      <span className="octicon octicon-playback-play"></span>
                    </span>{" "}
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
                            href="/flight-manual/"
                          >
                            {" "}
                            Atom Flight Manual{" "}
                          </Link>
                          covers everything from getting off the ground to
                          replacing the engine.
                          <Link href="/flight-manual/">
                            {" "}
                            Go here to read the one and only book on everything
                            Atom.
                          </Link>
                        </p>
                        <p>
                          <Link href="/flight-manual/">
                            <Image
                              style={{
                                width: "200px",
                                height: "auto",
                              }}
                              src={flightManualCover}
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
                          <Link href="/flight-manual/api">
                            {" "}
                            Atom API reference documentation{" "}
                          </Link>
                          is automatically generated from the Atom source code.
                          Go here to see what tools you can use to build your
                          own plugins.
                        </p>
                        <Link href="/flight-manual/api">View all API docs</Link>
                      </div>
                    </td>
                    <td valign="top" width="33%">
                      <div className="doc-section">
                        <h3>
                          <span className="octicon octicon-comment-discussion"></span>{" "}
                          Atom Discussions
                        </h3>
                        <p>
                          The
                          <Link href="https://github.com/atom/atom/discussions">
                            {" "}
                            Atom Discussions{" "}
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

      <FooterItem />

      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
    </body>
  );
}
