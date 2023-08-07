import "./main.css";
import "/public/assets/css/application.css";

export default function Blog() {
  return (
    <body>
      <div className="footer-push">
        <div className="top-bar">
          <div className="wrapper">
            <ul className="navigation">
              <li>
                <h1 title="Atom: A hackable text editor for the 21st Century">
                  <a
                    href="https://web.archive.org/web/20221207004825/https://atom.io/"
                    className="logo-small"
                  ></a>
                </h1>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/packages">
                  Packages
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/themes">
                  Themes
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/docs">
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20221207004825/https://blog.atom.io/"
                  className="is-selected"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://discuss.atom.io/">
                  Discuss
                </a>
              </li>
            </ul>

            <div className="top-bar-right">
              <a
                href="https://web.archive.org/web/20221207004825/https://blog.atom.io/feed.xml"
                className="rss-link"
              >
                <span className="octicon octicon-rss"></span> Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper content-push">
          <div id="home">
            <ul className="posts">
              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/07/23/atom-1-39.html">
                    Atom 1.39
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> July 23,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/jasonrudolph"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="jasonrudolph"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/jasonrudolph.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=72 4x
                    "
                    />
                    jasonrudolph
                  </a>
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

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/07/23/atom-1-39.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/06/21/introducing-atom-nightly-releases.html">
                    Introducing Atom Nightly Releases
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> June 21,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/rafeca"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="rafeca"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/rafeca.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=72 4x
                    "
                    />
                    rafeca
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    <a href="https://web.archive.org/web/20221207004825/https://atom.io/nightly">
                      <img
                        src="assets/png/atom-nightly-heading.png"
                        alt="Atom Nightly"
                      />
                    </a>
                  </p>

                  <p>
                    Today we’re excited to introduce
                    <a href="https://web.archive.org/web/20221207004825/https://atom.io/nightly">
                      Atom Nightly releases
                    </a>
                    ! This new release channel gives you access to Atom’s latest
                    feature improvements and bug fixes each day as they are
                    merged into our
                    <code className="language-plaintext highlighter-rouge">
                      master
                    </code>
                    branch. If you want to have an influence on the future of
                    Atom, this release channel is for you.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/06/21/introducing-atom-nightly-releases.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/06/11/atom-1-38.html">
                    Atom 1.38
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> June 11,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/nathansobo"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="nathansobo"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/nathansobo.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/nathansobo?v=3&amp;s=72 4x
                    "
                    />
                    nathansobo
                  </a>
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

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/06/11/atom-1-38.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/05/12/atom-1-37.html">
                    Atom 1.37
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> May 12,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/rafeca"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="rafeca"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/rafeca.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/rafeca?v=3&amp;s=72 4x
                    "
                    />
                    rafeca
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.37 has shipped! This version introduces a complete
                    flow for handling review comments you’ve received on a pull
                    request and an experimental faster mode in fuzzy finder that
                    dramatically improves its performance.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/05/12/atom-1-37.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/04/09/atom-1-36.html">
                    Atom 1.36
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> April 9,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/smashwilson"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="smashwilson"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/smashwilson.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/smashwilson?v=3&amp;s=72 4x
                    "
                    />
                    smashwilson
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.36 has shipped! Upgrade today to open single files in
                    large directories much faster, see pull request review
                    comments from GitHub, specify multiple wrap guides at once,
                    and more.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/04/09/atom-1-36.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/03/12/atom-1-35.html">
                    Atom 1.35
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> March 12,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/annthurium"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="annthurium"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/annthurium.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/annthurium?v=3&amp;s=72 4x
                    "
                    />
                    annthurium
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    With Atom 1.35 comes a fix for the recent Chrome
                    vulnerability, ability to view the full diff for pull
                    requests directly within Atom, and a variety of enhancements
                    and stability improvements.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/03/12/atom-1-35.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/01/08/atom-1-34.html">
                    Atom 1.34
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> January 8,
                  2019
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/jasonrudolph"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="jasonrudolph"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/jasonrudolph.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/jasonrudolph?v=3&amp;s=72 4x
                    "
                    />
                    jasonrudolph
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.34 is out! With this release, you’ll enjoy a host of
                    enhancements to help you craft the perfect commit, including
                    a faster diff view, the ability to preview all staged
                    changes, and support for commit message templates.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2019/01/08/atom-1-34.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/12/12/facebook-retires-nuclide-extension.html">
                    Facebook retires Nuclide extension
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> December
                  12, 2018
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/asheren"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="asheren"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/asheren.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars2.githubusercontent.com/asheren?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars2.githubusercontent.com/asheren?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars2.githubusercontent.com/asheren?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars2.githubusercontent.com/asheren?v=3&amp;s=72 4x
                    "
                    />
                    asheren
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    At this time, Facebook has decided to retire their open
                    source efforts on Nuclide, the Atom-IDE, and other
                    associated repos.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/12/12/facebook-retires-nuclide-extension.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/11/28/atom-1-33.html">
                    Atom 1.33
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> November
                  28, 2018
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/kuychaco"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="kuychaco"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/kuychaco.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars3.githubusercontent.com/kuychaco?v=3&amp;s=72 4x
                    "
                    />
                    kuychaco
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    Atom 1.33 is out! With this release, you’ll enjoy built-in
                    Rust support, improved discoverability for Git and GitHub
                    functionality, and faster performance for bracket matching.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/11/28/atom-1-33.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>

              <li className="post">
                <h2 className="post-name">
                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/11/14/github-package-uxr.html">
                    Usability Interviews for Atom
                  </a>
                </h2>
                <p className="who-when">
                  <span className="octicon octicon-calendar"></span> November
                  14, 2018
                  <a
                    href="https://web.archive.org/web/20221207004825/https://github.com/sguthals"
                    className="author-link"
                  >
                    <img
                      className="avatar avatar-small"
                      alt="sguthals"
                      width="18"
                      height="18"
                      data-proofer-ignore="true"
                      src="assets/png/sguthals.png"
                      srcset="
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=18 1x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=36 2x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=54 3x,
                      https://web.archive.org/web/20221207004825im_/https://avatars1.githubusercontent.com/sguthals?v=3&amp;s=72 4x
                    "
                    />
                    sguthals
                  </a>
                </p>
                <div className="post markdown">
                  <p>
                    We want to make Atom better, and we need your help. We’ve
                    started conducting usability interviews where we can get
                    direct feedback from humans about how they work and how what
                    we build affects that workflow.
                  </p>

                  <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/2018/11/14/github-package-uxr.html">
                    Read more{" "}
                    <span className="octicon octicon-chevron-right"></span>
                  </a>
                </div>
              </li>
            </ul>

            <div className="pagination">
              <span>← Previous</span>

              <em>1</em>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page2">
                2
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page3">
                3
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page4">
                4
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page5">
                5
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page6">
                6
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page7">
                7
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page8">
                8
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page9">
                9
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page10">
                10
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page11">
                11
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page12">
                12
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page13">
                13
              </a>

              <a href="https://web.archive.org/web/20221207004825/https://blog.atom.io/page2">
                Next →
              </a>

              <a
                className="pagination-archive"
                href="https://web.archive.org/web/20221207004825/https://blog.atom.io/archive/"
              >
                <span className="octicon octicon-calendar"></span> Archive
              </a>
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
                <a href="https://web.archive.org/web/20221207004825/https://github.com/site/terms">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/releases">
                  Releases
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://web.archive.org/web/20221207004825/https://atom.io/contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer-right">
              <a href="https://web.archive.org/web/20221207004825/https://github.com/">
                <span className="octicon octicon-code"></span> with
                <span className="octicon octicon-heart"></span> by
                <span className="octicon octicon-logo-github"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
