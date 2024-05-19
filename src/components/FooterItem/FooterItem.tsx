import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CreditBadge from "../CreditBadge/CreditBadge";

export interface LinkProps {
  link: {
    title: string;
    class?: string;
    url: string;
    leadingIcon?: string;
    trailingIcon?: string;
  };
}

const FooterItem: React.FC = () => {
  const pathname = usePathname();

  const data: LinkProps[] = [
    {
      link: {
        title: "Terms of Use",
        url: "https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions",
      },
    },
    {
      link: {
        title: "Privacy",
        url: "https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement",
      },
    },
    {
      link: {
        title: "Code of Conduct",
        url: "https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md",
      },
    },
    {
      link: {
        title: "Releases",
        url: "/releases",
      },
    },
    {
      link: {
        title: "FAQ",
        url: "/faq",
      },
    },
    {
      link: {
        title: "Contact",
        url: "/contact",
      },
    },
    {
      link: {
        title: "Contribute!",
        url: "https://github.com/atom/flight-manual.atom.io/blob/master/CONTRIBUTING.md",
      },
    },
  ];

  const displayConditions: { [key: string]: (path: string) => boolean } = {
    "Contribute!": (path) =>
      path.startsWith("/flight-manual") || path.startsWith("/faq"),
    Privacy: (path) => !path.startsWith("/blog"),
    "Code of Conduct": (path) => !path.startsWith("/blog"),
  };

  const shouldDisplay = (title: string, path: string) => {
    if (displayConditions[title]) {
      return displayConditions[title](path);
    }
    return true;
  };

  const filteredData = data.filter((item) =>
    shouldDisplay(item.link.title, pathname),
  );

  return (
    <footer>
      <div className="footer">
        <div className={`wrapper ${pathname === "/blog" ? "" : "no-pad"}`}>
          <ul className="footer-left">
            {filteredData.map((item: LinkProps, index) => (
              <>
                <li key={index}>
                  <Link href={item.link.url}>{item.link.title}</Link>
                </li>{" "}
              </>
            ))}
          </ul>

          <div className="footer-right">
            <CreditBadge />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterItem;
