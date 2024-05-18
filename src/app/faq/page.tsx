'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import VersionPickerLegacy from '@/components/legacy/VersionPickerLegacy/VersionPickerLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import versions from '@/data/versions.json';
import {
  DeviceDesktopIcon,
  LinkIcon,
  PencilIcon,
} from '@primer/octicons-react';
import {
  Box,
  FormControl,
  Heading,
  PageLayout,
  Text,
  TextInput,
} from '@primer/react';
import Link from 'next/link';

export default function FAQ() {
  return (
    <>
      <NavLegacy nav={nav} />
      <PageLayout containerWidth="full" padding="normal">
        <PageLayout.Header
          sx={{
            marginBottom: 6,
          }}
        >
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flex: '1 1 100%',
              flexWrap: 'wrap',
              maxWidth: '100%',
            }}
          >
            <FormControl
              sx={{
                width: 'var(--pane-width)',
                overflow: 'auto',
                '--pane-width': '320px',
                '--pane-min-width': '256px',
                '--pane-max-width': 'calc(100vw - var(--pane-max-width-diff))',
                '--pane-max-width-diff': '959px',
              }}
            >
              <FormControl.Label visuallyHidden>Versions</FormControl.Label>
              <VersionPickerLegacy versions={versions} />
            </FormControl>

            <FormControl
              sx={{
                width: 'auto',
                flexBasis: 0,
                flexGrow: 1,
                flexShrink: 1,
              }}
            >
              <FormControl.Label visuallyHidden>
                Search the Flight Manual
              </FormControl.Label>
              <TextInput
                size="large"
                placeholder="Search the Flight Manual"
                sx={{
                  width: '100%',
                }}
              />
            </FormControl>
          </Box>
          <Box
            className="autocomplete-results"
            sx={{
              display: 'none',
            }}
          >
            <Box className="result-group"></Box>
          </Box>
        </PageLayout.Header>
        <PageLayout.Content
          padding="none"
          width="large"
          sx={{
            paddingTop: '0 !important',
          }}
        >
          <Box className="documents">
            <Heading as="h1" className="document-title">
              <Box id="platform-nav">
                <DeviceDesktopIcon />
                <Box as="ul">
                  <Box as="li" className="platform-mac">
                    <Link
                      href="https://flight-manual.atom.io/faq/#platform-mac"
                      data-platform="mac"
                    >
                      mac
                    </Link>
                  </Box>
                  <Box as="li" className="platform-windows">
                    <Link
                      href="https://flight-manual.atom.io/faq/#platform-windows"
                      data-platform="windows"
                    >
                      windows
                    </Link>
                  </Box>
                  <Box as="li" className="platform-linux">
                    <Link
                      href="https://flight-manual.atom.io/faq/#platform-linux"
                      data-platform="linux"
                    >
                      linux
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Link
                className="improve-link"
                href="https://github.com/atom/flight-manual.atom.io/edit/master/content/faq/index.md"
                data-proofer-ignore=""
              >
                <PencilIcon size={16} /> Improve this page
              </Link>
            </Heading>
            <Box className="markdown-body document-content">
              <Heading as="h2">
                <Link
                  id="faq"
                  className="anchor"
                  href="https://flight-manual.atom.io/faq/#faq"
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
                  <Link href="https://flight-manual.atom.io/faq/sections/is-atom-open-source">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/what-does-atom-cost">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/what-platforms-does-atom-run-on">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-contribute-to-atom">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/why-does-atom-collect-usage-data">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/atom-in-the-cloud">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
                    Why is Atom deleting trailing whitespace? Why is there a
                    newline at the end of the file?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/what-does-safe-mode-do">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
                    I have a question about a specific Atom community package.
                    Where is the best place to ask it?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
                    I&apos;m using an international keyboard and keys that use
                    AltGr or Ctrl+Alt aren&apos;t working
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
                    I&apos;m getting an error about a “self-signed certificate”.
                    What do I do?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
                    How do I make Atom recognize a file with extension X as
                    language Y?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-preview-web-page-changes-automatically">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
                    How do I accept input from my program or script when using
                    the script package?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
                    I am unable to update to the latest version of Atom on
                    macOS. How do I fix this?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
                    I&apos;m trying to change my syntax colors from styles.less,
                    but it isn&apos;t working!
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-uninstall-atom-on-macos">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/macos-mojave-font-rendering-change">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
                    Why does macOS say that Atom wants to access my calendar,
                    contacts, photos, etc.?
                  </Link>
                </Box>

                <Box
                  as="li"
                  className="unselected"
                  sx={{
                    padding: '1px 1px 1px 15px',
                  }}
                >
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-turn-on-line-wrap">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
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
                  <Link href="https://flight-manual.atom.io/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
                    What is this line on the right in the editor view?
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </PageLayout.Content>
        <PageLayout.Pane
          sticky
          resizable
          position="start"
          padding="none"
          width="large"
        >
          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/getting-started" muted>
              Chapter 1: Getting Started
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/getting-started/sections/why-atom">
                Why Atom?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/getting-started/sections/installing-atom">
                Installing Atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/getting-started/sections/atom-basics">
                Atom Basics
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/getting-started/sections/summary">
                Summary
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/using-atom">
              Chapter 2: Using Atom
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/atom-packages">
                Atom Packages
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/moving-in-atom">
                Moving in Atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/atom-selections">
                Atom Selections
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/editing-and-deleting-text">
                Editing and Deleting Text
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/find-and-replace">
                Find and Replace
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/snippets">
                Snippets
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/autocomplete">
                Autocomplete
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/folding">
                Folding
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/panes">
                Panes
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/pending-pane-items">
                Pending Pane Items
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/grammar">
                Grammar
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/version-control-in-atom">
                Version Control in Atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/github-package">
                GitHub package
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/writing-in-atom">
                Writing in Atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/basic-customization">
                Basic Customization
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/using-atom/sections/summary">
                Summary
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/hacking-atom">
              Chapter 3: Hacking Atom
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/tools-of-the-trade">
                Tools of the Trade
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/the-init-file">
                The Init File
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-word-count">
                Package: Word Count
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text">
                Package: Modifying Text
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-active-editor-info">
                Package: Active Editor Info
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-theme">
                Creating a Theme
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-grammar">
                Creating a Grammar
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-legacy-textmate-grammar">
                Creating a Legacy TextMate Grammar
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/publishing">
                Publishing
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/iconography">
                Iconography
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/debugging">
                Debugging
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/writing-specs">
                Writing specs
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/handling-uris">
                Handling URIs
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility">
                Cross-Platform Compatibility
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/converting-from-textmate">
                Converting from TextMate
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core">
                Hacking on Atom Core
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/contributing-to-official-atom-packages">
                Contributing to Official Atom Packages
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-fork-of-a-core-package-in-atom-atom">
                Creating a Fork of a Core Package in atom/atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/maintaining-a-fork-of-a-core-package-in-atom-atom">
                Maintaining a Fork of a Core Package in atom/atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/hacking-atom/sections/summary">
                Summary
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/behind-atom">
              Chapter 4: Behind Atom
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/configuration-api">
                Configuration API
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth">
                Keymaps In-Depth
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors">
                Scoped Settings, Scopes and Scope Descriptors
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/serialization-in-atom">
                Serialization in Atom
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/developing-node-modules">
                Developing Node Modules
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services">
                Interacting With Other Packages Via Services
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/maintaining-your-packages">
                Maintaining Your Packages
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/how-atom-uses-chromium-snapshots">
                How Atom Uses Chromium Snapshots
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/behind-atom/sections/summary">
                Summary
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/api/v1.57.0/">
              Reference: API
            </Link>
          </Heading>
          <Box as="ul">
            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/AtomEnvironment/">
                AtomEnvironment
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/BufferedNodeProcess/">
                BufferedNodeProcess
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/BufferedProcess/">
                BufferedProcess
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Clipboard/">
                Clipboard
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Color/">
                Color
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/CommandRegistry/">
                CommandRegistry
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/CompositeDisposable/">
                CompositeDisposable
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Config/">
                Config
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/ContextMenuManager/">
                ContextMenuManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Cursor/">
                Cursor
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Decoration/">
                Decoration
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/DeserializerManager/">
                DeserializerManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Directory/">
                Directory
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/DisplayMarker/">
                DisplayMarker
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/DisplayMarkerLayer/">
                DisplayMarkerLayer
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Disposable/">
                Disposable
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Dock/">
                Dock
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Emitter/">
                Emitter
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/File/">
                File
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/GitRepository/">
                GitRepository
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Grammar/">
                Grammar
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/GrammarRegistry/">
                GrammarRegistry
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Gutter/">
                Gutter
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/HistoryManager/">
                HistoryManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/KeymapManager/">
                KeymapManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/LayerDecoration/">
                LayerDecoration
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/MarkerLayer/">
                MarkerLayer
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/MenuManager/">
                MenuManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Notification/">
                Notification
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/NotificationManager/">
                NotificationManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Package/">
                Package
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/PackageManager/">
                PackageManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Pane/">
                Pane
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Panel/">
                Panel
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/PathWatcher/">
                PathWatcher
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Point/">
                Point
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Project/">
                Project
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Range/">
                Range
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/ScopeDescriptor/">
                ScopeDescriptor
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Selection/">
                Selection
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/StyleManager/">
                StyleManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Task/">
                Task
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/TextBuffer/">
                TextBuffer
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/TextEditor/">
                TextEditor
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/ThemeManager/">
                ThemeManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/TooltipManager/">
                TooltipManager
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/ViewRegistry/">
                ViewRegistry
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/Workspace/">
                Workspace
              </Link>
            </Box>

            <Box as="li">
              <Link href="https://flight-manual.atom.io/api/v1.57.0/WorkspaceCenter/">
                WorkspaceCenter
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/resources">
              Appendix A: Resources
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/resources/sections/glossary">
                Glossary
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/faq">
              Appendix B: FAQ
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/is-atom-open-source">
                Is Atom open source?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/what-does-atom-cost">
                What does Atom cost?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/what-platforms-does-atom-run-on">
                What platforms does Atom run on?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-contribute-to-atom">
                How can I contribute to Atom?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/why-does-atom-collect-usage-data">
                Why does Atom collect usage data?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/atom-in-the-cloud">
                Atom in the cloud?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
                What&apos;s the difference between an IDE and an editor?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
                How can I tell if subpixel antialiasing is working?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
                Why is Atom deleting trailing whitespace? Why is there a newline
                at the end of the file?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/what-does-safe-mode-do">
                What does Safe Mode do?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
                I have a question about a specific Atom community package. Where
                is the best place to ask it?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
                I&apos;m using an international keyboard and keys that use AltGr
                or Ctrl+Alt aren&apos;t working
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
                I&apos;m having a problem with Julia! What do I do?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
                I&apos;m getting an error about a “self-signed certificate”.
                What do I do?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
                I&apos;m having a problem with PlatformIO! What do I do?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
                How do I make Atom recognize a file with extension X as language
                Y?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
                How do I make the Welcome screen stop showing up?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-preview-web-page-changes-automatically">
                How do I preview web page changes automatically?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
                How do I accept input from my program or script when using the
                script package?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
                I am unable to update to the latest version of Atom on macOS.
                How do I fix this?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
                I&apos;m trying to change my syntax colors from styles.less, but
                it isn&apos;t working!
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
                How do I build or execute code I&apos;ve written in Atom?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-uninstall-atom-on-macos">
                How do I uninstall Atom on macOS?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/macos-mojave-font-rendering-change">
                macOS Mojave font rendering change
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
                Why does macOS say that Atom wants to access my calendar,
                contacts, photos, etc.?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-turn-on-line-wrap">
                How do I turn on line wrap?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
                The menu bar disappeared, how do I get it back?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
                How do I use a newline in the result of find and replace?
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
                What is this line on the right in the editor view?
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/shadow-dom">
              Appendix C: Shadow DOM
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/shadow-dom/sections/removing-shadow-dom-styles">
                Removing Shadow DOM styles
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis">
              Appendix D: Upgrading to 1.0 APIs
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-package">
                Upgrading Your Package
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-ui-theme-or-package-selectors">
                Upgrading Your UI Theme Or Package Selectors
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-syntax-theme">
                Upgrading Your Syntax Theme
              </Link>
            </Box>
          </Box>

          <Heading
            as="h4"
            sx={{
              fontSize: 2,
            }}
          >
            <Link href="https://flight-manual.atom.io/atom-server-side-apis">
              Appendix E: Atom server-side APIs
            </Link>
          </Heading>
          <Box as="ul">
            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-package-server-api">
                Atom package server API
              </Link>
            </Box>

            <Box
              as="li"
              className="unselected"
              sx={{
                padding: '1px 1px 1px 30px',
                textIndent: '-15px',
              }}
            >
              <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-update-server-api">
                Atom update server API
              </Link>
            </Box>
          </Box>
        </PageLayout.Pane>
      </PageLayout>
      <FooterLegacy footer={footer} />
    </>
  );
}
