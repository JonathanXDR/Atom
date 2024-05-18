'use client';
import { LinkIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';
import './FAQContent.css';

const FAQContent: React.FC = () => {
  return (
    <Box className="markdown-body document-content">
      <Heading as="h2">
        <Link
          id="faq"
          className="anchor"
          href="/flight-manual/faq/#faq"
          aria-hidden="true"
        >
          <LinkIcon size={16} />
        </Link>
        FAQ
      </Heading>

      <Text as="p">
        The collection of Frequently Asked Questions about Atom.
      </Text>

      <Box as="ul">
        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/is-atom-open-source">
            Is Atom open source?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/what-does-atom-cost">
            What does Atom cost?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/what-platforms-does-atom-run-on">
            What platforms does Atom run on?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-can-i-contribute-to-atom">
            How can I contribute to Atom?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/why-does-atom-collect-usage-data">
            Why does Atom collect usage data?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/atom-in-the-cloud">
            Atom in the cloud?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
            What&apos;s the difference between an IDE and an editor?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
            How can I tell if subpixel antialiasing is working?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
            Why is Atom deleting trailing whitespace? Why is there a newline at
            the end of the file?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/what-does-safe-mode-do">
            What does Safe Mode do?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
            I have a question about a specific Atom community package. Where is
            the best place to ask it?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
            I&apos;m using an international keyboard and keys that use AltGr or
            Ctrl+Alt aren&apos;t working
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
            I&apos;m having a problem with Julia! What do I do?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
            I&apos;m getting an error about a “self-signed certificate”. What do
            I do?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
            I&apos;m having a problem with PlatformIO! What do I do?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
            How do I make Atom recognize a file with extension X as language Y?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
            How do I make the Welcome screen stop showing up?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-preview-web-page-changes-automatically">
            How do I preview web page changes automatically?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
            How do I accept input from my program or script when using the
            script package?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
            I am unable to update to the latest version of Atom on macOS. How do
            I fix this?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
            I&apos;m trying to change my syntax colors from styles.less, but it
            isn&apos;t working!
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
            How do I build or execute code I&apos;ve written in Atom?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-uninstall-atom-on-macos">
            How do I uninstall Atom on macOS?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/macos-mojave-font-rendering-change">
            macOS Mojave font rendering change
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
            Why does macOS say that Atom wants to access my calendar, contacts,
            photos, etc.?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-turn-on-line-wrap">
            How do I turn on line wrap?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
            The menu bar disappeared, how do I get it back?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
            How do I use a newline in the result of find and replace?
          </Link>
        </Box>

        <Box
          as="li"
          className="unselected"
          sx={{
            padding: '1px 1px 1px 15px',
          }}
        >
          <Link href="/flight-manual/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
            What is this line on the right in the editor view?
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQContent;
