'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import { LinkIcon } from '@primer/octicons-react';
import { Box, Heading, PageLayout, Text } from '@primer/react';
import Link from 'next/link';

export default function Releases() {
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
          <Box className="markdown-body">
            <Heading as="h1" className="releases-header">
              Release notes
            </Heading>
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.63.1">
                  v1.63.1 <Text className="release-date">(2022-11-23)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Text as="p">
                This is the last release of Atom. We will be archiving Atom and
                all repositories under the Atom organization on December 15,
                2022.
              </Text>
              <Text as="p">
                You can learn more about the official sunset of Atom in our
                <Link href="https://github.blog/2022-06-08-sunsetting-atom/">
                  {' '}
                  blog post
                </Link>
                .
              </Text>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.63.0...1.63.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25709">
                    atom/atom#25709 - Fix <code>File</code> -&gt;
                    <code>Open…</code> menu on macOS
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.63.0">
                  v1.63.0 <Text className="release-date">(2022-11-18)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22687">
                    atom/atom#22687
                  </Link>
                  - Electron upgrade to <code>v11.4.7</code>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23446">
                    https://github.com/atom/atom/pull/23446
                  </Link>
                  - Fixes <code>git-diff</code> nested repositories REDUX
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2676">
                    https://github.com/atom/github/pull/2676
                  </Link>
                  - Correctly discard history of two files with the same name
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/445">
                    https://github.com/atom/language-php/pull/445
                  </Link>
                  - Detects nullable types in phpdoc
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/432">
                    https://github.com/atom/language-php/pull/432
                  </Link>
                  - Supports blade syntax in heredoc
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/240">
                    https://github.com/atom/language-ruby/pull/240
                  </Link>
                  - Adds ERB highlighting inside of script tags
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.60.0...1.63.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23158">
                    atom/atom#23158 - Remove
                    <code>if (reason === crashed)</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23282">
                    atom/atom#23282 - Remove aws-sdk
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23286">
                    atom/atom#23286 - Bump path-parse from 1.0.6 to 1.0.7 in
                    /packages/dalek
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23285">
                    atom/atom#23285 - Bump lodash from 4.17.15 to 4.17.21 in
                    /packages/dalek
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22687">
                    atom/atom#22687 - Electron upgrade 11.4.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23322">
                    atom/atom#23322 - Install using npm installed during
                    installation of script dependencies
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23446">
                    atom/atom#23446 - Fix <code>git-diff</code> nested
                    repositories REDUX
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23492">
                    atom/atom#23492 - ⬆️ language-php@0.48.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23506">
                    atom/atom#23506 - Bump node-fetch from 2.6.1 to 3.1.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23505">
                    atom/atom#23505 - Bump nanoid from 3.1.22 to 3.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23575">
                    atom/atom#23575 - fix/deps: min versions of
                    electron-chromedriver...
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23578">
                    atom/atom#23578 - ⬆️ Pr-changelog@0.3.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23624">
                    atom/atom#23624 - Bump language-ruby to 0.73.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23647">
                    atom/atom#23647 - deps: &quot;downgrade&quot; node-fetch to
                    ^v2.6.7 in script/ (fix &quot;Bump dependencies&quot; job in
                    Nightly CI)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23655">
                    atom/atom#23655 - (docs) Add FAQ link
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23668">
                    atom/atom#23668 - ⬆️ electron-packager to 15.1.0 in /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23664">
                    atom/atom#23664 - Fix npm ENOENT error in
                    install-script-runner-dependencies
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25483">
                    atom/atom#25483 - Update copyright year in licence
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25459">
                    atom/atom#25459 - New &quot;Open Package Manager&quot; menu
                    item
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25442">
                    atom/atom#25442 - Fix usage message (closes #25441)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25541">
                    atom/atom#25541 - Remove requirement
                    &quot;lsb-core-noarch&quot; from the RPM spec file.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23502">
                    atom/atom#23502 - Bump language-ruby to 0.73.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25622">
                    atom/atom#25622 - Add lsb_release file to
                    &quot;Recommends:&quot; of rpm spec
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25684">
                    atom/atom#25684 - install from github
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25693">
                    atom/atom#25693 - Disable tests.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/25694">
                    atom/atom#25694 - Remove dependancies.
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.9...v0.36.10</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2676">
                    atom/github#2676 - Hotfix in restore discard history of
                    files with same name
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2682">
                    atom/github#2682 - Clarify debug line
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2683">
                    atom/github#2683 - update os matrix in ci
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2712">
                    atom/github#2712 - Remote module defaults to false
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.47.0...v0.48.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/445">
                    atom/language-php#445 - Detect nullable types in phpdoc
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/439">
                    atom/language-php#439 - Replace noreturn with never
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/444">
                    atom/language-php#444 - limit allowed characters to UTF-8
                    range (0x10FFFF)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/432">
                    atom/language-php#432 - Support blade syntax in heredoc
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-ruby"
                  className="anchor"
                  href="https://atom.io/releases#language-ruby"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-ruby">
                  language-ruby
                </Link>
              </Heading>
              <Text as="p">v0.72.23...v0.73.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/289">
                    atom/language-ruby#289 - GitHub Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/288">
                    atom/language-ruby#288 - Bump tree-sitter-ruby to 0.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/240">
                    atom/language-ruby#240 - Add ERB highlighting inside of
                    script tags
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/218">
                    atom/language-ruby#218 - add interpolated snippet
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/234">
                    atom/language-ruby#234 - Support multiline YARD comments
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/224">
                    atom/language-ruby#224 - Fix missing scopes on separators
                    and <code>self</code>, differentiate <code>-&gt;</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/294">
                    atom/language-ruby#294 - Fix some typos
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.61.0-beta0">
                  v1.61.0-beta0
                  <Text className="release-date">(2022-03-08)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22687">
                    atom/atom#22687
                  </Link>
                  - Electron upgrade to <code>v11.4.7</code>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23446">
                    https://github.com/atom/atom/pull/23446
                  </Link>
                  - Fixes <code>git-diff</code> nested repositories REDUX
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2676">
                    https://github.com/atom/github/pull/2676
                  </Link>
                  - Correctly discard history of two files with the same name
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/445">
                    https://github.com/atom/language-php/pull/445
                  </Link>
                  - Detects nullable types in phpdoc
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/432">
                    https://github.com/atom/language-php/pull/432
                  </Link>
                  - Supports blade syntax in heredoc
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/240">
                    https://github.com/atom/language-ruby/pull/240
                  </Link>
                  - Adds ERB highlighting inside of script tags
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.60.0...1.61.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23158">
                    atom/atom#23158 - Remove
                    <code>if (reason === crashed)</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23282">
                    atom/atom#23282 - Remove aws-sdk
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23286">
                    atom/atom#23286 - Bump path-parse from 1.0.6 to 1.0.7 in
                    /packages/dalek
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23285">
                    atom/atom#23285 - Bump lodash from 4.17.15 to 4.17.21 in
                    /packages/dalek
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22687">
                    atom/atom#22687 - Electron upgrade 11.4.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23322">
                    atom/atom#23322 - Install using npm installed during
                    installation of script dependencies
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23446">
                    atom/atom#23446 - Fix <code>git-diff</code> nested
                    repositories REDUX
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23492">
                    atom/atom#23492 - ⬆️ language-php@0.48.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23506">
                    atom/atom#23506 - Bump node-fetch from 2.6.1 to 3.1.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23505">
                    atom/atom#23505 - Bump nanoid from 3.1.22 to 3.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23575">
                    atom/atom#23575 - fix/deps: min versions of
                    electron-chromedriver...
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23578">
                    atom/atom#23578 - ⬆️ Pr-changelog@0.3.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23624">
                    atom/atom#23624 - Bump language-ruby to 0.73.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23647">
                    atom/atom#23647 - deps: &quot;downgrade&quot; node-fetch to
                    ^v2.6.7 in script/ (fix &quot;Bump dependencies&quot; job in
                    Nightly CI)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23655">
                    atom/atom#23655 - (docs) Add FAQ link
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23668">
                    atom/atom#23668 - ⬆️ electron-packager to 15.1.0 in /script
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.9...v0.36.10</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2676">
                    atom/github#2676 - Hotfix in restore discard history of
                    files with same name
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2682">
                    atom/github#2682 - Clarify debug line
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2683">
                    atom/github#2683 - update os matrix in ci
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2712">
                    atom/github#2712 - Remote module defaults to false
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.47.0...v0.48.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/445">
                    atom/language-php#445 - Detect nullable types in phpdoc
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/439">
                    atom/language-php#439 - Replace noreturn with never
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/444">
                    atom/language-php#444 - limit allowed characters to UTF-8
                    range (0x10FFFF)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/432">
                    atom/language-php#432 - Support blade syntax in heredoc
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-ruby"
                  className="anchor"
                  href="https://atom.io/releases#language-ruby"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-ruby">
                  language-ruby
                </Link>
              </Heading>
              <Text as="p">v0.72.23...v0.73.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/289">
                    atom/language-ruby#289 - GitHub Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/288">
                    atom/language-ruby#288 - Bump tree-sitter-ruby to 0.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/240">
                    atom/language-ruby#240 - Add ERB highlighting inside of
                    script tags
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/218">
                    atom/language-ruby#218 - add interpolated snippet
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/234">
                    atom/language-ruby#234 - Support multiline YARD comments
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/224">
                    atom/language-ruby#224 - Fix missing scopes on separators
                    and <code>self</code>, differentiate <code>-&gt;</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/294">
                    atom/language-ruby#294 - Fix some typos
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.60.0">
                  v1.60.0 <Text className="release-date">(2022-03-08)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/531">
                    atom/tabs#531
                  </Link>
                  - Activate panes on any click, not just left click
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13414">
                    https://github.com/atom/atom/pull/13414
                  </Link>
                  - Adds context menu for cinnamon desktop enviroment (Linux)
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19016">
                    https://github.com/atom/atom/pull/19016
                  </Link>
                  - Allow line endings to be converted when copying and pasting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.59.0...1.60.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22769">
                    atom/atom#22769 - Use custom elements on
                    TestPanelContainerItemElement
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22774">
                    atom/atom#22774 - Use customElement for the specs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22578">
                    atom/atom#22578 - add await to the async isValidGitDirectory
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22779">
                    atom/atom#22779 - Fix linting issues
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22781">
                    atom/atom#22781 - Remove redudant await
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22780">
                    atom/atom#22780 - Use custom elements on pane container
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22785">
                    atom/atom#22785 - Use customElement on pane axis
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22789">
                    atom/atom#22789 - Use custom elements on text editor element
                    spec
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22800">
                    atom/atom#22800 - Updates tree-view package to v0.229.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22787">
                    atom/atom#22787 - Use custom element on pane resize-handle
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22814">
                    atom/atom#22814 - Bump notifications@0.72.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22817">
                    atom/atom#22817 - Bump keybinding-resolver@0.39.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22818">
                    atom/atom#22818 - Bump tabs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22834">
                    atom/atom#22834 - Bump tabs@0.110.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22841">
                    atom/atom#22841 - Bump path-parse from 1.0.6 to 1.0.7 in
                    /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22840">
                    atom/atom#22840 - Bump path-parse from 1.0.6 to 1.0.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22849">
                    atom/atom#22849 - Fixes Deprecated Authentication Style
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22850">
                    atom/atom#22850 - Fixes Deprecated Authentication Style-2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22851">
                    atom/atom#22851 - Bump tree-view
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22751">
                    atom/atom#22751 - Use custom element on pane-element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22865">
                    atom/atom#22865 - Revert timeout increase on CI.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22867">
                    atom/atom#22867 - Use custom element on text editor element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22685">
                    atom/atom#22685 - Make sure path is not undefined (#20871)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22576">
                    atom/atom#22576 - Bump normalize-url from 4.5.0 to 4.5.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/15975">
                    atom/atom#15975 - Add custom start tiles
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22930">
                    atom/atom#22930 - Update Discuss links to Github Discussions
                    links
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13821">
                    atom/atom#13821 - Clarify that stack only has an effect if
                    detail is present as well
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17107">
                    atom/atom#17107 - Convert arguments to absolute paths
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17681">
                    atom/atom#17681 - RFC: Pre-transpile apm packages
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18703">
                    atom/atom#18703 - Update windows atom.sh launch script to
                    support WSL changes in 1809
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18816">
                    atom/atom#18816 - RFC: Grammar comment delims
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13414">
                    atom/atom#13414 - Added context menu for cinnamon desktop
                    enviroment (Linux)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19623">
                    atom/atom#19623 - RFC: Evaluating scope name additions to
                    built-in grammars
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17628">
                    atom/atom#17628 - Fix getEnvFromShell() to correctly handle
                    newlines in env vars
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22931">
                    atom/atom#22931 - ⬆️ Bump language-css@0.45.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22943">
                    atom/atom#22943 - Add prevent option to
                    ::onWillDestroyPaneItem
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23001">
                    atom/atom#23001 - bootstrap: Update Node requirement to
                    10.12+ in system requirement checker
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22979">
                    atom/atom#22979 - bootstrap: Use legacy-compatible
                    <code>catch</code> syntax (support older Node)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23000">
                    atom/atom#23000 - Remove duplicate <code>to</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/12513">
                    atom/atom#12513 - Reset the package&apos;s local storage
                    setting if loading cannot be deferred
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19251">
                    atom/atom#19251 - Only allow drag-and-drop to succeed on
                    panes in the center workspace
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19016">
                    atom/atom#19016 - Convert line endings when copy and pasting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23031">
                    atom/atom#23031 - Remember last opened state
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23097">
                    atom/atom#23097 - Remove dependancy status badge.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23096">
                    atom/atom#23096 - Replace remote module with invoke calls.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23132">
                    atom/atom#23132 - Change from <code>crashed</code> to
                    <code>render-process-gone</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23145">
                    atom/atom#23145 - Revert &quot;Only allow drag-and-drop to
                    succeed on panes in the center workspace&quot;
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="keybinding-resolver"
                  className="anchor"
                  href="https://atom.io/releases#keybinding-resolver"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/keybinding-resolver">
                  keybinding-resolver
                </Link>
              </Heading>
              <Text as="p">v0.39.0...v0.39.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/68">
                    atom/keybinding-resolver#68 - Remove LICENSE
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/70">
                    atom/keybinding-resolver#70 - Upgrade temp
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/74">
                    atom/keybinding-resolver#74 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/76">
                    atom/keybinding-resolver#76 - Fix failing specs
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="notifications"
                  className="anchor"
                  href="https://atom.io/releases#notifications"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/notifications">
                  notifications
                </Link>
              </Heading>
              <Text as="p">v0.71.0...v0.72.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/notifications/pull/204">
                    atom/notifications#204 - Migrate to Github Actions
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tabs"
                  className="anchor"
                  href="https://atom.io/releases#tabs"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tabs">tabs</Link>
              </Heading>
              <Text as="p">v0.110.0...v0.110.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/531">
                    atom/tabs#531 - Activate panes on any click, not just left
                    click
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/565">
                    atom/tabs#565 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/566">
                    atom/tabs#566 - Fix failing specs
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.3...v0.229.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1381">
                    atom/tree-view#1381 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1389">
                    atom/tree-view#1389 - Implement option to hid tree pane on
                    startup
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1392">
                    atom/tree-view#1392 - Attach elements to jasmine DOM
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-css"
                  className="anchor"
                  href="https://atom.io/releases#language-css"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-css">
                  language-css
                </Link>
              </Heading>
              <Text as="p">v0.44.4...v0.45.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/169">
                    atom/language-css#169 - Add generic system font families
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/129">
                    atom/language-css#129 - Media query support for
                    &apos;hover&apos; (see issue #128)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/154">
                    atom/language-css#154 - Fix typo in &quot;highlight
                    deprecated combinators&quot; spec
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/144">
                    atom/language-css#144 - Add support for display: flow-root
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/151">
                    atom/language-css#151 - Add missing scroll-snap-type values
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/143">
                    atom/language-css#143 - Add justify-self and justify-items
                    grid properties
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/127">
                    atom/language-css#127 - adjust tag-names match to fix
                    downstream issue in language-less
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/177">
                    atom/language-css#177 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/182">
                    atom/language-css#182 - Add in @-ms-viewport and
                    @-o-viewport to CSS grammar
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/178">
                    atom/language-css#178 - Add :focus-visible pseudoclassName
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/173">
                    atom/language-css#173 - Updating CSS property list
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/183">
                    atom/language-css#183 - Revert &quot;adjust tag-names match
                    to fix downstream issue in language-less&quot;
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.60.0-beta0">
                  v1.60.0-beta0
                  <Text className="release-date">(2022-02-08)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13414">
                    https://github.com/atom/atom/pull/13414
                  </Link>
                  - Adds context menu for cinnamon desktop enviroment (Linux)
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19016">
                    https://github.com/atom/atom/pull/19016
                  </Link>
                  - Allow line endings to be converted when copying and pasting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.59.0...1.60.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22769">
                    atom/atom#22769 - Use custom elements on
                    TestPanelContainerItemElement
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22774">
                    atom/atom#22774 - Use customElement for the specs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22578">
                    atom/atom#22578 - add await to the async isValidGitDirectory
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22779">
                    atom/atom#22779 - Fix linting issues
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22781">
                    atom/atom#22781 - Remove redudant await
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22780">
                    atom/atom#22780 - Use custom elements on pane container
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22785">
                    atom/atom#22785 - Use customElement on pane axis
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22789">
                    atom/atom#22789 - Use custom elements on text editor element
                    spec
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22800">
                    atom/atom#22800 - Updates tree-view package to v0.229.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22787">
                    atom/atom#22787 - Use custom element on pane resize-handle
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22814">
                    atom/atom#22814 - Bump notifications@0.72.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22817">
                    atom/atom#22817 - Bump keybinding-resolver@0.39.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22818">
                    atom/atom#22818 - Bump tabs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22834">
                    atom/atom#22834 - Bump tabs@0.110.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22841">
                    atom/atom#22841 - Bump path-parse from 1.0.6 to 1.0.7 in
                    /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22840">
                    atom/atom#22840 - Bump path-parse from 1.0.6 to 1.0.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22849">
                    atom/atom#22849 - Fixes Deprecated Authentication Style
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22850">
                    atom/atom#22850 - Fixes Deprecated Authentication Style-2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22851">
                    atom/atom#22851 - Bump tree-view
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22751">
                    atom/atom#22751 - Use custom element on pane-element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22865">
                    atom/atom#22865 - Revert timeout increase on CI.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22867">
                    atom/atom#22867 - Use custom element on text editor element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22685">
                    atom/atom#22685 - Make sure path is not undefined (#20871)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22576">
                    atom/atom#22576 - Bump normalize-url from 4.5.0 to 4.5.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/15975">
                    atom/atom#15975 - Add custom start tiles
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22930">
                    atom/atom#22930 - Update Discuss links to Github Discussions
                    links
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13821">
                    atom/atom#13821 - Clarify that stack only has an effect if
                    detail is present as well
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17107">
                    atom/atom#17107 - Convert arguments to absolute paths
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17681">
                    atom/atom#17681 - RFC: Pre-transpile apm packages
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18703">
                    atom/atom#18703 - Update windows atom.sh launch script to
                    support WSL changes in 1809
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18816">
                    atom/atom#18816 - RFC: Grammar comment delims
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/13414">
                    atom/atom#13414 - Added context menu for cinnamon desktop
                    enviroment (Linux)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19623">
                    atom/atom#19623 - RFC: Evaluating scope name additions to
                    built-in grammars
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/17628">
                    atom/atom#17628 - Fix getEnvFromShell() to correctly handle
                    newlines in env vars
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22931">
                    atom/atom#22931 - ⬆️ Bump language-css@0.45.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22943">
                    atom/atom#22943 - Add prevent option to
                    ::onWillDestroyPaneItem
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23001">
                    atom/atom#23001 - bootstrap: Update Node requirement to
                    10.12+ in system requirement checker
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22979">
                    atom/atom#22979 - bootstrap: Use legacy-compatible
                    <code>catch</code> syntax (support older Node)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23000">
                    atom/atom#23000 - Remove duplicate <code>to</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/12513">
                    atom/atom#12513 - Reset the package&apos;s local storage
                    setting if loading cannot be deferred
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19251">
                    atom/atom#19251 - Only allow drag-and-drop to succeed on
                    panes in the center workspace
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19016">
                    atom/atom#19016 - Convert line endings when copy and pasting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23031">
                    atom/atom#23031 - Remember last opened state
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23097">
                    atom/atom#23097 - Remove dependancy status badge.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23096">
                    atom/atom#23096 - Replace remote module with invoke calls.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23132">
                    atom/atom#23132 - Change from <code>crashed</code> to
                    <code>render-process-gone</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/23145">
                    atom/atom#23145 - Revert &quot;Only allow drag-and-drop to
                    succeed on panes in the center workspace&quot;
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="keybinding-resolver"
                  className="anchor"
                  href="https://atom.io/releases#keybinding-resolver"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/keybinding-resolver">
                  keybinding-resolver
                </Link>
              </Heading>
              <Text as="p">v0.39.0...v0.39.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/68">
                    atom/keybinding-resolver#68 - Remove LICENSE
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/70">
                    atom/keybinding-resolver#70 - Upgrade temp
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/74">
                    atom/keybinding-resolver#74 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/keybinding-resolver/pull/76">
                    atom/keybinding-resolver#76 - Fix failing specs
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="notifications"
                  className="anchor"
                  href="https://atom.io/releases#notifications"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/notifications">
                  notifications
                </Link>
              </Heading>
              <Text as="p">v0.71.0...v0.72.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/notifications/pull/204">
                    atom/notifications#204 - Migrate to Github Actions
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tabs"
                  className="anchor"
                  href="https://atom.io/releases#tabs"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tabs">tabs</Link>
              </Heading>
              <Text as="p">v0.110.0...v0.110.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/531">
                    atom/tabs#531 - Activate panes on any click, not just left
                    click
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/565">
                    atom/tabs#565 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tabs/pull/566">
                    atom/tabs#566 - Fix failing specs
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.3...v0.229.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1381">
                    atom/tree-view#1381 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1389">
                    atom/tree-view#1389 - Implement option to hid tree pane on
                    startup
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1392">
                    atom/tree-view#1392 - Attach elements to jasmine DOM
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-css"
                  className="anchor"
                  href="https://atom.io/releases#language-css"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-css">
                  language-css
                </Link>
              </Heading>
              <Text as="p">v0.44.4...v0.45.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/169">
                    atom/language-css#169 - Add generic system font families
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/129">
                    atom/language-css#129 - Media query support for
                    &apos;hover&apos; (see issue #128)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/154">
                    atom/language-css#154 - Fix typo in &quot;highlight
                    deprecated combinators&quot; spec
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/144">
                    atom/language-css#144 - Add support for display: flow-root
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/151">
                    atom/language-css#151 - Add missing scroll-snap-type values
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/143">
                    atom/language-css#143 - Add justify-self and justify-items
                    grid properties
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/127">
                    atom/language-css#127 - adjust tag-names match to fix
                    downstream issue in language-less
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/177">
                    atom/language-css#177 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/182">
                    atom/language-css#182 - Add in @-ms-viewport and
                    @-o-viewport to CSS grammar
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/178">
                    atom/language-css#178 - Add :focus-visible pseudoclassName
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/173">
                    atom/language-css#173 - Updating CSS property list
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-css/pull/183">
                    atom/language-css#183 - Revert &quot;adjust tag-names match
                    to fix downstream issue in language-less&quot;
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.59.0">
                  v1.59.0 <Text className="release-date">(2022-02-08)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22697">
                    https://github.com/atom/atom/pull/22697
                  </Link>
                  - Fixed command to install Atom dependencies on Ubuntu
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/16206">
                    https://github.com/atom/atom/pull/16206
                  </Link>
                  - Enable default editor keymaps for editors located outside
                  atom-workspace
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.58.0...1.59.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22015">
                    atom/atom#22015 - Update required dependencies for
                    Debian/Ubuntu
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22463">
                    atom/atom#22463 - ⬆️ Bump atom-select-list@0.8.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/16206">
                    atom/atom#16206 - Enable default editor keymaps for editors
                    located outside atom-workspace
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22448">
                    atom/atom#22448 - Update readme install libraries
                    instructions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/11786">
                    atom/atom#11786 - fix spec toShow()
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22475">
                    atom/atom#22475 - Document
                    TextEditor::bufferRangeForScopeAtBufferPosition
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22478">
                    atom/atom#22478 - Bump browserslist from 4.16.3 to 4.16.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22498">
                    atom/atom#22498 - Update atom.desktop.ini
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18321">
                    atom/atom#18321 - Implementing tree-sitter based indentation
                    logic
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22250">
                    atom/atom#22250 - Migrate from Amazon S3 to Azure blob
                    storage
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22530">
                    atom/atom#22530 - Fixes error on production CI
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22543">
                    atom/atom#22543 - git-diff: Fix typo in code
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22541">
                    atom/atom#22541 - Recreate #15175
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22553">
                    atom/atom#22553 - tree-indenter: Fix typo
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22575">
                    atom/atom#22575 - Bump normalize-url from 4.5.0 to 4.5.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22652">
                    atom/atom#22652 - Bump <code>async</code> dependency to
                    3.2.0 in /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22688">
                    atom/atom#22688 - Bump color-string from 1.5.4 to 1.5.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22597">
                    atom/atom#22597 - Fix/not update menu with i18n (#22594)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22697">
                    atom/atom#22697 - Fixed command to install Atom dependencies
                    on Ubuntu
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22737">
                    atom/atom#22737 - Fix typo in
                    tree-sitter-language-mode-spec.js
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22733">
                    atom/atom#22733 - Decaffeinate elements
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22741">
                    atom/atom#22741 - For glibc compatibility use Ubuntu 18.04
                    as environment
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22738">
                    atom/atom#22738 - Ubuntu 16.04 LTS environment is deprecated
                    It will be removed on September 20, 2021. Migrate to
                    ubuntu-latest instead.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22717">
                    atom/atom#22717 - Try removing marked
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22749">
                    atom/atom#22749 - Migrate styles element to custom elements
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22750">
                    atom/atom#22750 - Use custom element on pane container
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22755">
                    atom/atom#22755 - Use custom element on workspace-element
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.59.0-beta0">
                  v1.59.0-beta0
                  <Text className="release-date">(2021-07-27)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/16206">
                    https://github.com/atom/atom/pull/16206
                  </Link>
                  - Enable default editor keymaps for editors located outside
                  atom-workspace
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18321">
                    https://github.com/atom/atom/pull/18321
                  </Link>
                  - Implementing tree-sitter based indentation logic
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.58.0...1.59.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22015">
                    atom/atom#22015 - Update required dependencies for
                    Debian/Ubuntu
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22463">
                    atom/atom#22463 - ⬆️ Bump atom-select-list@0.8.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/16206">
                    atom/atom#16206 - Enable default editor keymaps for editors
                    located outside atom-workspace
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22448">
                    atom/atom#22448 - Update readme install libraries
                    instructions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/11786">
                    atom/atom#11786 - fix spec toShow()
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22475">
                    atom/atom#22475 - Document
                    TextEditor::bufferRangeForScopeAtBufferPosition
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22478">
                    atom/atom#22478 - Bump browserslist from 4.16.3 to 4.16.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22498">
                    atom/atom#22498 - Update atom.desktop.ini
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/18321">
                    atom/atom#18321 - Implementing tree-sitter based indentation
                    logic
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22250">
                    atom/atom#22250 - Migrate from Amazon S3 to Azure blob
                    storage
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22530">
                    atom/atom#22530 - Fixes error on production CI
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22543">
                    atom/atom#22543 - git-diff: Fix typo in code
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22541">
                    atom/atom#22541 - Recreate #15175
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22553">
                    atom/atom#22553 - tree-indenter: Fix typo
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22575">
                    atom/atom#22575 - Bump normalize-url from 4.5.0 to 4.5.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22652">
                    atom/atom#22652 - Bump <code>async</code> dependency to
                    3.2.0 in /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22688">
                    atom/atom#22688 - Bump color-string from 1.5.4 to 1.5.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22597">
                    atom/atom#22597 - Fix/not update menu with i18n (#22594)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22697">
                    atom/atom#22697 - Fixed command to install Atom dependencies
                    on Ubuntu
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22737">
                    atom/atom#22737 - Fix typo in
                    tree-sitter-language-mode-spec.js
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22733">
                    atom/atom#22733 - Decaffeinate elements
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22741">
                    atom/atom#22741 - For glibc compatibility use Ubuntu 18.04
                    as environment
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22738">
                    atom/atom#22738 - Ubuntu 16.04 LTS environment is deprecated
                    It will be removed on September 20, 2021. Migrate to
                    ubuntu-latest instead.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22717">
                    atom/atom#22717 - Try removing marked
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22749">
                    atom/atom#22749 - Migrate styles element to custom elements
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22750">
                    atom/atom#22750 - Use custom element on pane container
                    element
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22755">
                    atom/atom#22755 - Use custom element on workspace-element
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.58.0">
                  v1.58.0 <Text className="release-date">(2021-07-27)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22315">
                    https://github.com/atom/atom/pull/22315
                  </Link>
                  - Update to macOS Big Sur icon.
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22424">
                    https://github.com/atom/atom/pull/22424
                  </Link>
                  - Fix reopening a project in safeMode and devMode.
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22123">
                    https://github.com/atom/atom/pull/22123
                  </Link>
                  - Improve contrast on Windows app icons
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/archive-view/pull/73">
                    https://github.com/atom/archive-view/pull/73
                  </Link>
                  - Add ability to collapse archived directories (zip, tar,
                  e.t.c)
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/bracket-matcher/pull/405">
                    https://github.com/atom/bracket-matcher/pull/405
                  </Link>
                  - Handle multicursor selection inside brackets
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/932">
                    https://github.com/atom/find-and-replace/pull/932
                  </Link>
                  - Add &quot;Open in New Tab&quot; and &quot;Open in New
                  Window&quot; right-click context menu options
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.57.0...1.58.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22185">
                    atom/atom#22185 - Use n-api for native modules.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21379">
                    atom/atom#21379 - Use the built-in Visual Studio instead of
                    windows-build-tools v4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22347">
                    atom/atom#22347 - ⬆️ Bump whitespace@0.37.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22353">
                    atom/atom#22353 - ⬆️ Bump find-and-replace@0.219.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22354">
                    atom/atom#22354 - Speed up blinking cursor
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22372">
                    atom/atom#22372 - Bump hosted-git-info from 2.7.1 to 2.8.9
                    in /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22371">
                    atom/atom#22371 - Bump hosted-git-info from 2.7.1 to 2.8.9
                    in /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22361">
                    atom/atom#22361 - Bump lodash from 4.17.20 to 4.17.21 in
                    /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22384">
                    atom/atom#22384 - Bump pathwatcher@8.1.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22386">
                    atom/atom#22386 - Bump bracket-matcher@0.92.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22385">
                    atom/atom#22385 - Bump postcss from 8.1.6 to 8.2.10
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22395">
                    atom/atom#22395 - Bump language-php@0.47.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22096">
                    atom/atom#22096 - fix: update language-python for nightly
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22407">
                    atom/atom#22407 - ⬆️ Bump archive-view@0.66.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22315">
                    atom/atom#22315 - Replaced OS X Yosemite-era icon with macOS
                    Big Sur icon for Atom for Macs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22424">
                    atom/atom#22424 - Pass safeMode and devMode on reopening a
                    project
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22433">
                    atom/atom#22433 - Get rpm from bionic
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22446">
                    atom/atom#22446 - Update README.md to match the move to
                    Github Discussion
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22447">
                    atom/atom#22447 - Remove instructions to join slack
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22297">
                    atom/atom#22297 - Fix typo in text-editor-spec.js
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22123">
                    atom/atom#22123 - Fix app icons on Windows
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22103">
                    atom/atom#22103 - Convert var to const/let in src files
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22076">
                    atom/atom#22076 - Fix RPM dependencies
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22421">
                    atom/atom#22421 - Replaced the old Atom document icon with
                    the Big Sur icon
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22053">
                    atom/atom#22053 - Fix: remove unused parser instance
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22450">
                    atom/atom#22450 - script: Let bootstrap install
                    <code>apm</code> with <code>npm ci</code>
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22453">
                    atom/atom#22453 - ⬆️ Bump minidump@0.22.0
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="archive-view"
                  className="anchor"
                  href="https://atom.io/releases#archive-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/archive-view">
                  archive-view
                </Link>
              </Heading>
              <Text as="p">v0.65.2...v0.66.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/archive-view/pull/78">
                    atom/archive-view#78 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/archive-view/pull/73">
                    atom/archive-view#73 - Add ability to collapse directories
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="bracket-matcher"
                  className="anchor"
                  href="https://atom.io/releases#bracket-matcher"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/bracket-matcher">
                  bracket-matcher
                </Link>
              </Heading>
              <Text as="p">v0.91.2...v0.92.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/bracket-matcher/pull/396">
                    atom/bracket-matcher#396 - Fix close-tag for JSX tags with
                    member access
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/bracket-matcher/pull/402">
                    atom/bracket-matcher#402 - Bump y18n from 3.2.1 to 3.2.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/bracket-matcher/pull/403">
                    atom/bracket-matcher#403 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/bracket-matcher/pull/405">
                    atom/bracket-matcher#405 - Handle multicursor selection
                    inside brackets
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.7...v0.219.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1050">
                    atom/find-and-replace#1050 - docs(CONTRIBUTING.md): add link
                    to Running Specs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/938">
                    atom/find-and-replace#938 - Add preserve case option for
                    buffer replace. References #165.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/932">
                    atom/find-and-replace#932 - Added &quot;Open in New
                    Tab&quot; and &quot;Open in New Window&quot; right-click
                    context menu options
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1152">
                    atom/find-and-replace#1152 - Add searchAllPanes option
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="whitespace"
                  className="anchor"
                  href="https://atom.io/releases#whitespace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/whitespace">
                  whitespace
                </Link>
              </Heading>
              <Text as="p">v0.37.7...v0.37.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/181">
                    atom/whitespace#181 - Add Probot no-response configuration
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/182">
                    atom/whitespace#182 - 🤖 Configure probot/no-response to
                    allow 28 days when requesting more info on an issue
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/196">
                    atom/whitespace#196 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/197">
                    atom/whitespace#197 - Use active pane to save untitled file
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.44.7...v0.47.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/398">
                    atom/language-php#398 - Update type hints
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/397">
                    atom/language-php#397 - Support UTF-8 characters in
                    namespaces and className names
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/383">
                    atom/language-php#383 - Fix tokens for calls on variables
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/396">
                    atom/language-php#396 - Non-capturing catches and multiple
                    namespaced exceptions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/406">
                    atom/language-php#406 - Update .travis.yml
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/405">
                    atom/language-php#405 - Attributes
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/407">
                    atom/language-php#407 - match statement
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/404">
                    atom/language-php#404 - Nullsafe operator
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/411">
                    atom/language-php#411 - Fix attributes with leading
                    whitespaces
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/408">
                    atom/language-php#408 - Fix methods in interface
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/412">
                    atom/language-php#412 - Adding &apos;$&apos; character for
                    highlight-selected
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-python"
                  className="anchor"
                  href="https://atom.io/releases#language-python"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-python">
                  language-python
                </Link>
              </Heading>
              <Text as="p">v0.53.5...v0.53.6</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/327">
                    atom/language-python#327 - GitHub Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/315">
                    atom/language-python#315 - Add a lookahead for DELETE to
                    avoid mistaking HTTP strings for SQL
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/325">
                    atom/language-python#325 - Update tree-sitter-python + Add
                    missing tree-sitter scopes
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.57.0">
                  v1.57.0 <Text className="release-date">(2021-05-11)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21847">
                    https://github.com/atom/atom/pull/21847
                  </Link>
                  - Improve detection of incompatible native modules.
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.56.0...1.57.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22019">
                    atom/atom#22019 - Fixes failing Dependency Bump script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21927">
                    atom/atom#21927 - fix: require .node files directly to
                    detect incompatible native modules
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22046">
                    atom/atom#22046 - Fixes context menu not working
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22050">
                    atom/atom#22050 - Fix context menu right click not working (
                    alternative fix )
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22106">
                    atom/atom#22106 - Bump y18n from 3.2.1 to 3.2.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22061">
                    atom/atom#22061 - ⬆️ focus-trap@6.3.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22060">
                    atom/atom#22060 - ⬆️ chai@4.3.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22063">
                    atom/atom#22063 - ⬆️ git-utils@5.7.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22068">
                    atom/atom#22068 - ⬆️ normalize-package-data@3.0.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22152">
                    atom/atom#22152 - Bump settings-view@0.261.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22159">
                    atom/atom#22159 - ⬆️ Bump tree-view@0.228.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22080">
                    atom/atom#22080 - Fix tree-sitter-language-mode null
                    highlight iterators
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.7...v0.261.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1176">
                    atom/settings-view#1176 - fix: update async dependency
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1182">
                    atom/settings-view#1182 - Catch README file not found error
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.2...v0.228.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1377">
                    atom/tree-view#1377 - Wrap fs.realpathSync in a try catch
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.58.0-beta0">
                  v1.58.0-beta0
                  <Text className="release-date">(2021-05-11)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/938">
                    https://github.com/atom/find-and-replace/pull/938
                  </Link>
                  Adds preserve case option for buffer replace
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/932">
                    https://github.com/atom/find-and-replace/pull/932
                  </Link>
                  Adds open search result in new window or tab
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.57.0...1.58.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22185">
                    atom/atom#22185 - Use n-api for native modules.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21379">
                    atom/atom#21379 - Use the built-in Visual Studio instead of
                    windows-build-tools v4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22347">
                    atom/atom#22347 - ⬆️ Bump whitespace@0.37.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22353">
                    atom/atom#22353 - ⬆️ Bump find-and-replace@0.219.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22354">
                    atom/atom#22354 - Speed up blinking cursor
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.7...v0.219.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1050">
                    atom/find-and-replace#1050 - docs(CONTRIBUTING.md): add link
                    to Running Specs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/938">
                    atom/find-and-replace#938 - Add preserve case option for
                    buffer replace. References #165.
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/932">
                    atom/find-and-replace#932 - Added &quot;Open in New
                    Tab&quot; and &quot;Open in New Window&quot; right-click
                    context menu options
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1152">
                    atom/find-and-replace#1152 - Add searchAllPanes option
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="whitespace"
                  className="anchor"
                  href="https://atom.io/releases#whitespace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/whitespace">
                  whitespace
                </Link>
              </Heading>
              <Text as="p">v0.37.7...v0.37.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/181">
                    atom/whitespace#181 - Add Probot no-response configuration
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/182">
                    atom/whitespace#182 - 🤖 Configure probot/no-response to
                    allow 28 days when requesting more info on an issue
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/196">
                    atom/whitespace#196 - Migrate to Github Actions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/whitespace/pull/197">
                    atom/whitespace#197 - Use active pane to save untitled file
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.57.0-beta0">
                  v1.57.0-beta0
                  <Text className="release-date">(2021-04-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21847">
                    https://github.com/atom/atom/pull/21847
                  </Link>
                  - Improve detection of incompatible native modules.
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.56.0...1.57.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22019">
                    atom/atom#22019 - Fixes failing Dependency Bump script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21927">
                    atom/atom#21927 - fix: require .node files directly to
                    detect incompatible native modules
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22046">
                    atom/atom#22046 - Fixes context menu not working
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22050">
                    atom/atom#22050 - Fix context menu right click not working (
                    alternative fix )
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22106">
                    atom/atom#22106 - Bump y18n from 3.2.1 to 3.2.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22061">
                    atom/atom#22061 - ⬆️ focus-trap@6.3.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22060">
                    atom/atom#22060 - ⬆️ chai@4.3.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22063">
                    atom/atom#22063 - ⬆️ git-utils@5.7.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22068">
                    atom/atom#22068 - ⬆️ normalize-package-data@3.0.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22152">
                    atom/atom#22152 - Bump settings-view@0.261.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22159">
                    atom/atom#22159 - ⬆️ Bump tree-view@0.228.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22080">
                    atom/atom#22080 - Fix tree-sitter-language-mode null
                    highlight iterators
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.7...v0.261.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1176">
                    atom/settings-view#1176 - fix: update async dependency
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1182">
                    atom/settings-view#1182 - Catch README file not found error
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.2...v0.228.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1377">
                    atom/tree-view#1377 - Wrap fs.realpathSync in a try catch
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.56.0">
                  v1.56.0 <Text className="release-date">(2021-04-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21847">
                    https://github.com/atom/atom/pull/21847
                  </Link>
                  - Fix buggy quitting behaviour on macOS after all windows are
                  closed
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21852">
                    https://github.com/atom/atom/pull/21852
                  </Link>
                  - Improve java syntax highlighting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21847">
                    https://github.com/atom/atom/pull/21847
                  </Link>
                  - Add setting to disable middle mouse paste.
                  <code>(editor. selectionClipboard)</code>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21777">
                    https://github.com/atom/atom/pull/21777
                  </Link>
                  - Electron upgrade 🎉
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.55.0...1.56.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21753">
                    atom/atom#21753 - Fix handling of &quot;empty&quot; language
                    injections with Tree-sitter
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21715">
                    atom/atom#21715 - check if testRunner is es module
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21848">
                    atom/atom#21848 - Add Authorization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21903">
                    atom/atom#21903 - github
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21928">
                    atom/atom#21928 - Fixes dependency bump script
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.7...v0.36.9</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2459">
                    atom/github#2459 - use action-setup-atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2621">
                    atom/github#2621 - package.json: pin @babel/core to less
                    than 7.12.10
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2625">
                    atom/github#2625 - Update shell.openExternal to promise due
                    to electron update on atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2626">
                    atom/github#2626 - Update to promise api for some methods in
                    the electron API
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2631">
                    atom/github#2631 - Fix github failing tests for Atom&apos;s
                    electron 9.4.1 upgrade
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.2...v0.77.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/357">
                    atom/spell-check#357 - Add enableDebug to config
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/359">
                    atom/spell-check#359 - Fixes unable to load package
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.55.0">
                  v1.55.0 <Text className="release-date">(2021-03-09)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2564">
                    https://github.com/atom/github/pull/2564
                  </Link>
                  - Read and write git configuration without repository
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.54.0...1.55.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21665">
                    atom/atom#21665 - ⬆️ postcss@8.1.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21762">
                    atom/atom#21762 - GitHub package update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21787">
                    atom/atom#21787 - fix async confirm
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.2...v0.36.7</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2559">
                    atom/github#2559 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2566">
                    atom/github#2566 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2564">
                    atom/github#2564 - Read and write git configuration without
                    repository
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2572">
                    atom/github#2572 - Increase priority of login prompt on
                    GitHub tab
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2573">
                    atom/github#2573 - Correct a flaky test
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2574">
                    atom/github#2574 - Trim issue and pull request templates
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2575">
                    atom/github#2575 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2583">
                    atom/github#2583 - ⬆️ Bump superstring from 2.4.2 to 2.4.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2584">
                    atom/github#2584 - ⬆️ Bump whats-my-line@0.1.13
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2585">
                    atom/github#2585 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2587">
                    atom/github#2587 - Accept and cancel buttons on Git identity
                    panel
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2586">
                    atom/github#2586 - Some useful docs to link to
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2588">
                    atom/github#2588 - ⬆️ Bump whats-my-line@0.1.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2592">
                    atom/github#2592 - [Security] Bump ini from 1.3.5 to 1.3.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2598">
                    atom/github#2598 - Bump dompurify from 2.0.7 to 2.0.17
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2617">
                    atom/github#2617 - test: Disable failing file-patch tests
                    for Atom CI
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.56.0-beta0">
                  v1.56.0-beta0
                  <Text className="release-date">(2021-03-09)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21753">
                    https://github.com/atom/atom/pull/21753
                  </Link>
                  Fixes syntax highlighting bug across languages(Javascript,
                  Ruby, Typescript, Html, Rust)
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/22003">
                    https://github.com/atom/atom/pull/22003
                  </Link>
                  🎉 Upgrade electron to version 9.4.4
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.55.0...1.56.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21753">
                    atom/atom#21753 - Fix handling of &quot;empty&quot; language
                    injections with Tree-sitter
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21715">
                    atom/atom#21715 - check if testRunner is es module
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21848">
                    atom/atom#21848 - Add Authorization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21903">
                    atom/atom#21903 - github
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21928">
                    atom/atom#21928 - Fixes dependency bump script
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.7...v0.36.9</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2459">
                    atom/github#2459 - use action-setup-atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2621">
                    atom/github#2621 - package.json: pin @babel/core to less
                    than 7.12.10
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2625">
                    atom/github#2625 - Update shell.openExternal to promise due
                    to electron update on atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2626">
                    atom/github#2626 - Update to promise api for some methods in
                    the electron API
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2631">
                    atom/github#2631 - Fix github failing tests for Atom&apos;s
                    electron 9.4.1 upgrade
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.2...v0.77.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/357">
                    atom/spell-check#357 - Add enableDebug to config
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/359">
                    atom/spell-check#359 - Fixes unable to load package
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.54.0">
                  v1.54.0 <Text className="release-date">(2021-01-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21495">
                    https://github.com/atom/atom/pull/21495
                  </Link>
                  - Add defaultFontSize setting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20393">
                    https://github.com/atom/atom/pull/20393
                  </Link>
                  - Skip shell functions when parsing env
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/350">
                    https://github.com/atom/spell-check/pull/350
                  </Link>
                  - Add cmd shortkeys for Linux and Windows
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1359">
                    https://github.com/atom/tree-view/pull/1359
                  </Link>
                  - Do not wipe original file when duplicating
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1364">
                    https://github.com/atom/tree-view/pull/1364
                  </Link>
                  - Fixes unable to show file warning
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.53.0...1.54.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21495">
                    atom/atom#21495 - Add defaultFontSize setting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21510">
                    atom/atom#21510 - Add support for global macOS find
                    pasteboard
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21518">
                    atom/atom#21518 - ⬆️ yargs@16.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21447">
                    atom/atom#21447 - Fix WSL uname test
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21492">
                    atom/atom#21492 - ⬆️ tree-sitter@0.17.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20892">
                    atom/atom#20892 - Use HTML native preventScroll for
                    textEditorComponent focus
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21543">
                    atom/atom#21543 - ⬆️ postcss@8.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21542">
                    atom/atom#21542 - ⬆️ chart.js@2.9.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20393">
                    atom/atom#20393 - Skip shell functions when parsing env
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21544">
                    atom/atom#21544 - ⬆️ resolve@1.18.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21589">
                    atom/atom#21589 - ⬆️ temp@0.9.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21587">
                    atom/atom#21587 - Fixed atom.confirm and internal use of
                    dialog.showMessageBox
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21604">
                    atom/atom#21604 - ⬆️ sinon@9.2.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21615">
                    atom/atom#21615 - ⬆️ tree-view@0.228.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21641">
                    atom/atom#21641 - ⬆️ electron-osx-sign@0.5.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21655">
                    atom/atom#21655 - ⬆️ find-and-replace@0.219.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21657">
                    atom/atom#21657 - Upgrade the GitHub package
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.6...v0.219.7</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1142">
                    atom/find-and-replace#1142 - FIxes broken find and replace
                    button
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.35.0...v0.36.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2358">
                    atom/github#2358 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2429">
                    atom/github#2429 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2436">
                    atom/github#2436 - Give dialog text editors room to expand
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2298">
                    atom/github#2298 - Use GitHub actions for tests
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2437">
                    atom/github#2437 - Only show identity on present
                    repositories
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2441">
                    atom/github#2441 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2444">
                    atom/github#2444 - ⬆️ Dugite 1.88.5 and Fix Failing Test
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2445">
                    atom/github#2445 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2457">
                    atom/github#2457 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2461">
                    atom/github#2461 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2463">
                    atom/github#2463 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2465">
                    atom/github#2465 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2472">
                    atom/github#2472 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2475">
                    atom/github#2475 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2478">
                    atom/github#2478 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2480">
                    atom/github#2480 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2482">
                    atom/github#2482 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2484">
                    atom/github#2484 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2489">
                    atom/github#2489 - Bump lodash from 4.17.14 to 4.17.19
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2490">
                    atom/github#2490 - Bump lodash from 4.17.15 to 4.17.19 in
                    /actions/schema-up
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2491">
                    atom/github#2491 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2494">
                    atom/github#2494 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2496">
                    atom/github#2496 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2503">
                    atom/github#2503 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2507">
                    atom/github#2507 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2508">
                    atom/github#2508 - [Security] Bump bl from 1.2.2 to 1.2.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2510">
                    atom/github#2510 - Bump node-fetch from 2.6.0 to 2.6.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2512">
                    atom/github#2512 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /actions/auto-sprint
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2511">
                    atom/github#2511 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /actions/schema-up
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2513">
                    atom/github#2513 - Sync electron-* devDependencies with
                    atom/atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2514">
                    atom/github#2514 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2515">
                    atom/github#2515 - ⬆️ Bump sinon from 7.5.0 to 9.0.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2516">
                    atom/github#2516 - ⬆️ Bump hock from 1.3.3 to 1.4.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2517">
                    atom/github#2517 - ⬆️ Bump eslint from 6.7.2 to 6.8.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2518">
                    atom/github#2518 - ⬆️ Bump moment from 2.24.0 to 2.28.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2519">
                    atom/github#2519 - ⬆️ Bump @babel/preset-env from 7.8.2 to
                    7.11.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2520">
                    atom/github#2520 - ⬆️ Bump electron-devtools-installer from
                    2.2.4 to 3.1.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2522">
                    atom/github#2522 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2530">
                    atom/github#2530 - Passing CI is nice
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2528">
                    atom/github#2528 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2532">
                    atom/github#2532 - Scroll to first conflict when opening
                    editor
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2533">
                    atom/github#2533 - Flip CI back to nightly
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2534">
                    atom/github#2534 - script/redownload-electron-bins.js: Fix
                    finding the Atom repo&apos;s package.json
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2537">
                    atom/github#2537 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2544">
                    atom/github#2544 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2549">
                    atom/github#2549 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2551">
                    atom/github#2551 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2552">
                    atom/github#2552 - Update @babel/preset-env
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2553">
                    atom/github#2553 - Catch the non-workdir error from git
                    rev-parse
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.1...v0.76.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/350">
                    atom/spell-check#350 - Add cmd shortkeys for Linux and
                    Windows
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/346">
                    atom/spell-check#346 - Add html link to IANA tag list
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.1...v0.228.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1359">
                    atom/tree-view#1359 - Do not wipe original file when
                    duplicating
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1364">
                    atom/tree-view#1364 - Fixes unable to show file warning
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.55.0-beta0">
                  v1.55.0-beta0
                  <Text className="release-date">(2021-01-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2564">
                    https://github.com/atom/github/pull/2564
                  </Link>
                  - Read and write git configuration without repository
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.54.0...1.55.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21665">
                    atom/atom#21665 - ⬆️ postcss@8.1.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21762">
                    atom/atom#21762 - GitHub package update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21787">
                    atom/atom#21787 - fix async confirm
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.36.2...v0.36.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2559">
                    atom/github#2559 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2566">
                    atom/github#2566 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2564">
                    atom/github#2564 - Read and write git configuration without
                    repository
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2572">
                    atom/github#2572 - Increase priority of login prompt on
                    GitHub tab
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.54.0-beta0">
                  v1.54.0-beta0
                  <Text className="release-date">(2020-11-10)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21495">
                    https://github.com/atom/atom/pull/21495
                  </Link>
                  - Add defaultFontSize setting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20393">
                    https://github.com/atom/atom/pull/20393
                  </Link>
                  - Skip shell functions when parsing env
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2507">
                    https://github.com/atom/github/pull/2507
                  </Link>
                  - GraphQL schema update
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/350">
                    https://github.com/atom/spell-check/pull/350
                  </Link>
                  - Add cmd shortkeys for Linux and Windows
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1359">
                    https://github.com/atom/tree-view/pull/1359
                  </Link>
                  - Do not wipe original file when duplicating
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1364">
                    https://github.com/atom/tree-view/pull/1364
                  </Link>
                  - Fixes unable to show file warning
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.53.0...1.54.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21495">
                    atom/atom#21495 - Add defaultFontSize setting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21510">
                    atom/atom#21510 - Add support for global macOS find
                    pasteboard
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21518">
                    atom/atom#21518 - ⬆️ yargs@16.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21447">
                    atom/atom#21447 - Fix WSL uname test
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21492">
                    atom/atom#21492 - ⬆️ tree-sitter@0.17.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20892">
                    atom/atom#20892 - Use HTML native preventScroll for
                    textEditorComponent focus
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21543">
                    atom/atom#21543 - ⬆️ postcss@8.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21542">
                    atom/atom#21542 - ⬆️ chart.js@2.9.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20393">
                    atom/atom#20393 - Skip shell functions when parsing env
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21544">
                    atom/atom#21544 - ⬆️ resolve@1.18.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21589">
                    atom/atom#21589 - ⬆️ temp@0.9.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21587">
                    atom/atom#21587 - Fixed atom.confirm and internal use of
                    dialog.showMessageBox
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21604">
                    atom/atom#21604 - ⬆️ sinon@9.2.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21615">
                    atom/atom#21615 - ⬆️ tree-view@0.228.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21641">
                    atom/atom#21641 - ⬆️ electron-osx-sign@0.5.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21655">
                    atom/atom#21655 - ⬆️ find-and-replace@0.219.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21657">
                    atom/atom#21657 - Upgrade the GitHub package
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.6...v0.219.7</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1142">
                    atom/find-and-replace#1142 - FIxes broken find and replace
                    button
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.35.0...v0.36.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2358">
                    atom/github#2358 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2429">
                    atom/github#2429 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2436">
                    atom/github#2436 - Give dialog text editors room to expand
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2298">
                    atom/github#2298 - Use GitHub actions for tests
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2437">
                    atom/github#2437 - Only show identity on present
                    repositories
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2441">
                    atom/github#2441 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2444">
                    atom/github#2444 - ⬆️ Dugite 1.88.5 and Fix Failing Test
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2445">
                    atom/github#2445 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2457">
                    atom/github#2457 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2461">
                    atom/github#2461 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2463">
                    atom/github#2463 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2465">
                    atom/github#2465 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2472">
                    atom/github#2472 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2475">
                    atom/github#2475 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2478">
                    atom/github#2478 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2480">
                    atom/github#2480 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2482">
                    atom/github#2482 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2484">
                    atom/github#2484 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2489">
                    atom/github#2489 - Bump lodash from 4.17.14 to 4.17.19
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2490">
                    atom/github#2490 - Bump lodash from 4.17.15 to 4.17.19 in
                    /actions/schema-up
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2491">
                    atom/github#2491 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2494">
                    atom/github#2494 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2496">
                    atom/github#2496 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2503">
                    atom/github#2503 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2507">
                    atom/github#2507 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2508">
                    atom/github#2508 - [Security] Bump bl from 1.2.2 to 1.2.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2510">
                    atom/github#2510 - Bump node-fetch from 2.6.0 to 2.6.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2512">
                    atom/github#2512 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /actions/auto-sprint
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2511">
                    atom/github#2511 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /actions/schema-up
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2513">
                    atom/github#2513 - Sync electron-* devDependencies with
                    atom/atom
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2514">
                    atom/github#2514 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2515">
                    atom/github#2515 - ⬆️ Bump sinon from 7.5.0 to 9.0.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2516">
                    atom/github#2516 - ⬆️ Bump hock from 1.3.3 to 1.4.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2517">
                    atom/github#2517 - ⬆️ Bump eslint from 6.7.2 to 6.8.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2518">
                    atom/github#2518 - ⬆️ Bump moment from 2.24.0 to 2.28.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2519">
                    atom/github#2519 - ⬆️ Bump @babel/preset-env from 7.8.2 to
                    7.11.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2520">
                    atom/github#2520 - ⬆️ Bump electron-devtools-installer from
                    2.2.4 to 3.1.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2522">
                    atom/github#2522 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2530">
                    atom/github#2530 - Passing CI is nice
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2528">
                    atom/github#2528 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2532">
                    atom/github#2532 - Scroll to first conflict when opening
                    editor
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2533">
                    atom/github#2533 - Flip CI back to nightly
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2534">
                    atom/github#2534 - script/redownload-electron-bins.js: Fix
                    finding the Atom repo&apos;s package.json
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2537">
                    atom/github#2537 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2544">
                    atom/github#2544 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2549">
                    atom/github#2549 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2551">
                    atom/github#2551 - GraphQL schema update
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2552">
                    atom/github#2552 - Update @babel/preset-env
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2553">
                    atom/github#2553 - Catch the non-workdir error from git
                    rev-parse
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.1...v0.76.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/350">
                    atom/spell-check#350 - Add cmd shortkeys for Linux and
                    Windows
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/346">
                    atom/spell-check#346 - Add html link to IANA tag list
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.1...v0.228.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1359">
                    atom/tree-view#1359 - Do not wipe original file when
                    duplicating
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1364">
                    atom/tree-view#1364 - Fixes unable to show file warning
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.53.0">
                  v1.53.0 <Text className="release-date">(2020-11-10)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21367">
                    https://github.com/atom/atom/pull/21367
                  </Link>
                  - Fix version information
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21425">
                    https://github.com/atom/atom/pull/21425
                  </Link>
                  - Update Debian dependencies, fixes installing Atom on Ubuntu
                  Groovy
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21446">
                    https://github.com/atom/atom/pull/21446
                  </Link>
                  - Clarify the context under which log-file is used
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2425">
                    https://github.com/atom/github/pull/2425
                  </Link>
                  - Hide git and GitHub tab avatar alt text when offline
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2426">
                    https://github.com/atom/github/pull/2426
                  </Link>
                  - Create repository for single file
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1315">
                    https://github.com/atom/tree-view/pull/1315
                  </Link>
                  - Always show Tree View
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.52.0...1.53.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21267">
                    atom/atom#21267 - Revert build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21287">
                    atom/atom#21287 - Bump lodash from 4.17.15 to 4.17.20 in
                    /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21242">
                    atom/atom#21242 - Bump bl from 3.0.0 to 3.0.1 in /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20956">
                    atom/atom#20956 - ⬆️ github@0.35.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21196">
                    atom/atom#21196 - ⬆️ tree-sitter@0.16.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21028">
                    atom/atom#21028 - ⬆️ electron-osx-sign@0.4.17
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21029">
                    atom/atom#21029 - ⬆️ etch@0.14.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21262">
                    atom/atom#21262 - Ci publish template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21269">
                    atom/atom#21269 - CI build template including patches
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21298">
                    atom/atom#21298 - CI test template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21299">
                    atom/atom#21299 - ⬆️ async@3.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21193">
                    atom/atom#21193 - ⬆️ fs-admin@0.15.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21081">
                    atom/atom#21081 - Cross-platform CI scripts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21310">
                    atom/atom#21310 - ⬆️ tree-view@0.228.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21294">
                    atom/atom#21294 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21293">
                    atom/atom#21293 - Bump node-fetch from 2.2.0 to 2.6.1 in
                    /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21249">
                    atom/atom#21249 - Bump decompress from 4.2.0 to 4.2.1 in
                    /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20521">
                    atom/atom#20521 - Bump acorn from 5.7.3 to 5.7.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20043">
                    atom/atom#20043 - Bump mixin-deep from 1.3.1 to 1.3.2 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20632">
                    atom/atom#20632 - Bump https-proxy-agent from 2.2.1 to 2.2.4
                    in /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21212">
                    atom/atom#21212 - update npm@6.14.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21109">
                    atom/atom#21109 - Parallelize Tests in CI (+ Refactor and
                    Improvements)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21319">
                    atom/atom#21319 - ⬆️ postcss@8.0.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20042">
                    atom/atom#20042 - Bump eslint-utils from 1.3.1 to 1.4.3 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21331">
                    atom/atom#21331 - ⬆️ postcss@8.0.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21336">
                    atom/atom#21336 - DependsOn windows_tests
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21042">
                    atom/atom#21042 - ⬆️ scrollbar-style@3.2.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21046">
                    atom/atom#21046 - ⬆️ typescript-simple@8.0.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21338">
                    atom/atom#21338 - ⬆️ tree-sitter@0.16.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21295">
                    atom/atom#21295 - Tests: retry timed out steps automatically
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21340">
                    atom/atom#21340 - Remove random-words dependancy
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21343">
                    atom/atom#21343 - Dependancy updates
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21036">
                    atom/atom#21036 - ⬆️ mocha-junit-reporter@2.0.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21367">
                    atom/atom#21367 - Fix version information
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21256">
                    atom/atom#21256 - ⬆️ focus-trap@6.0.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21364">
                    atom/atom#21364 - ⬆️ postcss@8.0.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21376">
                    atom/atom#21376 - ⬆️ postcss@8.0.9
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21374">
                    atom/atom#21374 - ⬆️ etch@0.14.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21377">
                    atom/atom#21377 - ⬆️ tree-sitter@0.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21384">
                    atom/atom#21384 - Fixes issue with re-opening closed PRs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21396">
                    atom/atom#21396 - Prevent node_modules/nan pattern from
                    matching node_modules/nanoid
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21391">
                    atom/atom#21391 - ⬆️ postcss@8.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21388">
                    atom/atom#21388 - ⬆️ language-java@0.32.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21406">
                    atom/atom#21406 - ⬆️ postcss@8.1.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21398">
                    atom/atom#21398 - exclude test folders from the packaged app
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21344">
                    atom/atom#21344 - ⬆️ colors@3.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21411">
                    atom/atom#21411 - ⬆️ sinon@9.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21405">
                    atom/atom#21405 - ⬆️ marked@1.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21418">
                    atom/atom#21418 - ⬆️ find-and-replace@0.219.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21419">
                    atom/atom#21419 - ⬆️ settings-view@0.261.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21425">
                    atom/atom#21425 - Update Debian dependencies, fixes Ubuntu
                    Groovy
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21231">
                    atom/atom#21231 - ⬆️ mocha@6.2.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21430">
                    atom/atom#21430 - Merge dependency bumps
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21437">
                    atom/atom#21437 - ⬆️ focus-trap@6.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21446">
                    atom/atom#21446 - Clarify the context under which log-file
                    is used
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21413">
                    atom/atom#21413 - script/bootstrap: Make
                    <code>apm --version</code> print the Atom version currently
                    being bootstrapped
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21326">
                    atom/atom#21326 - Separate lint into own job
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.5...v0.219.6</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1137">
                    atom/find-and-replace#1137 - Add devtools catch
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="fuzzy-finder"
                  className="anchor"
                  href="https://atom.io/releases#fuzzy-finder"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/fuzzy-finder">
                  fuzzy-finder
                </Link>
              </Heading>
              <Text as="p">v1.14.2...v1.14.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/fuzzy-finder/pull/417">
                    atom/fuzzy-finder#417 - Bump sinon@9.0.3
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.34.2...v0.35.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2415">
                    atom/github#2415 - Populate StubItem panes that are
                    deserialized after package initialization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2419">
                    atom/github#2419 - [Security] Bump acorn from 6.4.0 to 6.4.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2424">
                    atom/github#2424 - Fix sprint projects link in CONTRIBUTING
                    doc
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2425">
                    atom/github#2425 - Hide git and GitHub tab avatar alt text
                    when offline
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2426">
                    atom/github#2426 - Create repository for single file
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2427">
                    atom/github#2427 - Bump CI host images
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2428">
                    atom/github#2428 - Git identity panel
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.5...v0.261.6</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1161">
                    atom/settings-view#1161 - Use marked instead of roaster +
                    update marked
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.1...v0.76.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/350">
                    atom/spell-check#350 - Add cmd shortkeys for Linux and
                    Windows
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/346">
                    atom/spell-check#346 - Add html link to IANA tag list
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.0...v0.228.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1315">
                    atom/tree-view#1315 - Always show Tree View
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1333">
                    atom/tree-view#1333 - Typo in Settings
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1354">
                    atom/tree-view#1354 - ⬆️ pathwatcher@8.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1358">
                    atom/tree-view#1358 - Fix Uncaught Error: ENOENT: no such
                    file or directory
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.53.0-beta0">
                  v1.53.0-beta0
                  <Text className="release-date">(2020-10-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21425">
                    https://github.com/atom/atom/pull/21425
                  </Link>
                  - Fixes atom unable to install on ubuntu groovy.
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2425">
                    https://github.com/atom/github/pull/2425
                  </Link>
                  - The alt text on your avatar in the Git tab no longer
                  overflows when you&apos;re offline.
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1358">
                    https://github.com/atom/tree-view/pull/1358
                  </Link>
                  - Allows files to be moved to a root directory that has a
                  &apos;,&apos; comma as part of its name
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.52.0...1.53.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21267">
                    atom/atom#21267 - Revert build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21287">
                    atom/atom#21287 - Bump lodash from 4.17.15 to 4.17.20 in
                    /packages/about
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21242">
                    atom/atom#21242 - Bump bl from 3.0.0 to 3.0.1 in /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20956">
                    atom/atom#20956 - ⬆️ github@0.35.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21196">
                    atom/atom#21196 - ⬆️ tree-sitter@0.16.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21028">
                    atom/atom#21028 - ⬆️ electron-osx-sign@0.4.17
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21029">
                    atom/atom#21029 - ⬆️ etch@0.14.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21262">
                    atom/atom#21262 - Ci publish template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21269">
                    atom/atom#21269 - CI build template including patches
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21298">
                    atom/atom#21298 - CI test template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21299">
                    atom/atom#21299 - ⬆️ async@3.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21193">
                    atom/atom#21193 - ⬆️ fs-admin@0.15.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21081">
                    atom/atom#21081 - Cross-platform CI scripts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21310">
                    atom/atom#21310 - ⬆️ tree-view@0.228.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21294">
                    atom/atom#21294 - Bump node-fetch from 2.6.0 to 2.6.1 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21293">
                    atom/atom#21293 - Bump node-fetch from 2.2.0 to 2.6.1 in
                    /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21249">
                    atom/atom#21249 - Bump decompress from 4.2.0 to 4.2.1 in
                    /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20521">
                    atom/atom#20521 - Bump acorn from 5.7.3 to 5.7.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20043">
                    atom/atom#20043 - Bump mixin-deep from 1.3.1 to 1.3.2 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20632">
                    atom/atom#20632 - Bump https-proxy-agent from 2.2.1 to 2.2.4
                    in /script/vsts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21212">
                    atom/atom#21212 - update npm@6.14.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21109">
                    atom/atom#21109 - Parallelize Tests in CI (+ Refactor and
                    Improvements)
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21319">
                    atom/atom#21319 - ⬆️ postcss@8.0.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20042">
                    atom/atom#20042 - Bump eslint-utils from 1.3.1 to 1.4.3 in
                    /script
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21331">
                    atom/atom#21331 - ⬆️ postcss@8.0.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21336">
                    atom/atom#21336 - DependsOn windows_tests
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21042">
                    atom/atom#21042 - ⬆️ scrollbar-style@3.2.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21046">
                    atom/atom#21046 - ⬆️ typescript-simple@8.0.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21338">
                    atom/atom#21338 - ⬆️ tree-sitter@0.16.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21295">
                    atom/atom#21295 - Tests: retry timed out steps automatically
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21340">
                    atom/atom#21340 - Remove random-words dependancy
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21343">
                    atom/atom#21343 - Dependancy updates
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21036">
                    atom/atom#21036 - ⬆️ mocha-junit-reporter@2.0.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21367">
                    atom/atom#21367 - Fix version information
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21256">
                    atom/atom#21256 - ⬆️ focus-trap@6.0.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21364">
                    atom/atom#21364 - ⬆️ postcss@8.0.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21376">
                    atom/atom#21376 - ⬆️ postcss@8.0.9
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21374">
                    atom/atom#21374 - ⬆️ etch@0.14.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21377">
                    atom/atom#21377 - ⬆️ tree-sitter@0.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21384">
                    atom/atom#21384 - Fixes issue with re-opening closed PRs
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21396">
                    atom/atom#21396 - Prevent node_modules/nan pattern from
                    matching node_modules/nanoid
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21391">
                    atom/atom#21391 - ⬆️ postcss@8.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21388">
                    atom/atom#21388 - ⬆️ language-java@0.32.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21406">
                    atom/atom#21406 - ⬆️ postcss@8.1.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21398">
                    atom/atom#21398 - exclude test folders from the packaged app
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21344">
                    atom/atom#21344 - ⬆️ colors@3.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21411">
                    atom/atom#21411 - ⬆️ sinon@9.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21405">
                    atom/atom#21405 - ⬆️ marked@1.2.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21418">
                    atom/atom#21418 - ⬆️ find-and-replace@0.219.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21419">
                    atom/atom#21419 - ⬆️ settings-view@0.261.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21425">
                    atom/atom#21425 - Update Debian dependencies, fixes Ubuntu
                    Groovy
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21231">
                    atom/atom#21231 - ⬆️ mocha@6.2.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21430">
                    atom/atom#21430 - Merge dependency bumps
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21437">
                    atom/atom#21437 - ⬆️ focus-trap@6.1.2
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21446">
                    atom/atom#21446 - Clarify the context under which log-file
                    is used
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21413">
                    atom/atom#21413 - script/bootstrap: Make
                    <code>apm --version</code> print the Atom version currently
                    being bootstrapped
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21326">
                    atom/atom#21326 - Separate lint into own job
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.5...v0.219.6</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1137">
                    atom/find-and-replace#1137 - Add devtools catch
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="fuzzy-finder"
                  className="anchor"
                  href="https://atom.io/releases#fuzzy-finder"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/fuzzy-finder">
                  fuzzy-finder
                </Link>
              </Heading>
              <Text as="p">v1.14.2...v1.14.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/fuzzy-finder/pull/417">
                    atom/fuzzy-finder#417 - Bump sinon@9.0.3
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.34.2...v0.35.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2415">
                    atom/github#2415 - Populate StubItem panes that are
                    deserialized after package initialization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2419">
                    atom/github#2419 - [Security] Bump acorn from 6.4.0 to 6.4.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2424">
                    atom/github#2424 - Fix sprint projects link in CONTRIBUTING
                    doc
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2425">
                    atom/github#2425 - Hide git and GitHub tab avatar alt text
                    when offline
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2426">
                    atom/github#2426 - Create repository for single file
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2427">
                    atom/github#2427 - Bump CI host images
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2428">
                    atom/github#2428 - Git identity panel
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.5...v0.261.6</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1161">
                    atom/settings-view#1161 - Use marked instead of roaster +
                    update marked
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="tree-view"
                  className="anchor"
                  href="https://atom.io/releases#tree-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/tree-view">tree-view</Link>
              </Heading>
              <Text as="p">v0.228.0...v0.228.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1315">
                    atom/tree-view#1315 - Always show Tree View
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1333">
                    atom/tree-view#1333 - Typo in Settings
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1354">
                    atom/tree-view#1354 - ⬆️ pathwatcher@8.1.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/tree-view/pull/1358">
                    atom/tree-view#1358 - Fix Uncaught Error: ENOENT: no such
                    file or directory
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.52.0">
                  v1.52.0 <Text className="release-date">(2020-10-13)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21079">
                    https://github.com/atom/atom/pull/21079
                  </Link>
                  - Upgrade to electron 6 🎉
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20212">
                    https://github.com/atom/atom/pull/20212
                  </Link>
                  - Support semantic highlighting on tree-sitter grammars
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/394">
                    https://github.com/atom/language-php/pull/394
                  </Link>
                  - Improve php syntax highlighting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/318">
                    https://github.com/atom/language-python/pull/318
                  </Link>
                  - Improve python syntax highlighting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.51.0...1.52.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21095">
                    atom/atom#21095 - ⬆️ find-and-replace@0.219.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21096">
                    atom/atom#21096 - ⬆️ settings-view@0.261.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20212">
                    atom/atom#20212 - Support semanticolor
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21179">
                    atom/atom#21179 - Bump language-php to 0.44.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21079">
                    atom/atom#21079 - Electron 6 Take Two
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21198">
                    atom/atom#21198 - ⬆️ language-python@0.53.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21248">
                    atom/atom#21248 - ⬆️ language-php@0.44.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21230">
                    atom/atom#21230 - CI build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21230">
                    atom/atom#21230 - CI build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21264">
                    atom/atom#21264 - CI build template patch
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21264">
                    atom/atom#21264 - CI build template patch
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21267">
                    atom/atom#21267 - Revert build template
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.3...v0.219.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1128">
                    atom/find-and-replace#1128 - Fix broken replace all function
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.4...v0.261.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1156">
                    atom/settings-view#1156 - Fix scroll in package settings
                    pane
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.44.5...v0.44.7</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/394">
                    atom/language-php#394 - Fix meta.use end regex
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/399">
                    atom/language-php#399 - Fix multiline ternary, add named
                    arguments
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-python"
                  className="anchor"
                  href="https://atom.io/releases#language-python"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-python">
                  language-python
                </Link>
              </Heading>
              <Text as="p">v0.53.4...v0.53.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/318">
                    atom/language-python#318 - Added async (line 851)
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.52.0-beta0">
                  v1.52.0-beta0
                  <Text className="release-date">(2020-09-09)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21079">
                    https://github.com/atom/atom/pull/21079
                  </Link>
                  - Upgrade to electron 6 🎉
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20212">
                    https://github.com/atom/atom/pull/20212
                  </Link>
                  - Support semantic highlighting on tree-sitter grammars
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/394">
                    https://github.com/atom/language-php/pull/394
                  </Link>
                  - Improve php syntax highlighting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/318">
                    https://github.com/atom/language-python/pull/318
                  </Link>
                  - Improve python syntax highlighting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.51.0...1.52.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21095">
                    atom/atom#21095 - ⬆️ find-and-replace@0.219.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21096">
                    atom/atom#21096 - ⬆️ settings-view@0.261.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20212">
                    atom/atom#20212 - Support semanticolor
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21179">
                    atom/atom#21179 - Bump language-php to 0.44.6
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21079">
                    atom/atom#21079 - Electron 6 Take Two
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21198">
                    atom/atom#21198 - ⬆️ language-python@0.53.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21248">
                    atom/atom#21248 - ⬆️ language-php@0.44.7
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21230">
                    atom/atom#21230 - CI build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21230">
                    atom/atom#21230 - CI build template
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21264">
                    atom/atom#21264 - CI build template patch
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21264">
                    atom/atom#21264 - CI build template patch
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21267">
                    atom/atom#21267 - Revert build template
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="find-and-replace"
                  className="anchor"
                  href="https://atom.io/releases#find-and-replace"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/find-and-replace">
                  find-and-replace
                </Link>
              </Heading>
              <Text as="p">v0.219.3...v0.219.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/find-and-replace/pull/1128">
                    atom/find-and-replace#1128 - Fix broken replace all function
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.4...v0.261.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1156">
                    atom/settings-view#1156 - Fix scroll in package settings
                    pane
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.44.5...v0.44.7</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/394">
                    atom/language-php#394 - Fix meta.use end regex
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/399">
                    atom/language-php#399 - Fix multiline ternary, add named
                    arguments
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-python"
                  className="anchor"
                  href="https://atom.io/releases#language-python"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-python">
                  language-python
                </Link>
              </Heading>
              <Text as="p">v0.53.4...v0.53.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-python/pull/318">
                    atom/language-python#318 - Added async (line 851)
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.51.0">
                  v1.51.0 <Text className="release-date">(2020-09-09)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20899">
                    https://github.com/atom/atom/pull/20899
                  </Link>
                  - Faster listing of available packages
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.50.0...1.51.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21039">
                    atom/atom#21039 - ⬆️ prebuild-install@5.3.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21061">
                    atom/atom#21061 - no PR triggers on release builds
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20856">
                    atom/atom#20856 - Miscellaneous python3-related updates and
                    fixes
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20899">
                    atom/atom#20899 - Faster atom.packages.getAvailablePackages
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.51.0-beta0">
                  v1.51.0-beta0
                  <Text className="release-date">(2020-08-11)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20899">
                    https://github.com/atom/atom/pull/20899
                  </Link>
                  - Improve the performance of getting the list of all available
                  atom packages
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.50.0...1.51.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21039">
                    atom/atom#21039 - ⬆️ prebuild-install@5.3.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21061">
                    atom/atom#21061 - no PR triggers on release builds
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20856">
                    atom/atom#20856 - Miscellaneous python3-related updates and
                    fixes
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20899">
                    atom/atom#20899 - Faster atom.packages.getAvailablePackages
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.50.0">
                  v1.50.0 <Text className="release-date">(2020-08-11)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20804">
                    https://github.com/atom/atom/pull/20804
                  </Link>
                  - Fix multi cursor correct setting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20910">
                    https://github.com/atom/atom/pull/20910
                  </Link>
                  - Add async and await keywords to Rust highlighter
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-gfm/pull/240">
                    https://github.com/atom/language-gfm/pull/240
                  </Link>
                  - Improve GitHub favoured markdown syntax highlighting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/377">
                    https://github.com/atom/language-php/pull/377
                  </Link>
                  - Add support for arrow functions
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/378">
                    https://github.com/atom/language-php/pull/378
                  </Link>
                  - Add support for numeric literal separator
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/379">
                    https://github.com/atom/language-php/pull/379
                  </Link>
                  - Add missing operators: spread, exponentiation, null
                  coalescing
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/380">
                    https://github.com/atom/language-php/pull/380
                  </Link>
                  - Add support for typed properties, anonymous classNamees,
                  object serialization
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/384">
                    https://github.com/atom/language-php/pull/384
                  </Link>
                  - Fix parsing className with capital letter after instanceof
                  correctly
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.49.0...1.50.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20406">
                    atom/atom#20406 - Fix .deb install on ubuntu 20.04
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20716">
                    atom/atom#20716 - Review/finalize Python approach for mid
                    2020
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20804">
                    atom/atom#20804 - fix multi cursor correct setting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20927">
                    atom/atom#20927 - ⬆️ language-gfm@0.90.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20928">
                    atom/atom#20928 - ⬆️ language-typescript@0.6.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20989">
                    atom/atom#20989 - Fix Typos
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20560">
                    atom/atom#20560 - ⬆️ language-php@0.44.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20910">
                    atom/atom#20910 - Add async and await keywords to Rust
                    highlighter
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20999">
                    atom/atom#20999 - Automate dependency bumps
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21041">
                    atom/atom#21041 - ⬆️ resolve@1.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21043">
                    atom/atom#21043 - ⬆️ semver@7.3.2
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-gfm"
                  className="anchor"
                  href="https://atom.io/releases#language-gfm"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-gfm">
                  language-gfm
                </Link>
              </Heading>
              <Text as="p">v0.90.7...v0.90.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-gfm/pull/240">
                    atom/language-gfm#240 - Refactor grammar in order to improve
                    readability and address a bug in syntax highlighting of Atom
                    and GitHub
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.44.4...v0.44.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/377">
                    atom/language-php#377 - Arrow functions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/378">
                    atom/language-php#378 - Numeric literal separator
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/379">
                    atom/language-php#379 - Missing operators: spread,
                    exponentiation, null coalescing
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/380">
                    atom/language-php#380 - Typed properties, anonymous
                    classNamees, object serialization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/384">
                    atom/language-php#384 - Parse className with capitol letter
                    after instanceof correctly
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-typescript"
                  className="anchor"
                  href="https://atom.io/releases#language-typescript"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-typescript">
                  language-typescript
                </Link>
              </Heading>
              <Text as="p">v0.6.2...v0.6.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-typescript/pull/44">
                    atom/language-typescript#44 - fileTypes
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.50.0-beta0">
                  v1.50.0-beta0
                  <Text className="release-date">(2020-07-14)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20804">
                    https://github.com/atom/atom/pull/20804
                  </Link>
                  - Fix multi cursor correct setting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20910">
                    https://github.com/atom/atom/pull/20910
                  </Link>
                  - Add async and await keywords to Rust highlighter
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20406">
                    https://github.com/atom/atom/pull/20406
                  </Link>
                  - Fix can&apos;t install the .deb package in Ubuntu 20.04
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.49.0...1.50.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20406">
                    atom/atom#20406 - Fix .deb install on ubuntu 20.04
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20716">
                    atom/atom#20716 - Review/finalize Python approach for mid
                    2020
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20804">
                    atom/atom#20804 - fix multi cursor correct setting
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20927">
                    atom/atom#20927 - ⬆️ language-gfm@0.90.8
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20928">
                    atom/atom#20928 - ⬆️ language-typescript@0.6.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20989">
                    atom/atom#20989 - Fix Typos
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20560">
                    atom/atom#20560 - ⬆️ language-php@0.44.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20910">
                    atom/atom#20910 - Add async and await keywords to Rust
                    highlighter
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20999">
                    atom/atom#20999 - Automate dependency bumps
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21041">
                    atom/atom#21041 - ⬆️ resolve@1.17.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/21043">
                    atom/atom#21043 - ⬆️ semver@7.3.2
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-gfm"
                  className="anchor"
                  href="https://atom.io/releases#language-gfm"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-gfm">
                  language-gfm
                </Link>
              </Heading>
              <Text as="p">v0.90.7...v0.90.8</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-gfm/pull/240">
                    atom/language-gfm#240 - Refactor grammar in order to improve
                    readability and address a bug in syntax highlighting of Atom
                    and GitHub
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-php"
                  className="anchor"
                  href="https://atom.io/releases#language-php"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-php">
                  language-php
                </Link>
              </Heading>
              <Text as="p">v0.44.4...v0.44.5</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/377">
                    atom/language-php#377 - Arrow functions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/378">
                    atom/language-php#378 - Numeric literal separator
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/379">
                    atom/language-php#379 - Missing operators: spread,
                    exponentiation, null coalescing
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/380">
                    atom/language-php#380 - Typed properties, anonymous
                    classNamees, object serialization
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-php/pull/384">
                    atom/language-php#384 - Parse className with capitol letter
                    after instanceof correctly
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-typescript"
                  className="anchor"
                  href="https://atom.io/releases#language-typescript"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-typescript">
                  language-typescript
                </Link>
              </Heading>
              <Text as="p">v0.6.2...v0.6.3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-typescript/pull/44">
                    atom/language-typescript#44 - fileTypes
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.49.0">
                  v1.49.0 <Text className="release-date">(2020-07-14)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    https://github.com/atom/atom/pull/20799
                  </Link>
                  - Fix <code>chrome-sandbox</code> file permissions on linux
                  distross
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    https://github.com/atom/atom/pull/20855
                  </Link>
                  - Enable webview support
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.48.0...1.49.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20750">
                    atom/atom#20750 - ⬆️ spell-check@0.76.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20741">
                    atom/atom#20741 - Enable WebView on main-process in electron
                    options
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20830">
                    atom/atom#20830 - ⬆️ text-buffer@13.17.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    atom/atom#20799 - Fix <code>chrome-sandbox</code> file
                    permissions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    atom/atom#20855 - Enable webview support with the correct
                    option
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20879">
                    atom/atom#20879 - Use the
                    &quot;ELECTRON_CUSTOM_VERSION&quot; env var in build scripts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20547">
                    atom/atom#20547 - Await configuration loading on Windows
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20804">
                    atom/atom#20804 - fix multi cursor correct setting
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.48.0">
                  v1.48.0 <Text className="release-date">(2020-06-10)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/332">
                    https://github.com/atom/spell-check/pull/332
                  </Link>
                  Fix cannot load the checker for xx-YY
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20703">
                    https://github.com/atom/atom/pull/20703
                  </Link>
                  Upgrade apm to 2.5.0
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20711">
                    https://github.com/atom/atom/pull/20711
                  </Link>
                  Update npm to 6.14.4 for Python 3 support
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20444">
                    https://github.com/atom/atom/pull/20444
                  </Link>
                  Add setting to disable multi cursor on click
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    https://github.com/atom/atom/pull/20799
                  </Link>
                  - Fix <code>chrome-sandbox</code> file permissions on linux
                  distross
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    https://github.com/atom/atom/pull/20855
                  </Link>
                  - Enable webview support
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20614">
                    https://github.com/atom/atom/pull/20614
                  </Link>
                  - Improve Java syntax highlighting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.47.0...1.48.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20614">
                    atom/atom#20614 - ⬆️ language-java@0.31.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20703">
                    atom/atom#20703 - Upgrade apm to 2.5.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20711">
                    atom/atom#20711 - script: Update npm to 6.14.4 for Python 3
                    support
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20444">
                    atom/atom#20444 - feat: add setting to disable multi cursor
                    on click
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    atom/atom#20799 - Fix <code>chrome-sandbox</code> file
                    permissions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    atom/atom#20855 - Enable webview support with the correct
                    option
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.49.0-beta0">
                  v1.49.0-beta0
                  <Text className="release-date">(2020-06-10)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    https://github.com/atom/atom/pull/20799
                  </Link>
                  - Fix <code>chrome-sandbox</code> file permissions on linux
                  distross
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    https://github.com/atom/atom/pull/20855
                  </Link>
                  - Enable webview support
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.48.0...1.49.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20750">
                    atom/atom#20750 - ⬆️ spell-check@0.76.1
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20741">
                    atom/atom#20741 - Enable WebView on main-process in electron
                    options
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20830">
                    atom/atom#20830 - ⬆️ text-buffer@13.17.3
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20799">
                    atom/atom#20799 - Fix <code>chrome-sandbox</code> file
                    permissions
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20855">
                    atom/atom#20855 - Enable webview support with the correct
                    option
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20879">
                    atom/atom#20879 - Use the
                    &quot;ELECTRON_CUSTOM_VERSION&quot; env var in build scripts
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20547">
                    atom/atom#20547 - Await configuration loading on Windows
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.48.0-beta0">
                  v1.48.0-beta0
                  <Text className="release-date">(2020-05-19)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/332">
                    https://github.com/atom/spell-check/pull/332
                  </Link>
                  Fix cannot load the checker for xx-YY
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20703">
                    https://github.com/atom/atom/pull/20703
                  </Link>
                  Upgrade apm to 2.5.0
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20711">
                    https://github.com/atom/atom/pull/20711
                  </Link>
                  Update npm to 6.14.4 for Python 3 support
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20444">
                    https://github.com/atom/atom/pull/20444
                  </Link>
                  Add setting to disable multi cursor on click
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.47.0...1.48.0-beta0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20614">
                    atom/atom#20614 - ⬆️ language-java@0.31.5
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20703">
                    atom/atom#20703 - Upgrade apm to 2.5.0
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20711">
                    atom/atom#20711 - script: Update npm to 6.14.4 for Python 3
                    support
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20444">
                    atom/atom#20444 - feat: add setting to disable multi cursor
                    on click
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box className="release">
              <Heading as="h2">
                <Link href="https://github.com/atom/atom/releases/tag/v1.47.0">
                  v1.47.0 <Text className="release-date">(2020-05-19)</Text>
                </Link>
              </Heading>
              <Heading as="h2">
                <Link
                  id="notable-changes"
                  className="anchor"
                  href="https://atom.io/releases#notable-changes"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                Notable Changes
              </Heading>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/332">
                    https://github.com/atom/spell-check/pull/332
                  </Link>
                  Fix cannot load the checker for xx-YY
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20172">
                    https://github.com/atom/atom/pull/20172
                  </Link>
                  Upgrade to electron 5.0.12 🎉
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19862">
                    https://github.com/atom/atom/pull/19862
                  </Link>
                  Add overlay when resizing panels to prevent panes stealing
                  focus
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-c/pull/330">
                    https://github.com/atom/language-c/pull/330
                  </Link>
                  Improve C++ syntax highlighting
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/276">
                    https://github.com/atom/language-ruby/pull/276
                  </Link>
                  Improve Ruby syntax highlighting
                </Box>
              </Box>

              <Heading as="h3">
                <Link
                  id="atom-core"
                  className="anchor"
                  href="https://atom.io/releases#atom-core"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/atom">Atom Core</Link>
              </Heading>
              <Text as="p">v1.46.0...1.47.0</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20494">
                    atom/atom#20494 - Bump Azure Devops Windows images to
                    version vs2017-win2016
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20172">
                    atom/atom#20172 - Upgrade to electron 5.0.12
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20559">
                    atom/atom#20559 - ⬆️settings-view@0.261.4
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/19862">
                    atom/atom#19862 - Add overlay when resizing panels to
                    prevent panes stealing focus
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20406">
                    atom/atom#20406 - Fix .deb install on ubuntu 20.04
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20347">
                    atom/atom#20347 - If Text Editor Component uses the scroll
                    event, consume it / prevent bubbling
                  </Link>
                </Box>
                <Box as="li">
                  <Link href="https://github.com/atom/atom/pull/20750">
                    atom/atom#20750 - ⬆️ spell-check@0.76.1
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="fuzzy-finder"
                  className="anchor"
                  href="https://atom.io/releases#fuzzy-finder"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/fuzzy-finder">
                  fuzzy-finder
                </Link>
              </Heading>
              <Text as="p">v1.14.1...v1.14.2</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/fuzzy-finder/pull/409">
                    atom/fuzzy-finder#409 - ⬆️@atom/fuzzy-native@1.1.2
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="github"
                  className="anchor"
                  href="https://atom.io/releases#github"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/github">github</Link>
              </Heading>
              <Text as="p">v0.34.1-3...v0.34.2-3</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/github/pull/2413">
                    atom/github#2413 - Fixes failing tests on electron 5
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="settings-view"
                  className="anchor"
                  href="https://atom.io/releases#settings-view"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/settings-view">
                  settings-view
                </Link>
              </Heading>
              <Text as="p">v0.261.3...v0.261.4</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/settings-view/pull/1146">
                    atom/settings-view#1146 - color .setting-description
                    alignment
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="snippets"
                  className="anchor"
                  href="https://atom.io/releases#snippets"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/snippets">snippets</Link>
              </Heading>
              <Text as="p">v1.5.0...v1.5.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/snippets/pull/299">
                    atom/snippets#299 - Decaf the tests (2nd attempt)
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="spell-check"
                  className="anchor"
                  href="https://atom.io/releases#spell-check"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/spell-check">
                  spell-check
                </Link>
              </Heading>
              <Text as="p">v0.76.0...v0.76.1</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/spell-check/pull/332">
                    atom/spell-check#332 - Fix issues with Windows and Mac
                    checking, reduce noise
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-c"
                  className="anchor"
                  href="https://atom.io/releases#language-c"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-c">
                  language-c
                </Link>
              </Heading>
              <Text as="p">v0.60.18...v0.60.19</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-c/pull/330">
                    atom/language-c#330 - Scopes after tree-sitter-c and
                    tree-sitter-cpp
                  </Link>
                </Box>
              </Box>
              <Heading as="h3">
                <Link
                  id="language-ruby"
                  className="anchor"
                  href="https://atom.io/releases#language-ruby"
                  aria-hidden="true"
                >
                  <LinkIcon size={16} />
                </Link>
                <Link href="https://github.com/atom/language-ruby">
                  language-ruby
                </Link>
              </Heading>
              <Text as="p">v0.72.22...v0.72.23</Text>
              <Box as="ul">
                <Box as="li">
                  <Link href="https://github.com/atom/language-ruby/pull/276">
                    atom/language-ruby#276 - [tree-sitter] add variable
                    identifier support in assignments expressions
                  </Link>
                </Box>
              </Box>
            </Box>
            <hr />
          </Box>
        </PageLayout.Content>

        <PageLayout.Footer>
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
