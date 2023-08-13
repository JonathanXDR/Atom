'use client';
import FooterItem from '@/components/FooterItemLegacy/FooterItemLegacy';
import NavItemLegacy from '@/components/NavItemLegacy/NavItemLegacy';
import { CalendarIcon, ChevronRightIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import './main.css';
import '/public/assets/css/blog.css';
import atomNightlyHeading from '/public/assets/png/atom-nightly-heading.png';

export default function Blog() {
  return (
    <>
      <Box className="footer-push">
        <NavItemLegacy />

        <Box className="wrapper content-push">
          <Box id="home">
            <ul className="posts">
              <li className="post">
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
                    Atom 1.39 speeds up find-and-replace operations by an order
                    of magnitude, improves loading performance for large,
                    single-line files, and upgrades Atom to Electron 3.1. Atom
                    1.40 beta brings richer integration with GitHub pull
                    requests, improved reliability for many common operations,
                    and continued enhancements to support for numerous
                    programming languages.
                  </Text>

                  <Link href="/blog2019/07/23/atom-1-39.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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

                  <Text as="p">
                    Today we&apos;re excited to introduce
                    <Link href="https://atom.io/nightly">
                      {' '}
                      Atom Nightly releases{' '}
                    </Link>
                    ! This new release channel gives you access to Atom&apos;s
                    latest feature improvements and bug fixes each day as they
                    are merged into our
                    <code className="language-plaintext highlighter-rouge">
                      master
                    </code>
                    branch. If you want to have an influence on the future of
                    Atom, this release channel is for you.
                  </Text>

                  <Link href="/blog2019/06/21/introducing-atom-nightly-releases.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
                    Atom 1.38 includes some improvements to the GitHub package
                    and improvements to JS, ERB, Python, and JSON language
                    support. Atom 1.39 beta includes a new
                    <code className="language-plaintext highlighter-rouge">
                      ripgrep
                    </code>
                    -based project search backend, an upgrade to Electron 3.1,
                    and much improved loading times for multi-megabyte files
                    containing only a single line of text.
                  </Text>

                  <Link href="/blog2019/06/11/atom-1-38.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
                    Atom 1.37 has shipped! This version introduces a complete
                    flow for handling review comments you&apos;ve received on a
                    pull request and an experimental faster mode in fuzzy finder
                    that dramatically improves its performance.
                  </Text>

                  <Link href="/blog2019/05/12/atom-1-37.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
              </li>

              <li className="post">
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
                    vulnerability, ability to view the full diff for pull
                    requests directly within Atom, and a variety of enhancements
                    and stability improvements.
                  </Text>

                  <Link href="/blog2019/03/12/atom-1-35.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
                    Atom 1.34 is out! With this release, you&apos;ll enjoy a
                    host of enhancements to help you craft the perfect commit,
                    including a faster diff view, the ability to preview all
                    staged changes, and support for commit message templates.
                  </Text>

                  <Link href="/blog2019/01/08/atom-1-34.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
                    At this time, Facebook has decided to retire their open
                    source efforts on Nuclide, the Atom-IDE, and other
                    associated repos.
                  </Text>

                  <Link href="/blog2018/12/12/facebook-retires-nuclide-extension.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>

              <li className="post">
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
              </li>

              <li className="post">
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
                    We want to make Atom better, and we need your help.
                    We&apos;ve started conducting usability interviews where we
                    can get direct feedback from humans about how they work and
                    how what we build affects that workflow.
                  </Text>

                  <Link href="/blog2018/11/14/github-package-uxr.html">
                    Read more <ChevronRightIcon size={16} />
                  </Link>
                </Box>
              </li>
            </ul>

            <Box className="pagination">
              <Text>← Previous</Text>

              <em>1</em>

              <Link href="/blogpage2">2</Link>

              <Link href="/blogpage3">3</Link>

              <Link href="/blogpage4">4</Link>

              <Link href="/blogpage5">5</Link>

              <Link href="/blogpage6">6</Link>

              <Link href="/blogpage7">7</Link>

              <Link href="/blogpage8">8</Link>

              <Link href="/blogpage9">9</Link>

              <Link href="/blogpage10">10</Link>

              <Link href="/blogpage11">11</Link>

              <Link href="/blogpage12">12</Link>

              <Link href="/blogpage13">13</Link>

              <Link href="/blogpage2">Next →</Link>

              <Link className="pagination-archive" href="/blogarchive/">
                <CalendarIcon size={16} /> Archive
              </Link>
            </Box>
          </Box>
          P
        </Box>

        <Box className="footer-pad"></Box>
      </Box>

      <FooterItem />
    </>
  );
}
