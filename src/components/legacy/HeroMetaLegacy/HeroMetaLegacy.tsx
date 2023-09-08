'use client';
import { Text } from '@primer/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './HeroMetaLegacy.css';

const HeroMetaLegacy: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Text as="p" className="hero-meta">
        <Text className="hero-tos">
          By downloading, you agree to the{' '}
          <Link href="https://docs.github.com/en/github/site-policy/github-open-source-applications-terms-and-conditions">
            Terms and Conditions
          </Link>
          .
        </Text>
        <Link
          href={
            pathname === '/nightly'
              ? 'https://github.com/atom/atom-nightly-releases/releases'
              : pathname === '/beta'
              ? 'https://github.com/atom/atom/releases'
              : 'https://github.com/atom/atom/releases/latest'
          }
        >
          Other platforms
        </Link>
        {pathname === '/nightly' || pathname === '/beta' ? (
          <Link href="/">Back to Atom Stable</Link>
        ) : (
          <>
            <Link href="/beta">Try Atom Beta</Link>
            <Link href="/nightly">Try Atom Nightly</Link>
          </>
        )}
      </Text>
    </>
  );
};

export default HeroMetaLegacy;
