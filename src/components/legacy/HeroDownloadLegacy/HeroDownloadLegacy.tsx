'use client';
import { DownloadProps } from '@/types/Hero/DownloadProps';
import * as octicons from '@primer/octicons-react';
import { Box, Octicon, OcticonProps, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import './HeroDownloadLegacy.css';
import atomWordmark from '/public/assets/svg/atom-wordmark.svg';

interface HeroDownloadLegacyProps {
  downloads: DownloadProps[];
}

const HeroDownloadLegacy: React.FC<HeroDownloadLegacyProps> = ({
  downloads,
}) => {
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

        {downloads?.map((download, index) => (
          <Box as="li" key={index}>
            {download.description &&
              download.description.paragraphs.map((paragraph, index) => (
                <Text className={paragraph.class} key={index}>
                  {paragraph.text}
                </Text>
              ))}

            {download.links &&
              download.links.map((link, index) => {
                const icon =
                  link.leadingIcon &&
                  (octicons[
                    link.leadingIcon as keyof typeof octicons
                  ] as React.ComponentType<OcticonProps>);
                return (
                  <Link href={link.url} className={link.class} key={index}>
                    {icon && <Octicon icon={icon} size={16} />}
                    {link.title}
                  </Link>
                );
              })}
          </Box>
        ))}

        {/* <Box as="li">
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
        </Box> */}
      </Box>
    </>
  );
};

export default HeroDownloadLegacy;
