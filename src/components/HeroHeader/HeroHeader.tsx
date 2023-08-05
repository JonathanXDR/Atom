import Image from "next/image";
import Link from "next/link";
import React from "react";

import atomWordmark from "/public/assets/svg/atom-wordmark.svg";
import portalBlueSemi from "/public/assets/svg/portal-blue-semi.svg";
import portalBlue from "/public/assets/svg/portal-blue.svg";
import portalGreenSemi from "/public/assets/svg/portal-green-semi.svg";
import portalGreen from "/public/assets/svg/portal-green.svg";
import portalOrangeSemi from "/public/assets/svg/portal-orange-semi.svg";
import portalOrange from "/public/assets/svg/portal-orange.svg";
import portalRedSemi from "/public/assets/svg/portal-red-semi.svg";
import portalRed from "/public/assets/svg/portal-red.svg";
import portalYellowSemi from "/public/assets/svg/portal-yellow-semi.svg";
import portalYellow from "/public/assets/svg/portal-yellow.svg";

const HeroHeader: React.FC = () => {
  return (
    <header className="hero-header">
      <div className="hero-header-item hero-logo" aria-hidden="true">
        <div className="hero-logo-circles">
          <Image
            className="hero-logo-circle"
            src={portalRedSemi}
            alt="portal-red-semi"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalRed}
            alt="portal-red"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalOrangeSemi}
            alt="portal-orange-semi"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalOrange}
            alt="portal-orange"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalYellowSemi}
            alt="portal-yellow-semi"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalYellow}
            alt="portal-yellow"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalGreenSemi}
            alt="portal-green-semi"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalGreen}
            alt="portal-green"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalBlueSemi}
            alt="portal-blue-semi"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className="hero-logo-circle"
            src={portalBlue}
            alt="portal-blue"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <ul className="hero-header-item hero-download">
        <li>
          <Image
            className="logo-wordmark"
            src={atomWordmark}
            alt="atom-wordmark"
            style={{ width: "100%", height: "100%" }}
          />
        </li>
        <li>
          <span className="version">1.63</span>
          <Link href="/releases">Release notes</Link>
        </li>

        <li>
          <span className="platform">macOS</span>
          <span className="support">For macOS 10.10 or later</span>
        </li>
        <li>
          <Link
            href="/download/windows_x64"
            className="welcome-button js-download-button"
          >
            <span className="octicon octicon-move-down"></span>
            Download
          </Link>
        </li>
      </ul>

      <p className="hero-meta">
        <span className="hero-tos">
          By downloading, you agree to the{" "}
          <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
            Terms and Conditions
          </Link>
          .
        </span>
        <Link href="https://github.com/atom/atom/releases/latest">
          Other platforms
        </Link>
        <Link href="/beta">Try Atom Beta</Link>
        <Link href="/nightly">Try Atom Nightly</Link>
      </p>
    </header>
  );
};

export default HeroHeader;
