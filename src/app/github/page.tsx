import Image from "next/image";
import Link from "next/link";
import "./main.css";
import "/public/assets/css/github.css";
import githubBottomStars from "/public/assets/svg/github-bottom-stars.svg";
import githubBottom from "/public/assets/svg/github-bottom.svg";
import githubOctonaut from "/public/assets/svg/github-octonaut.svg";
import githubPlanet1 from "/public/assets/svg/github-planet-1.svg";
import githubPlanet2 from "/public/assets/svg/github-planet-2.svg";
import githubPlanet3 from "/public/assets/svg/github-planet-3.svg";
import githubRocket from "/public/assets/svg/github-rocket.svg";
import githubSwoosh from "/public/assets/svg/github-swoosh.svg";

export default function GitHub() {
  return (
    <body>
      <section className="section hero">
        <div className="bg" aria-hidden="true">
          <Image
            className="bg-item bg-item--rocket"
            src={githubRocket}
            alt="github-rocket"
          />
          <Image
            className="bg-item bg-item--planet-3"
            src={githubPlanet3}
            alt="github-planet-3"
          />
          <Image
            className="bg-item bg-item--planet-2"
            src={githubPlanet2}
            alt="github-planet-2"
          />
          <Image
            className="bg-item bg-item--octonaut"
            src={githubOctonaut}
            alt="github-octonaut"
          />
          <Image
            className="bg-item bg-item--planet-1"
            src={githubPlanet1}
            alt="github-planet-1"
          />
        </div>
        <div className="section-content">
          <header className="header">
            <div className="logos">
              <svg
                className="icon-svg icon-atom"
                viewBox="0 0 64 64"
                aria-label="Atom"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g transform="translate(1.640625, 4.170573)">
                    <path
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      d="M41.1546628,24.0016159 C48.1314158,38.3143746 49.5709562,51.8023702 44.283365,54.4984514 C38.8313273,57.2797075 28.2924076,47.5351914 20.7438863,32.7341528 C13.195365,17.9331141 11.4960833,3.6802309 16.9481211,0.899818142 C19.3220556,-0.311183594 22.6607435,0.853435764 26.2962786,3.77468229"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      d="M6.63099349,33.1397878 C2.5552474,31.0222214 0.181312934,28.4720339 0.317930122,25.8366714 C0.635860243,19.7243173 14.3448047,15.4697882 30.9370464,16.3325004 C47.5292882,17.196056 60.7221233,22.8504896 60.4041931,28.9628438 C60.2667326,31.5982062 57.6406467,33.887809 53.3675647,35.5710677"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      d="M24.4991723,49.9251489 C20.043934,53.141556 16.0786623,54.3162951 13.5984701,52.7064049 C8.46436241,49.3753069 11.6335438,35.3762617 20.6772643,21.4379353 C29.7209848,7.50045226 41.2145382,-1.0979974 46.3486458,2.23394401 C48.73523,3.78227214 49.3272378,7.63538281 48.3692309,12.7155182"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M34.226822,26.9194891 C34.6577565,28.9139314 33.3902526,30.879701 31.3958103,31.3106354 C29.4013681,31.7415699 27.4355985,30.474066 27.0046641,28.4796237 C26.5745729,26.4851814 27.8412335,24.5194119 29.8356758,24.0884774 C31.8292747,23.657543 33.7950443,24.9250469 34.226822,26.9194891"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="logos-plus">+</span>
              <span
                className="octicon octicon-mark-github"
                role="img"
                aria-label="GitHub"
              ></span>
            </div>

            <h1 className="tagline">GitHub for Atom</h1>
          </header>

          <main className="features">
            <div className="video-container">
              <video
                className="video"
                poster="assets/png/github-atom.png"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="assets/videos/github-for-atom.mp4"
                  type="video/mp4"
                />
                <track kind="captions" />
              </video>
            </div>

            <div className="features-description">
              <p>
                The GitHub package brings Git and GitHub integration right
                inside your editor! Now you can switch or create
                <strong>branches</strong>, <strong>stage</strong> changes,
                <strong>commit</strong>, <strong>pull</strong> and
                <strong>push</strong>, <strong>resolve merge conflicts</strong>,
                view and checkout <strong>pull requests</strong> and more.
              </p>

              <p>
                Visit the 🚀
                <Link
                  className="features-button"
                  href="https://flight-manual.atom.io/using-atom/sections/github-package/"
                >
                  documentation
                </Link>
                to learn how to use all the features.
              </p>
            </div>
          </main>
        </div>
      </section>

      <section className="section details">
        <div className="section-content columns">
          <div className="column">
            <h2>Install</h2>
            <p>
              The GitHub package comes already bundled with
              <Link href="https://atom.io/">Atom</Link>, so there is nothing
              extra to install.&nbsp;🎉
            </p>
          </div>

          <div className="column">
            <h2>Feedback</h2>
            <p>
              We would love to hear your
              <Link href="https://github.com/atom/atom/discussions">
                feedback
              </Link>
              . If you run into any problems, please
              <Link href="https://github.com/atom/github/issues">
                open an issue
              </Link>
              . For contributions, take a look at the
              <Link href="https://github.com/atom/github/blob/master/CONTRIBUTING.md">
                contribution guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <footer className="section footer">
        <div className="bg" aria-hidden="true">
          <Image
            className="bg-item bg-item--bottom-stars"
            src={githubBottomStars}
            alt="github-bottom-stars"
          />
          <Image
            className="bg-item bg-item--swoosh"
            src={githubSwoosh}
            alt="github-swoosh"
          />
          <Image
            className="bg-item bg-item--bottom"
            src={githubBottom}
            alt="github-bottom"
          />
        </div>
        <div className="section-content community columns">
          <div className="column">
            <h2>Community packages</h2>
            <p>
              We also would like to point out all the
              <Link href="https://atom.io/packages/search?utf8=%E2%9C%93&amp;q=keyword:git">
                amazing packages
              </Link>
              the Atom community has already created.
            </p>
            <p>
              Give them a try to further improve your Git workflows.&nbsp;🙌
            </p>
          </div>
          <div className="column">
            <p>Here just a few to check out:</p>
            <ul>
              <li>
                <Link href="https://atom.io/packages/git-plus">git-plus</Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/git-control">
                  git-control
                </Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/git-time-machine">
                  git-time-machine
                </Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/git-history">
                  git-history
                </Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/git-blame">git-blame</Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/context-git">
                  context-git
                </Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/simple-git">
                  simple-git
                </Link>
              </li>
              <li>
                <Link href="https://atom.io/packages/split-diff">
                  split-diff
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-content love">
          <Link className="love" href="https://github.com/">
            <span
              className="octicon octicon-code"
              role="img"
              aria-label="Made"
            ></span>{" "}
            with
            <span
              className="octicon octicon-heart"
              role="img"
              aria-label="Love"
            ></span>{" "}
            by
            <span
              className="octicon octicon-logo-github"
              role="img"
              aria-label="GitHub"
            ></span>
          </Link>
        </div>
      </footer>
    </body>
  );
}
