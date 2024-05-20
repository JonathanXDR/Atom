"use client";
import FooterItem from "@/components/Footer/Footer";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import NavItem from "@/components/Navigation/Navigation";
import Link from "next/link";
import "./main.css";

export default function Beta() {
  return (
    <body className="is-responsive">
      <div className="footer-push">
        <NavItem />
        <div id="js-pjax-container">
          <div className="welcome welcome-beta">
            <section className="section section--hero">
              <div className="wrapper">
                <HeroHeader />
              </div>
            </section>
            <section className="section section--features">
              <div className="wrapper wrapper--beta">
                <h3>Try Atom Beta</h3>

                <p>
                  Want to be on the bleeding edge? The Beta channel contains new
                  features and bug fixes before they land on the{" "}
                  <Link href="/">stable channel</Link>. It is intended for
                  developers and early adopters. See the{" "}
                  <Link href="/blog2015/10/21/introducing-the-atom-beta-channel.html">
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

      <FooterItem />
    </body>
  );
}
