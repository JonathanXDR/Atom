import {
  CodeIcon,
  HeartFillIcon,
  LogoGithubIcon,
} from "@primer/octicons-react";
import { Octicon } from "@primer/react";
import Link from "next/link";

const CreditBadge: React.FC = () => {
  return (
    <Link className="love" href="https://github.com/">
      {/* <span className="octicon octicon-code"></span> */}
      <Octicon icon={CodeIcon} aria-label="Made" size={16} /> with{" "}
      {/* <span className="octicon octicon-heart"></span> */}
      <Octicon icon={HeartFillIcon} aria-label="Love" size={16} /> by{" "}
      {/* <span className="octicon octicon-logo-github"></span> */}
      <Octicon
        icon={LogoGithubIcon}
        aria-label="GitHub"
        size={16}
        sx={{
          top: "0",
        }}
      />
    </Link>
  );
};

export default CreditBadge;
