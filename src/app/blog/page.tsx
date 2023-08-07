import Image from "next/image";
import Link from "next/link";
import "./main.css";
import "/public/assets/css/application.css";
import Annthurium from "/public/assets/png/annthurium.png";
import Asheren from "/public/assets/png/asheren.png";
import Jasonrudolph from "/public/assets/png/jasonrudolph.png";
import Kuychaco from "/public/assets/png/kuychaco.png";
import Nathansobo from "/public/assets/png/nathansobo.png";
import Rafeca from "/public/assets/png/rafeca.png";
import Sguthals from "/public/assets/png/sguthals.png";
import Smashwilson from "/public/assets/png/smashwilson.png";

import atomNightlyHeading from "/public/assets/png/atom-nightly-heading.png";

export default function Blog() {
  return (
    <body>
      <div className="footer-push">
        <div className="top-bar">
          <div className="wrapper">
            <ul className="navigation">
              <li>
                <h1>
                  <Link href="https://atom.io/" className="logo-small"></Link>
                </h1>
              </li>
              <li>
                <Link href="https://atom.io/packages">Packages</Link>
              </li>
              <li>
                <Link href="https://atom.io/themes">Themes</Link>
              </li>
              <li>
                <Link href="https://atom.io/docs">Documentation</Link>
              </li>
              <li>
                <Link href="https://blog.atom.io/" className="is-selected">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://discuss.atom.io/">Discuss</Link>
              </li>
            </ul>

            <div className="top-bar-right">
              <Link href="https://blog.atom.io/feed.xml" className="rss-link">
                <span className="octicon octicon-rss"></span> Subscribe
              </Link>
            </div>
          </div>
        </div>

        <div className="wrapper content-push">
          <div id="home">
            <ul className="posts">
              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/07/23/atom-1-39.html">
                    Atom 1.39
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> July 23,
                  2019
                  <Link
                    href="https://github.com/jasonrudolph"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="jasonrudolph"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Jasonrudolph}
                      sizes="
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=72 4x
                    "
                    />
                    jasonrudolph
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.39 speeds up find-and-replace operations by an order
                    of magnitude, improves loading performance for large,
                    single-line files, and upgrades Atom to Electron 3.1. Atom
                    1.40 beta brings richer integration with GitHub pull
                    requests, improved reliability for many common operations,
                    and continued enhancements to support for numerous
                    programming languages.
                  </p>

                  <Link href="https://blog.atom.io/2019/07/23/atom-1-39.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/06/21/introducing-atom-nightly-releases.html">
                    Introducing Atom Nightly Releases
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> June 21,
                  2019
                  <Link
                    href="https://github.com/rafeca"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="rafeca"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Rafeca}
                      sizes="
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=72 4x
                    "
                    />
                    rafeca
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    <Link href="https://atom.io/nightly">
                      <Image src={atomNightlyHeading} alt="Atom Nightly" />
                    </Link>
                  </p>

                  <p>
                    Today we’re excited to introduce
                    <Link href="https://atom.io/nightly">
                      Atom Nightly releases
                    </Link>
                    ! This new release channel gives you access to Atom’s latest
                    feature improvements and bug fixes each day as they are
                    merged into our
                    <code className="language-plaintext highlighter-rouge">
                      master
                    </code>
                    branch. If you want to have an influence on the future of
                    Atom, this release channel is for you.
                  </p>

                  <Link href="https://blog.atom.io/2019/06/21/introducing-atom-nightly-releases.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/06/11/atom-1-38.html">
                    Atom 1.38
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> June 11,
                  2019
                  <Link
                    href="https://github.com/nathansobo"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="nathansobo"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Nathansobo}
                      sizes="
                      https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=72 4x
                    "
                    />
                    nathansobo
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.38 includes some improvements to the GitHub package
                    and improvements to JS, ERB, Python, and JSON language
                    support. Atom 1.39 beta includes a new
                    <code className="language-plaintext highlighter-rouge">
                      ripgrep
                    </code>
                    -based project search backend, an upgrade to Electron 3.1,
                    and much improved loading times for multi-megabyte files
                    containing only a single line of text.
                  </p>

                  <Link href="https://blog.atom.io/2019/06/11/atom-1-38.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/05/12/atom-1-37.html">
                    Atom 1.37
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> May 12,
                  2019
                  <Link
                    href="https://github.com/rafeca"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="rafeca"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Rafeca}
                      sizes="
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=72 4x
                    "
                    />
                    rafeca
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.37 has shipped! This version introduces a complete
                    flow for handling review comments you’ve received on a pull
                    request and an experimental faster mode in fuzzy finder that
                    dramatically improves its performance.
                  </p>

                  <Link href="https://blog.atom.io/2019/05/12/atom-1-37.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/04/09/atom-1-36.html">
                    Atom 1.36
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> April 9,
                  2019
                  <Link
                    href="https://github.com/smashwilson"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="smashwilson"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Smashwilson}
                      sizes="
                      https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=72 4x
                    "
                    />
                    smashwilson
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.36 has shipped! Upgrade today to open single files in
                    large directories much faster, see pull request review
                    comments from GitHub, specify multiple wrap guides at once,
                    and more.
                  </p>

                  <Link href="https://blog.atom.io/2019/04/09/atom-1-36.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/03/12/atom-1-35.html">
                    Atom 1.35
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> March 12,
                  2019
                  <Link
                    href="https://github.com/annthurium"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="annthurium"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Annthurium}
                      sizes="
                      https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=72 4x
                    "
                    />
                    annthurium
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    With Atom 1.35 comes a fix for the recent Chrome
                    vulnerability, ability to view the full diff for pull
                    requests directly within Atom, and a variety of enhancements
                    and stability improvements.
                  </p>

                  <Link href="https://blog.atom.io/2019/03/12/atom-1-35.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2019/01/08/atom-1-34.html">
                    Atom 1.34
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> January 8,
                  2019
                  <Link
                    href="https://github.com/jasonrudolph"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="jasonrudolph"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Jasonrudolph}
                      sizes="
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=72 4x
                    "
                    />
                    jasonrudolph
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.34 is out! With this release, you’ll enjoy a host of
                    enhancements to help you craft the perfect commit, including
                    a faster diff view, the ability to preview all staged
                    changes, and support for commit message templates.
                  </p>

                  <Link href="https://blog.atom.io/2019/01/08/atom-1-34.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2018/12/12/facebook-retires-nuclide-extension.html">
                    Facebook retires Nuclide extension
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> December
                  12, 2018
                  <Link
                    href="https://github.com/asheren"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="asheren"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Asheren}
                      sizes="
                      https://avatars2.githubusercontent.com/asheren?v=3&amp;s=18 1x,
                      https://avatars2.githubusercontent.com/asheren?v=3&amp;s=36 2x,
                      https://avatars2.githubusercontent.com/asheren?v=3&amp;s=54 3x,
                      https://avatars2.githubusercontent.com/asheren?v=3&amp;s=72 4x
                    "
                    />
                    asheren
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    At this time, Facebook has decided to retire their open
                    source efforts on Nuclide, the Atom-IDE, and other
                    associated repos.
                  </p>

                  <Link href="https://blog.atom.io/2018/12/12/facebook-retires-nuclide-extension.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2018/11/28/atom-1-33.html">
                    Atom 1.33
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> November
                  28, 2018
                  <Link
                    href="https://github.com/kuychaco"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="kuychaco"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Kuychaco}
                      sizes="
                      https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=72 4x
                    "
                    />
                    kuychaco
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.33 is out! With this release, you’ll enjoy built-in
                    Rust support, improved discoverability for Git and GitHub
                    functionality, and faster performance for bracket matching.
                  </p>

                  <Link href="https://blog.atom.io/2018/11/28/atom-1-33.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <Link href="https://blog.atom.io/2018/11/14/github-package-uxr.html">
                    Usability Interviews for Atom
                  </Link>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> November
                  14, 2018
                  <Link
                    href="https://github.com/sguthals"
                    className="author-link"
                  >
                    <Image
                      className="avatar avatar-small"
                      alt="sguthals"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src={Sguthals}
                      sizes="
                      https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=72 4x
                    "
                    />
                    sguthals
                  </Link>
                </p>
                <div className="post markdown">
                  <p>
                    We want to make Atom better, and we need your help. We’ve
                    started conducting usability interviews where we can get
                    direct feedback from humans about how they work and how what
                    we build affects that workflow.
                  </p>

                  <Link href="https://blog.atom.io/2018/11/14/github-package-uxr.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </Link>
                </div>
              </li>
            </ul>

            <div className="pagination">
              <span>← Previous</span>

              <em>1</em>

              <Link href="https://blog.atom.io/page2">2</Link>

              <Link href="https://blog.atom.io/page3">3</Link>

              <Link href="https://blog.atom.io/page4">4</Link>

              <Link href="https://blog.atom.io/page5">5</Link>

              <Link href="https://blog.atom.io/page6">6</Link>

              <Link href="https://blog.atom.io/page7">7</Link>

              <Link href="https://blog.atom.io/page8">8</Link>

              <Link href="https://blog.atom.io/page9">9</Link>

              <Link href="https://blog.atom.io/page10">10</Link>

              <Link href="https://blog.atom.io/page11">11</Link>

              <Link href="https://blog.atom.io/page12">12</Link>

              <Link href="https://blog.atom.io/page13">13</Link>

              <Link href="https://blog.atom.io/page2">Next →</Link>

              <Link
                className="pagination-archive"
                href="https://blog.atom.io/archive/"
              >
                <span className="octicon octicon-calendar"></span> Archive
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-pad"></div>
      </div>

      <footer>
        <div className="footer">
          <div className="wrapper">
            <ul className="footer-left">
              <li>
                <Link href="https://github.com/site/terms">Terms of Use</Link>
              </li>
              <li>
                <Link href="https://atom.io/releases">Releases</Link>
              </li>
              <li>
                <Link href="https://atom.io/faq">FAQ</Link>
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
    </body>
  );
}
