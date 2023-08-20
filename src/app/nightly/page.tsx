"use client";
import FooterItem from "@/components/FooterItemLegacy/FooterItemLegacy";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import NavItemLegacy from "@/components/NavItemLegacy/NavItemLegacy";
import { BugIcon, CalendarIcon, RocketIcon } from "@primer/octicons-react";
import Link from "next/link";
import "./main.css";
import "/public/assets/css/application.css";

export default function Nightly() {
  return (
    <div className="is-responsive">
      <div className="footer-push">
        <NavItemLegacy />
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
                  <div
                    className="mega-octicon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RocketIcon size={24} />
                  </div>
                  <p>
                    Keep your current Atom configuration when using Atom Nightly
                  </p>
                </div>
                <div className="features-item">
                  <div
                    className="mega-octicon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarIcon size={24} />
                  </div>
                  <p>
                    New Nightly releases are available every few days and
                    installed automatically
                  </p>
                </div>
                <div className="features-item">
                  <div
                    className="mega-octicon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BugIcon size={24} />
                  </div>
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
    </div>
  );
}
