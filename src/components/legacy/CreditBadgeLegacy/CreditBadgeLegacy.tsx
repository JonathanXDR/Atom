import {
  CodeIcon,
  HeartFillIcon,
  LogoGithubIcon,
} from '@primer/octicons-react';
import { Octicon } from '@primer/react';
import Link from 'next/link';
// import './CreditBadgeLegacy.css';

const CreditBadgeLegacyLegacy: React.FC = () => {
  return (
    <Link className="love" href="https://github.com/">
      <Octicon icon={CodeIcon} aria-label="Made" size={16} /> with{' '}
      <Octicon icon={HeartFillIcon} aria-label="Love" size={16} /> by{' '}
      <Octicon
        icon={LogoGithubIcon}
        aria-label="GitHub"
        size={16}
        sx={{
          top: '0',
        }}
      />
    </Link>
  );
};

export default CreditBadgeLegacyLegacy;
