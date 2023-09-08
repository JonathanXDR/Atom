'use client';
import { DownloadIcon } from '@primer/octicons-react';
import { Box, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './HeroDownloadLegacy.css';
import atomWordmark from '/public/assets/svg/atom-wordmark.svg';

const HeroDownloadLegacy: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <Box as="ul" className="hero-header-item hero-download">
        <Box as="li">
          <Image
            className="logo-wordmark"
            src={atomWordmark}
            alt="atom-wordmark"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box as="li">
          <Text className="version">
            {pathname === '/nightly'
              ? 'Nightly'
              : pathname === '/beta'
              ? 'BETA'
              : '1.63'}
          </Text>
          <Link href="/releases">Release notes</Link>
        </Box>

        <Box as="li">
          <Text className="platform">macOS</Text>
          <Text className="support">For macOS 10.10 or later</Text>
        </Box>
        <Box as="li">
          <Link
            href={
              pathname === '/nightly'
                ? '/download/mac?channel=nightly'
                : pathname === '/beta'
                ? '/download/mac?channel=beta'
                : '/download/mac'
            }
            className="welcome-button"
          >
            <DownloadIcon size={16} />
            Download
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default HeroDownloadLegacy;
