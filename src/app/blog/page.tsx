'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PostLegacy from '@/components/legacy/PostLegacy/PostLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import posts from '@/data/posts.json';
import { CalendarIcon } from '@primer/octicons-react';
import { Box, Button, PageLayout, Pagination } from '@primer/react';

export default function Blog() {
  return (
    <>
      <PageLayout containerWidth="full" padding="none">
        <PageLayout.Header
          sx={{
            marginBottom: 6,
          }}
        >
          <NavLegacy nav={nav} />
        </PageLayout.Header>
        <PageLayout.Content padding="normal" width="large">
          <Box as="ul" className="posts">
            {posts.map((post) => (
              <PostLegacy post={post} key={post.title} />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 4,
            }}
          >
            <Pagination
              pageCount={13}
              currentPage={1}
              onPageChange={(e) => e.preventDefault()}
            />

            <Button
              as="a"
              href="/blogarchive"
              variant="invisible"
              leadingVisual={CalendarIcon}
              sx={{
                color: 'fg.muted',
              }}
            >
              Archive
            </Button>
          </Box>
        </PageLayout.Content>

        <PageLayout.Footer>
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
