"use client";
import FooterItem from "@/components/FooterItem/FooterItem";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import NavItem from "@/components/NavItem/NavItem";
import Link from "next/link";
import "./main.css";

export default function Nightly() {
  return (
    <body className="is-responsive">
      <div className="footer-push">
        <NavItem />
        <div id="js-pjax-container">
          <div className="welcome welcome-nightly">
            <section className="section section--hero">
              <div className="wrapper">
                <HeroHeader />
              </div>
            </section>
            <section className="section section--features">
              <div className="wrapper wrapper--nightly">
                <h3>Try Atom Nightly✨</h3>

                <p>
                  Want to never wait for new improvements? The Nightly channel
                  contains new features and bug fixes as soon as they get merged
                  into master. It is intended for developers and very early
                  adopters. See the{" "}
                  <Link href="/blog2019/06/21/introducing-atom-nightly-releases.html">
                    blog post{" "}
                  </Link>
                  for more information.
                </p>

                <div className="features-item">
                  <span className="mega-octicon octicon-rocket"></span>
                  <p>
                    Keep your current Atom configuration when using Atom Nightly
                  </p>
                </div>
                <div className="features-item">
                  <span className="mega-octicon octicon-calendar"></span>
                  <p>
                    New Nightly releases are available every few days and
                    installed automatically
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

      <FooterItem />
    </body>
  );
}
