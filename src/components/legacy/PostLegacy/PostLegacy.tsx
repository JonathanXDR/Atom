import { injectTextSegments } from '@/helpers/textHelper';
import { PostProps } from '@/types/PostProps';
import { CalendarIcon, ChevronRightIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PostLegacyProps {
  post: PostProps;
}

const PackageCardLegacy: React.FC<PostLegacyProps> = ({ post }) => {
  const description = injectTextSegments(post.description.paragraphs, false);

  return (
    <>
      <Box as="li" className="post">
        <Heading as="h2" className="post-name">
          <Link href="/blog2019/06/21/introducing-atom-nightly-releases.html">
            Introducing Atom Nightly Releases
          </Link>
        </Heading>
        <Text as="p" className="who-when">
          <CalendarIcon size={16} /> June 21, 2019
          <Link href="https://github.com/atom" className="author-link">
            <Image
              className="avatar avatar-small"
              alt="Atom"
              width="18"
              height="18"
              data-proofer-ignore="true"
              src="https://avatars.githubusercontent.com/atom"
              style={{
                verticalAlign: 'baseline',
              }}
              sizes="
                      https://avatars1.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars1.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars1.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars1.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
            />{' '}
            Atom
          </Link>
        </Text>
        <Box className="post markdown">
          <Text as="p">
            <Link href="https://atom.io/nightly">
              <Image src={atomNightlyHeading} alt="Atom Nightly" />
            </Link>
          </Text>

          <Text as="p">{description}</Text>

          <Link href="/blog2019/06/21/introducing-atom-nightly-releases.html">
            Read more <ChevronRightIcon size={16} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PackageCardLegacy;
