import { getImageDimensions } from '@/helpers/imageHelper';
import { injectTextSegments } from '@/helpers/textHelper';
import { PostProps } from '@/types/PostProps';
import { CalendarIcon, ChevronRightIcon } from '@primer/octicons-react';
import { Avatar, Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface PostLegacyProps {
  post: PostProps;
}

const PostLegacy: React.FC<PostLegacyProps> = ({ post }) => {
  const [dimensions, setDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    const fetchDimensions = async () => {
      const dimensions = await getImageDimensions(
        post?.image?.url || '/assets/gif/octocat-spinner-128.gif'
      );
      setDimensions(dimensions);
    };

    fetchDimensions();
  }, [post?.image?.url]);

  const description = injectTextSegments(post.description.paragraphs, false);

  function createBlogPostUrl(date: string, title: string): string {
    const formattedDate = date.replace(/-/g, '/');
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    return `/blog/${formattedDate}/${slug}`;
  }

  return (
    <>
      <Box as="li" className="post">
        <Heading as="h2" className="post-name">
          <Link
            href={createBlogPostUrl(
              post.date.toString(),
              post.title.text || ''
            )}
          >
            {post.title.text}
          </Link>
        </Heading>
        <Text
          as="p"
          className="who-when"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <CalendarIcon size={16} />{' '}
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <Link
            href={`/${post.user.username}`}
            className="author-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Avatar square src={post.user.avatar.url} />
            {post.user.username}
          </Link>
        </Text>
        <Box className="post markdown">
          {post.image && dimensions.width && dimensions.height && (
            <Text as="p">
              {post.image.links?.map((link) => (
                <Link href={link.url} key={link.url}>
                  <Image
                    width={dimensions.width}
                    height={dimensions.height}
                    src={
                      post.image?.url || '/assets/gif/octocat-spinner-128.gif'
                    }
                    alt={post.image?.alt || 'octocat-spinner'}
                  />
                </Link>
              ))}
            </Text>
          )}

          <Text as="p">{description}</Text>

          <Link
            href={createBlogPostUrl(
              post.date.toString(),
              post.title.text || ''
            )}
          >
            Read more <ChevronRightIcon size={16} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PostLegacy;
