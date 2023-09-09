'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import nav from '@/data/nav.json';
import {
  DeviceDesktopIcon,
  LinkIcon,
  PencilIcon,
  TriangleDownIcon,
} from '@primer/octicons-react';
import {
  Box,
  Button,
  FormControl,
  Heading,
  SelectPanel,
  Text,
  TextInput,
} from '@primer/react';
import Link from 'next/link';
import React from 'react';

export default function FAQ() {
  type Token = {
    text: string;
    id: number;
  };

  const versions = [
    { text: '1.63.1', id: 165 },
    { text: '1.63.0', id: 164 },
    { text: '1.62.0', id: 163 },
    { text: '1.61.0', id: 162 },
    { text: '1.60.0', id: 161 },
    { text: '1.59.0', id: 160 },
    { text: '1.58.0', id: 159 },
    { text: '1.57.0', id: 158 },
    { text: '1.56.0', id: 157 },
    { text: '1.55.0', id: 156 },
    { text: '1.54.0', id: 155 },
    { text: '1.53.0', id: 154 },
    { text: '1.52.0', id: 153 },
    { text: '1.51.0', id: 152 },
    { text: '1.50.0', id: 151 },
    { text: '1.49.0', id: 150 },
    { text: '1.48.0', id: 149 },
    { text: '1.47.0', id: 148 },
    { text: '1.46.0', id: 147 },
    { text: '1.45.0', id: 146 },
    { text: '1.44.0', id: 145 },
    { text: '1.43.0', id: 144 },
    { text: '1.42.0', id: 143 },
    { text: '1.41.0', id: 142 },
    { text: '1.40.1', id: 141 },
    { text: '1.40.0', id: 140 },
    { text: '1.39.1', id: 139 },
    { text: '1.39.0', id: 138 },
    { text: '1.38.2', id: 137 },
    { text: '1.38.1', id: 136 },
    { text: '1.38.0', id: 135 },
    { text: '1.37.0', id: 134 },
    { text: '1.36.1', id: 133 },
    { text: '1.36.0', id: 132 },
    { text: '1.35.1', id: 131 },
    { text: '1.35.0', id: 130 },
    { text: '1.34.0', id: 129 },
    { text: '1.33.1', id: 128 },
    { text: '1.33.0', id: 127 },
    { text: '1.32.2', id: 126 },
    { text: '1.32.1', id: 125 },
    { text: '1.32.0', id: 124 },
    { text: '1.31.2', id: 123 },
    { text: '1.31.1', id: 122 },
    { text: '1.31.0', id: 121 },
    { text: '1.30.0', id: 120 },
    { text: '1.29.0', id: 119 },
    { text: '1.28.2', id: 118 },
    { text: '1.28.1', id: 117 },
    { text: '1.28.0', id: 116 },
    { text: '1.27.2', id: 115 },
    { text: '1.27.1', id: 114 },
    { text: '1.27.0', id: 113 },
    { text: '1.26.1', id: 112 },
    { text: '1.26.0', id: 111 },
    { text: '1.25.1', id: 110 },
    { text: '1.25.0', id: 109 },
    { text: '1.24.1', id: 108 },
    { text: '1.24.0', id: 107 },
    { text: '1.23.3', id: 106 },
    { text: '1.23.2', id: 105 },
    { text: '1.23.1', id: 104 },
    { text: '1.23.0', id: 103 },
    { text: '1.22.1', id: 102 },
    { text: '1.22.0', id: 101 },
    { text: '1.21.2', id: 100 },
    { text: '1.21.1', id: 99 },
    { text: '1.21.0', id: 98 },
    { text: '1.20.1', id: 97 },
    { text: '1.20.0', id: 96 },
    { text: '1.19.7', id: 95 },
    { text: '1.19.6', id: 94 },
    { text: '1.19.5', id: 93 },
    { text: '1.19.4', id: 92 },
    { text: '1.19.3', id: 91 },
    { text: '1.19.2', id: 90 },
    { text: '1.19.1', id: 89 },
    { text: '1.19.0', id: 88 },
    { text: '1.18.0', id: 87 },
    { text: '1.17.2', id: 86 },
    { text: '1.17.1', id: 85 },
    { text: '1.17.0', id: 84 },
    { text: '1.16.0', id: 83 },
    { text: '1.15.0', id: 82 },
    { text: '1.14.4', id: 81 },
    { text: '1.14.3', id: 80 },
    { text: '1.14.2', id: 79 },
    { text: '1.14.1', id: 78 },
    { text: '1.14.0', id: 77 },
    { text: '1.13.1', id: 76 },
    { text: '1.13.0', id: 75 },
    { text: '1.12.9', id: 74 },
    { text: '1.12.8', id: 73 },
    { text: '1.12.7', id: 72 },
    { text: '1.12.6', id: 71 },
    { text: '1.12.5', id: 70 },
    { text: '1.12.4', id: 69 },
    { text: '1.12.3', id: 68 },
    { text: '1.12.2', id: 67 },
    { text: '1.12.1', id: 66 },
    { text: '1.12.0', id: 65 },
    { text: '1.11.2', id: 64 },
    { text: '1.11.1', id: 63 },
    { text: '1.11.0', id: 62 },
    { text: '1.10.2', id: 61 },
    { text: '1.10.1', id: 60 },
    { text: '1.10.0', id: 59 },
    { text: '1.9.9', id: 58 },
    { text: '1.9.8', id: 57 },
    { text: '1.9.7', id: 56 },
    { text: '1.9.6', id: 55 },
    { text: '1.9.5', id: 54 },
    { text: '1.9.4', id: 53 },
    { text: '1.9.3', id: 52 },
    { text: '1.9.2', id: 51 },
    { text: '1.9.1', id: 50 },
    { text: '1.9.0', id: 49 },
    { text: '1.8.0', id: 48 },
    { text: '1.7.4', id: 47 },
    { text: '1.7.3', id: 46 },
    { text: '1.7.2', id: 45 },
    { text: '1.7.1', id: 44 },
    { text: '1.7.0', id: 43 },
    { text: '1.6.2', id: 42 },
    { text: '1.6.1', id: 41 },
    { text: '1.6.0', id: 40 },
    { text: '1.5.4', id: 39 },
    { text: '1.5.3', id: 38 },
    { text: '1.5.2', id: 37 },
    { text: '1.5.1', id: 36 },
    { text: '1.5.0', id: 35 },
    { text: '1.4.3', id: 34 },
    { text: '1.4.2', id: 33 },
    { text: '1.4.1', id: 32 },
    { text: '1.4.0', id: 31 },
    { text: '1.3.3', id: 30 },
    { text: '1.3.2', id: 29 },
    { text: '1.3.1', id: 28 },
    { text: '1.3.0', id: 27 },
    { text: '1.2.4', id: 26 },
    { text: '1.2.3', id: 25 },
    { text: '1.2.2', id: 24 },
    { text: '1.2.1', id: 23 },
    { text: '1.2.0', id: 22 },
    { text: '1.1.0', id: 21 },
    { text: '1.0.19', id: 20 },
    { text: '1.0.18', id: 19 },
    { text: '1.0.17', id: 18 },
    { text: '1.0.16', id: 17 },
    { text: '1.0.15', id: 16 },
    { text: '1.0.14', id: 15 },
    { text: '1.0.13', id: 14 },
    { text: '1.0.12', id: 13 },
    { text: '1.0.11', id: 12 },
    { text: '1.0.10', id: 11 },
    { text: '1.0.9', id: 10 },
    { text: '1.0.8', id: 9 },
    { text: '1.0.7', id: 8 },
    { text: '1.0.6', id: 7 },
    { text: '1.0.5', id: 6 },
    { text: '1.0.4', id: 5 },
    { text: '1.0.3', id: 4 },
    { text: '1.0.2', id: 3 },
    { text: '1.0.1', id: 2 },
    { text: '1.0.0', id: 1 },
  ];

  const VersionPicker = () => {
    const [selected, setSelected] = React.useState<Token | undefined>(
      versions[0]
    );
    const [filter, setFilter] = React.useState('');
    const filteredItems = versions.filter((version) =>
      version.text.toLowerCase().startsWith(filter.toLowerCase())
    );
    const [open, setOpen] = React.useState(false);

    return (
      <SelectPanel
        renderAnchor={({ children, ...anchorProps }) => (
          <Button
            size="large"
            trailingAction={TriangleDownIcon}
            {...anchorProps}
          >
            {children || 'Select version'}
          </Button>
        )}
        placeholderText="Search versions"
        open={open}
        onOpenChange={setOpen}
        items={filteredItems}
        selected={selected}
        onSelectedChange={setSelected}
        onFilterChange={setFilter}
        showItemDividers={true}
        overlayProps={{ width: 'small', height: 'xsmall' }}
      />
    );
  };

  return (
    <Box className="layout-article platform-switch platform-mac">
      <Box className="footer-push">
        <NavLegacy pages={nav.pages} />

        <Box className="wrapper documents content-push wide">
          <Box
            className="documents-search"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <FormControl>
              <FormControl.Label visuallyHidden>Versions</FormControl.Label>
              <VersionPicker />
            </FormControl>

            <FormControl
              sx={{
                width: '100%',
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
          <Box className="toc">
            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/getting-started">
                Chapter 1: Getting Started
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/why-atom">
                  Why Atom?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/installing-atom">
                  Installing Atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/atom-basics">
                  Atom Basics
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/summary">
                  Summary
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/using-atom">
                Chapter 2: Using Atom
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/atom-packages">
                  Atom Packages
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/moving-in-atom">
                  Moving in Atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/atom-selections">
                  Atom Selections
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/editing-and-deleting-text">
                  Editing and Deleting Text
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/find-and-replace">
                  Find and Replace
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/snippets">
                  Snippets
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/autocomplete">
                  Autocomplete
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/folding">
                  Folding
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/panes">
                  Panes
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/pending-pane-items">
                  Pending Pane Items
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/grammar">
                  Grammar
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/version-control-in-atom">
                  Version Control in Atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/github-package">
                  GitHub package
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/writing-in-atom">
                  Writing in Atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/basic-customization">
                  Basic Customization
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/summary">
                  Summary
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/hacking-atom">
                Chapter 3: Hacking Atom
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/tools-of-the-trade">
                  Tools of the Trade
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/the-init-file">
                  The Init File
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-word-count">
                  Package: Word Count
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text">
                  Package: Modifying Text
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-active-editor-info">
                  Package: Active Editor Info
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-theme">
                  Creating a Theme
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-grammar">
                  Creating a Grammar
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-legacy-textmate-grammar">
                  Creating a Legacy TextMate Grammar
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/publishing">
                  Publishing
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/iconography">
                  Iconography
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/debugging">
                  Debugging
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/writing-specs">
                  Writing specs
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/handling-uris">
                  Handling URIs
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility">
                  Cross-Platform Compatibility
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/converting-from-textmate">
                  Converting from TextMate
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core">
                  Hacking on Atom Core
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/contributing-to-official-atom-packages">
                  Contributing to Official Atom Packages
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-fork-of-a-core-package-in-atom-atom">
                  Creating a Fork of a Core Package in atom/atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/maintaining-a-fork-of-a-core-package-in-atom-atom">
                  Maintaining a Fork of a Core Package in atom/atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/summary">
                  Summary
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/behind-atom">
                Chapter 4: Behind Atom
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/configuration-api">
                  Configuration API
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth">
                  Keymaps In-Depth
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors">
                  Scoped Settings, Scopes and Scope Descriptors
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/serialization-in-atom">
                  Serialization in Atom
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/developing-node-modules">
                  Developing Node Modules
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services">
                  Interacting With Other Packages Via Services
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/maintaining-your-packages">
                  Maintaining Your Packages
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/how-atom-uses-chromium-snapshots">
                  How Atom Uses Chromium Snapshots
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/summary">
                  Summary
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
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

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/resources">
                Appendix A: Resources
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/resources/sections/glossary">
                  Glossary
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/faq">
                Appendix B: FAQ
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/is-atom-open-source">
                  Is Atom open source?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-atom-cost">
                  What does Atom cost?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-platforms-does-atom-run-on">
                  What platforms does Atom run on?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-contribute-to-atom">
                  How can I contribute to Atom?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-atom-collect-usage-data">
                  Why does Atom collect usage data?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/atom-in-the-cloud">
                  Atom in the cloud?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
                  What&apos;s the difference between an IDE and an editor?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
                  How can I tell if subpixel antialiasing is working?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
                  Why is Atom deleting trailing whitespace? Why is there a
                  newline at the end of the file?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-safe-mode-do">
                  What does Safe Mode do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
                  I have a question about a specific Atom community package.
                  Where is the best place to ask it?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
                  I&apos;m using an international keyboard and keys that use
                  AltGr or Ctrl+Alt aren&apos;t working
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
                  I&apos;m having a problem with Julia! What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
                  I&apos;m getting an error about a “self-signed certificate”.
                  What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
                  I&apos;m having a problem with PlatformIO! What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
                  How do I make Atom recognize a file with extension X as
                  language Y?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
                  How do I make the Welcome screen stop showing up?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-preview-web-page-changes-automatically">
                  How do I preview web page changes automatically?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
                  How do I accept input from my program or script when using the
                  script package?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
                  I am unable to update to the latest version of Atom on macOS.
                  How do I fix this?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
                  I&apos;m trying to change my syntax colors from styles.less,
                  but it isn&apos;t working!
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
                  How do I build or execute code I&apos;ve written in Atom?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-uninstall-atom-on-macos">
                  How do I uninstall Atom on macOS?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/macos-mojave-font-rendering-change">
                  macOS Mojave font rendering change
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
                  Why does macOS say that Atom wants to access my calendar,
                  contacts, photos, etc.?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-turn-on-line-wrap">
                  How do I turn on line wrap?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
                  The menu bar disappeared, how do I get it back?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
                  How do I use a newline in the result of find and replace?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
                  What is this line on the right in the editor view?
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/shadow-dom">
                Appendix C: Shadow DOM
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/shadow-dom/sections/removing-shadow-dom-styles">
                  Removing Shadow DOM styles
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis">
                Appendix D: Upgrading to 1.0 APIs
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-package">
                  Upgrading Your Package
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-ui-theme-or-package-selectors">
                  Upgrading Your UI Theme Or Package Selectors
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-syntax-theme">
                  Upgrading Your Syntax Theme
                </Link>
              </Box>
            </Box>

            <Heading as="h4">
              <Link href="https://flight-manual.atom.io/atom-server-side-apis">
                Appendix E: Atom server-side APIs
              </Link>
            </Heading>
            <Box as="ul">
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-package-server-api">
                  Atom package server API
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-update-server-api">
                  Atom update server API
                </Link>
              </Box>
            </Box>
          </Box>
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
              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/is-atom-open-source">
                  Is Atom open source?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-atom-cost">
                  What does Atom cost?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-platforms-does-atom-run-on">
                  What platforms does Atom run on?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-contribute-to-atom">
                  How can I contribute to Atom?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-atom-collect-usage-data">
                  Why does Atom collect usage data?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/atom-in-the-cloud">
                  Atom in the cloud?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
                  What&apos;s the difference between an IDE and an editor?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
                  How can I tell if subpixel antialiasing is working?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
                  Why is Atom deleting trailing whitespace? Why is there a
                  newline at the end of the file?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-safe-mode-do">
                  What does Safe Mode do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
                  I have a question about a specific Atom community package.
                  Where is the best place to ask it?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
                  I&apos;m using an international keyboard and keys that use
                  AltGr or Ctrl+Alt aren&apos;t working
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
                  I&apos;m having a problem with Julia! What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
                  I&apos;m getting an error about a “self-signed certificate”.
                  What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
                  I&apos;m having a problem with PlatformIO! What do I do?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
                  How do I make Atom recognize a file with extension X as
                  language Y?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
                  How do I make the Welcome screen stop showing up?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-preview-web-page-changes-automatically">
                  How do I preview web page changes automatically?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
                  How do I accept input from my program or script when using the
                  script package?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
                  I am unable to update to the latest version of Atom on macOS.
                  How do I fix this?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
                  I&apos;m trying to change my syntax colors from styles.less,
                  but it isn&apos;t working!
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
                  How do I build or execute code I&apos;ve written in Atom?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-uninstall-atom-on-macos">
                  How do I uninstall Atom on macOS?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/macos-mojave-font-rendering-change">
                  macOS Mojave font rendering change
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
                  Why does macOS say that Atom wants to access my calendar,
                  contacts, photos, etc.?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-turn-on-line-wrap">
                  How do I turn on line wrap?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
                  The menu bar disappeared, how do I get it back?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
                  How do I use a newline in the result of find and replace?
                </Link>
              </Box>

              <Box as="li" className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
                  What is this line on the right in the editor view?
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-pad"></Box>
      </Box>
      <FooterLegacy />
    </Box>
  );
}
