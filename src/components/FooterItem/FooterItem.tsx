import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CreditBadge from "../CreditBadge/CreditBadge";

const FooterItem: React.FC = () => {
  const pathname = usePathname();
  return (
    <footer>
      <div className="footer">
        <div className="wrapper no-pad">
          <ul className="footer-left">
            <li>
              <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
                Terms of Use
              </Link>
            </li>{" "}
            {pathname !== "/blog" && (
              <>
                <li>
                  <Link href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement">
                    Privacy
                  </Link>
                </li>{" "}
                <li>
                  <Link href="https://github.com/atom/atom/blob/master/CODE_OF_CONDUCT.md">
                    Code of Conduct
                  </Link>
                </li>{" "}
              </>
            )}
            <li>
              <Link href="/releases">Releases</Link>
            </li>{" "}
            <li>
              <Link href="/faq">FAQ</Link>
            </li>{" "}
            <li>
              <Link href="/contact">Contact</Link>
            </li>{" "}
            {pathname === "/faq" ||
              (pathname === "/flight-manual" && (
                <li>
                  <Link href="https://github.com/atom/flight-manual.atom.io/blob/master/CONTRIBUTING.md">
                    Contribute!
                  </Link>
                </li>
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
