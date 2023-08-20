'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
import {
  BookIcon,
  CommentDiscussionIcon,
  GearIcon,
  PlayIcon,
} from '@primer/octicons-react';
import Image from 'next/image';
import Link from 'next/link';
import './main.css';
import '/public/assets/css/application.css';
import flightManualCover from '/public/assets/png/flight-manual-cover.png';

export default function Docs() {
  return (
    <>
      <div className="footer-push">
        <NavItemLegacy />

        <div id="js-pjax-container">
          <div id="docs-pjax-container">
            <div className="wrapper documents content-push wide atom-doc-index">
              <h2 className="center index-title">Atom Documentation</h2>
              <h3 className="center subheader">Current Version: v1.63.1</h3>

              <div className="training-video-cta">
                New to Atom? Check out the getting started video.
                <span className="training-video-link">
                  <Link
                    href="https://www.youtube.com/watch?v=U5POoGSrtGg"
                    target="_blank"
                  >
                    <span className="training-video-play">
                      <PlayIcon size={16} />
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
                          <BookIcon size={16} /> Atom Flight Manual
                        </h3>
                        <p>
                          The
                          <Link
                            data-skip-pjax="yeahokiguess"
                            href="https://flight-manual.atom.io/"
                          >
                            {' '}
                            Atom Flight Manual{' '}
                          </Link>
                          covers everything from getting off the ground to
                          replacing the engine.
                          <Link href="https://flight-manual.atom.io/">
                            {' '}
                            Go here to read the one and only book on everything
                            Atom.
                          </Link>
                        </p>
                        <p>
                          <Link href="https://flight-manual.atom.io/">
                            <Image
                              style={{
                                width: '200px',
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
                          <GearIcon size={16} /> API Reference
                        </h3>
                        <p>
                          The
                          <Link href="https://flight-manual.atom.io/api">
                            {' '}
                            Atom API reference documentation{' '}
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
                          <CommentDiscussionIcon size={16} /> Atom Discussions
                        </h3>
                        <p>
                          The
                          <Link href="https://github.com/atom/atom/discussions">
                            {' '}
                            Atom Discussions{' '}
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
    </>
  );
}
