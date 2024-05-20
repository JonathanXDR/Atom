import { Box } from "@primer/react";
import Image from "next/image";
import "./HeroLogoLegacy.css";
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

const HeroLogoLegacy: React.FC = () => {
  return (
    <>
      <Box className="hero-header-item hero-logo" aria-hidden="true">
        <Box className="hero-logo-circles">
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
        </Box>
      </Box>
    </>
  );
};

export default HeroLogoLegacy;
