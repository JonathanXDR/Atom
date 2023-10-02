'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PostLegacy from '@/components/legacy/PostLegacy/PostLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import posts from '@/data/posts.json';
import { CalendarIcon, ChevronRightIcon } from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  PageLayout,
  Pagination,
  Text,
} from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';

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
        <PageLayout.Content
          padding="normal"
          width="large"
          sx={{
            paddingTop: '0 !important',
          }}
        >
          <Box as="ul" className="posts">
            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/07/23/atom-1-39.html">Atom 1.39</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> July 23, 2019
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
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
                  />{' '}
                  Atom
                </Link>
              </Text>
              <Box className="post markdown">
                <Text as="p">
                  Atom 1.39 speeds up find-and-replace operations by an order of
                  magnitude, improves loading performance for large, single-line
                  files, and upgrades Atom to Electron 3.1. Atom 1.40 beta
                  brings richer integration with GitHub pull requests, improved
                  reliability for many common operations, and continued
                  enhancements to support for numerous programming languages.
                </Text>

                <Link href="/blog2019/07/23/atom-1-39.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            {posts.map((post) => (
              <PostLegacy post={post} key={post.title} />
            ))}

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/06/11/atom-1-38.html">Atom 1.38</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> June 11, 2019
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
                  Atom 1.38 includes some improvements to the GitHub package and
                  improvements to JS, ERB, Python, and JSON language support.
                  Atom 1.39 beta includes a new
                  <code className="language-plaintext highlighter-rouge">
                    ripgrep
                  </code>
                  -based project search backend, an upgrade to Electron 3.1, and
                  much improved loading times for multi-megabyte files
                  containing only a single line of text.
                </Text>

                <Link href="/blog2019/06/11/atom-1-38.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/05/12/atom-1-37.html">Atom 1.37</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> May 12, 2019
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
                  Atom 1.37 has shipped! This version introduces a complete flow
                  for handling review comments you&apos;ve received on a pull
                  request and an experimental faster mode in fuzzy finder that
                  dramatically improves its performance.
                </Text>

                <Link href="/blog2019/05/12/atom-1-37.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/04/09/atom-1-36.html">Atom 1.36</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> April 9, 2019
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
                  Atom 1.36 has shipped! Upgrade today to open single files in
                  large directories much faster, see pull request review
                  comments from GitHub, specify multiple wrap guides at once,
                  and more.
                </Text>

                <Link href="/blog2019/04/09/atom-1-36.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/03/12/atom-1-35.html">Atom 1.35</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> March 12, 2019
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
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
                  />{' '}
                  Atom
                </Link>
              </Text>
              <Box className="post markdown">
                <Text as="p">
                  With Atom 1.35 comes a fix for the recent Chrome
                  vulnerability, ability to view the full diff for pull requests
                  directly within Atom, and a variety of enhancements and
                  stability improvements.
                </Text>

                <Link href="/blog2019/03/12/atom-1-35.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2019/01/08/atom-1-34.html">Atom 1.34</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> January 8, 2019
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
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
                  />{' '}
                  Atom
                </Link>
              </Text>
              <Box className="post markdown">
                <Text as="p">
                  Atom 1.34 is out! With this release, you&apos;ll enjoy a host
                  of enhancements to help you craft the perfect commit,
                  including a faster diff view, the ability to preview all
                  staged changes, and support for commit message templates.
                </Text>

                <Link href="/blog2019/01/08/atom-1-34.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2018/12/12/facebook-retires-nuclide-extension.html">
                  Facebook retires Nuclide extension
                </Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> December 12, 2018
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
                      https://avatars2.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars2.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars2.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars2.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
                  />{' '}
                  Atom
                </Link>
              </Text>
              <Box className="post markdown">
                <Text as="p">
                  At this time, Facebook has decided to retire their open source
                  efforts on Nuclide, the Atom-IDE, and other associated repos.
                </Text>

                <Link href="/blog2018/12/12/facebook-retires-nuclide-extension.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2018/11/28/atom-1-33.html">Atom 1.33</Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> November 28, 2018
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
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=18 1x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=36 2x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=54 3x,
                      https://avatars3.githubusercontent.com/github?v=3&amp;s=72 4x
                    "
                  />{' '}
                  Atom
                </Link>
              </Text>
              <Box className="post markdown">
                <Text as="p">
                  Atom 1.33 is out! With this release, you&apos;ll enjoy
                  built-in Rust support, improved discoverability for Git and
                  GitHub functionality, and faster performance for bracket
                  matching.
                </Text>

                <Link href="/blog2018/11/28/atom-1-33.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>

            <Box as="li" className="post">
              <Heading as="h2" className="post-name">
                <Link href="/blog2018/11/14/github-package-uxr.html">
                  Usability Interviews for Atom
                </Link>
              </Heading>
              <Text as="p" className="who-when">
                <CalendarIcon size={16} /> November 14, 2018
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
                  We want to make Atom better, and we need your help. We&apos;ve
                  started conducting usability interviews where we can get
                  direct feedback from humans about how they work and how what
                  we build affects that workflow.
                </Text>

                <Link href="/blog2018/11/14/github-package-uxr.html">
                  Read more <ChevronRightIcon size={16} />
                </Link>
              </Box>
            </Box>
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
              href="/blogarchive/"
              variant="invisible"
              leadingIcon={CalendarIcon}
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
