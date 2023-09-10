import CreditBadgeLegacy from '@/components/legacy/CreditBadgeLegacy/CreditBadgeLegacy';
import { LinkType } from '@/types/common/Link';
import { Box } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './FooterLegacy.css';
interface FooterLegacyProps {
  footer: LinkType[];
}

const FooterLegacy: React.FC<FooterLegacyProps> = ({ footer }) => {
  const pathname = usePathname();

  const exclusionRules: { [key: string]: string[] } = {
    '/': ['Contribute!'],
    '/blog': ['Privacy', 'Code of Conduct'],
    '/faq': ['Contribute!'],
    '/flight-manual': ['Contribute!'],
  };

  const shouldExcludeLink = (title: string) => {
    if (exclusionRules[pathname]) {
      return exclusionRules[pathname].includes(title);
    }
    return false;
  };

  return (
    <Box as="footer">
      <Box className="footer">
        <Box className="wrapper no-pad">
          <Box as="ul" className="footer-left">
            {footer.map((item: LinkType, index) => {
              if (shouldExcludeLink(item.title)) {
                return null;
              }
              return (
                <Box as="li" key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </Box>
              );
            })}
          </Box>

          <Box className="footer-right">
            <CreditBadgeLegacy />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLegacy;
