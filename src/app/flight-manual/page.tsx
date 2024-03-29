"use client";
import FooterItem from "@/components/FooterItem/FooterItem";
import NavItem from "@/components/NavItem/NavItem";
import Image from "next/image";
import Link from "next/link";
import "./main.css";
import "/public/assets/css/flight-manual.css";
import flightManualCover from "/public/assets/png/flight-manual-cover.png";

export default function FlightManual() {
  return (
    <body className="layout-toc platform-switch platform-mac">
      <div className="footer-push">
        <NavItem />

        <div className="wrapper documents content-push">
          <div
            className="documents-search"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <select
              id="documents-search-versions"
              style={{
                display: "inline",
                marginRight: "20px",
                height: "40px",
              }}
            >
              <option value="1.63.1">v1.63.1</option>
              <option value="1.63.0">v1.62.0</option>
              <option value="1.62.0">v1.61.0</option>
              <option value="1.61.0">v1.60.0</option>
              <option value="1.60.0">v1.59.0</option>
              <option value="1.59.0">v1.58.0</option>
              <option value="1.58.0">v1.57.0</option>
              <option value="1.57.0">v1.57.0</option>
              <option value="1.56.0">v1.56.0</option>
              <option value="1.55.0">v1.55.0</option>
              <option value="1.54.0">v1.54.0</option>
              <option value="1.53.0">v1.53.0</option>
              <option value="1.52.0">v1.52.0</option>
              <option value="1.51.0">v1.51.0</option>
              <option value="1.50.0">v1.50.0</option>
              <option value="1.49.0">v1.49.0</option>
              <option value="1.48.0">v1.48.0</option>
              <option value="1.47.0">v1.47.0</option>
              <option value="1.46.0">v1.46.0</option>
              <option value="1.45.0">v1.45.0</option>
              <option value="1.44.0">v1.44.0</option>
              <option value="1.43.0">v1.43.0</option>
              <option value="1.42.0">v1.42.0</option>
              <option value="1.41.0">v1.41.0</option>
              <option value="1.40.1">v1.40.1</option>
              <option value="1.40.0">v1.40.0</option>
              <option value="1.39.1">v1.39.1</option>
              <option value="1.39.0">v1.39.0</option>
              <option value="1.38.2">v1.38.2</option>
              <option value="1.38.1">v1.38.1</option>
              <option value="1.38.0">v1.38.0</option>
              <option value="1.37.0">v1.37.0</option>
              <option value="1.36.1">v1.36.1</option>
              <option value="1.36.0">v1.36.0</option>
              <option value="1.35.1">v1.35.1</option>
              <option value="1.35.0">v1.35.0</option>
              <option value="1.34.0">v1.34.0</option>
              <option value="1.33.1">v1.33.1</option>
              <option value="1.33.0">v1.33.0</option>
              <option value="1.32.2">v1.32.2</option>
              <option value="1.32.1">v1.32.1</option>
              <option value="1.32.0">v1.32.0</option>
              <option value="1.31.2">v1.31.2</option>
              <option value="1.31.1">v1.31.1</option>
              <option value="1.31.0">v1.31.0</option>
              <option value="1.30.0">v1.30.0</option>
              <option value="1.29.0">v1.29.0</option>
              <option value="1.28.2">v1.28.2</option>
              <option value="1.28.1">v1.28.1</option>
              <option value="1.28.0">v1.28.0</option>
              <option value="1.27.2">v1.27.2</option>
              <option value="1.27.1">v1.27.1</option>
              <option value="1.27.0">v1.27.0</option>
              <option value="1.26.1">v1.26.1</option>
              <option value="1.26.0">v1.26.0</option>
              <option value="1.25.1">v1.25.1</option>
              <option value="1.25.0">v1.25.0</option>
              <option value="1.24.1">v1.24.1</option>
              <option value="1.24.0">v1.24.0</option>
              <option value="1.23.3">v1.23.3</option>
              <option value="1.23.2">v1.23.2</option>
              <option value="1.23.1">v1.23.1</option>
              <option value="1.23.0">v1.23.0</option>
              <option value="1.22.1">v1.22.1</option>
              <option value="1.22.0">v1.22.0</option>
              <option value="1.21.2">v1.21.2</option>
              <option value="1.21.1">v1.21.1</option>
              <option value="1.21.0">v1.21.0</option>
              <option value="1.20.1">v1.20.1</option>
              <option value="1.20.0">v1.20.0</option>
              <option value="1.19.7">v1.19.7</option>
              <option value="1.19.6">v1.19.6</option>
              <option value="1.19.5">v1.19.5</option>
              <option value="1.19.4">v1.19.4</option>
              <option value="1.19.3">v1.19.3</option>
              <option value="1.19.2">v1.19.2</option>
              <option value="1.19.1">v1.19.1</option>
              <option value="1.19.0">v1.19.0</option>
              <option value="1.18.0">v1.18.0</option>
              <option value="1.17.2">v1.17.2</option>
              <option value="1.17.1">v1.17.1</option>
              <option value="1.17.0">v1.17.0</option>
              <option value="1.16.0">v1.16.0</option>
              <option value="1.15.0">v1.15.0</option>
              <option value="1.14.4">v1.14.4</option>
              <option value="1.14.3">v1.14.3</option>
              <option value="1.14.2">v1.14.2</option>
              <option value="1.14.1">v1.14.1</option>
              <option value="1.14.0">v1.14.0</option>
              <option value="1.13.1">v1.13.1</option>
              <option value="1.13.0">v1.13.0</option>
              <option value="1.12.9">v1.12.9</option>
              <option value="1.12.8">v1.12.8</option>
              <option value="1.12.7">v1.12.7</option>
              <option value="1.12.6">v1.12.6</option>
              <option value="1.12.5">v1.12.5</option>
              <option value="1.12.4">v1.12.4</option>
              <option value="1.12.3">v1.12.3</option>
              <option value="1.12.2">v1.12.2</option>
              <option value="1.12.1">v1.12.1</option>
              <option value="1.12.0">v1.12.0</option>
              <option value="1.11.2">v1.11.2</option>
              <option value="1.11.1">v1.11.1</option>
              <option value="1.11.0">v1.11.0</option>
              <option value="1.10.2">v1.10.2</option>
              <option value="1.10.1">v1.10.1</option>
              <option value="1.10.0">v1.10.0</option>
              <option value="1.9.9">v1.9.9</option>
              <option value="1.9.8">v1.9.8</option>
              <option value="1.9.7">v1.9.7</option>
              <option value="1.9.6">v1.9.6</option>
              <option value="1.9.5">v1.9.5</option>
              <option value="1.9.4">v1.9.4</option>
              <option value="1.9.3">v1.9.3</option>
              <option value="1.9.2">v1.9.2</option>
              <option value="1.9.1">v1.9.1</option>
              <option value="1.9.0">v1.9.0</option>
              <option value="1.8.0">v1.8.0</option>
              <option value="1.7.4">v1.7.4</option>
              <option value="1.7.3">v1.7.3</option>
              <option value="1.7.2">v1.7.2</option>
              <option value="1.7.1">v1.7.1</option>
              <option value="1.7.0">v1.7.0</option>
              <option value="1.6.2">v1.6.2</option>
              <option value="1.6.1">v1.6.1</option>
              <option value="1.6.0">v1.6.0</option>
              <option value="1.5.4">v1.5.4</option>
              <option value="1.5.3">v1.5.3</option>
              <option value="1.5.2">v1.5.2</option>
              <option value="1.5.1">v1.5.1</option>
              <option value="1.5.0">v1.5.0</option>
              <option value="1.4.3">v1.4.3</option>
              <option value="1.4.2">v1.4.2</option>
              <option value="1.4.1">v1.4.1</option>
              <option value="1.4.0">v1.4.0</option>
              <option value="1.3.3">v1.3.3</option>
              <option value="1.3.2">v1.3.2</option>
              <option value="1.3.1">v1.3.1</option>
              <option value="1.3.0">v1.3.0</option>
              <option value="1.2.4">v1.2.4</option>
              <option value="1.2.3">v1.2.3</option>
              <option value="1.2.2">v1.2.2</option>
              <option value="1.2.1">v1.2.1</option>
              <option value="1.2.0">v1.2.0</option>
              <option value="1.1.0">v1.1.0</option>
              <option value="1.0.19">v1.0.19</option>
              <option value="1.0.18">v1.0.18</option>
              <option value="1.0.17">v1.0.17</option>
              <option value="1.0.16">v1.0.16</option>
              <option value="1.0.15">v1.0.15</option>
              <option value="1.0.14">v1.0.14</option>
              <option value="1.0.13">v1.0.13</option>
              <option value="1.0.12">v1.0.12</option>
              <option value="1.0.11">v1.0.11</option>
              <option value="1.0.10">v1.0.10</option>
              <option value="1.0.9">v1.0.9</option>
              <option value="1.0.8">v1.0.8</option>
              <option value="1.0.7">v1.0.7</option>
              <option value="1.0.6">v1.0.6</option>
              <option value="1.0.5">v1.0.5</option>
              <option value="1.0.4">v1.0.4</option>
              <option value="1.0.3">v1.0.3</option>
              <option value="1.0.2">v1.0.2</option>
              <option value="1.0.1">v1.0.1</option>
              <option value="1.0.0">v1.0.0</option>
            </select>
            <form
              accept-charset="UTF-8"
              action="https://flight-manual.atom.io/search"
              id="articles-search"
              method="get"
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  margin: "0",
                  padding: "0",
                  display: "inline",
                }}
              >
                <input name="utf8" type="hidden" value="✓" />
              </div>
              <input
                type="text"
                name="q"
                id="quicksearch-query"
                className="documents-search-input js-articles-quicksearch"
                placeholder="Search the Flight Manual"
                autoComplete="off"
              />
            </form>
          </div>
          <div
            className="autocomplete-results"
            style={{
              display: "none",
            }}
          >
            <div className="result-group"></div>
          </div>
          <div className="markdown-body">
            <h1>Atom Flight Manual</h1>
            <div className="manual-ebooks">
              <Image alt="Atom Flight Manual cover" src={flightManualCover} />
            </div>

            <h3>
              <Link href="https://flight-manual.atom.io/getting-started">
                Chapter 1: Getting Started
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/why-atom">
                  Why Atom?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/installing-atom">
                  Installing Atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/atom-basics">
                  Atom Basics
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/getting-started/sections/summary">
                  Summary
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/using-atom">
                Chapter 2: Using Atom
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/atom-packages">
                  Atom Packages
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/moving-in-atom">
                  Moving in Atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/atom-selections">
                  Atom Selections
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/editing-and-deleting-text">
                  Editing and Deleting Text
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/find-and-replace">
                  Find and Replace
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/snippets">
                  Snippets
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/autocomplete">
                  Autocomplete
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/folding">
                  Folding
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/panes">
                  Panes
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/pending-pane-items">
                  Pending Pane Items
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/grammar">
                  Grammar
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/version-control-in-atom">
                  Version Control in Atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/github-package">
                  GitHub package
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/writing-in-atom">
                  Writing in Atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/basic-customization">
                  Basic Customization
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/using-atom/sections/summary">
                  Summary
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/hacking-atom">
                Chapter 3: Hacking Atom
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/tools-of-the-trade">
                  Tools of the Trade
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/the-init-file">
                  The Init File
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-word-count">
                  Package: Word Count
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-modifying-text">
                  Package: Modifying Text
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/package-active-editor-info">
                  Package: Active Editor Info
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-theme">
                  Creating a Theme
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-grammar">
                  Creating a Grammar
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-legacy-textmate-grammar">
                  Creating a Legacy TextMate Grammar
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/publishing">
                  Publishing
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/iconography">
                  Iconography
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/debugging">
                  Debugging
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/writing-specs">
                  Writing specs
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/handling-uris">
                  Handling URIs
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility">
                  Cross-Platform Compatibility
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/converting-from-textmate">
                  Converting from TextMate
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core">
                  Hacking on Atom Core
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/contributing-to-official-atom-packages">
                  Contributing to Official Atom Packages
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/creating-a-fork-of-a-core-package-in-atom-atom">
                  Creating a Fork of a Core Package in atom/atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/maintaining-a-fork-of-a-core-package-in-atom-atom">
                  Maintaining a Fork of a Core Package in atom/atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/hacking-atom/sections/summary">
                  Summary
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/behind-atom">
                Chapter 4: Behind Atom
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/configuration-api">
                  Configuration API
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth">
                  Keymaps In-Depth
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors">
                  Scoped Settings, Scopes and Scope Descriptors
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/serialization-in-atom">
                  Serialization in Atom
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/developing-node-modules">
                  Developing Node Modules
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/interacting-with-other-packages-via-services">
                  Interacting With Other Packages Via Services
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/maintaining-your-packages">
                  Maintaining Your Packages
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/how-atom-uses-chromium-snapshots">
                  How Atom Uses Chromium Snapshots
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/behind-atom/sections/summary">
                  Summary
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/api/v1.57.0/">
                Reference: API
              </Link>
            </h3>
            <ul>
              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/AtomEnvironment/">
                  AtomEnvironment
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/BufferedNodeProcess/">
                  BufferedNodeProcess
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/BufferedProcess/">
                  BufferedProcess
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Clipboard/">
                  Clipboard
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Color/">
                  Color
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/CommandRegistry/">
                  CommandRegistry
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/CompositeDisposable/">
                  CompositeDisposable
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Config/">
                  Config
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/ContextMenuManager/">
                  ContextMenuManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Cursor/">
                  Cursor
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Decoration/">
                  Decoration
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/DeserializerManager/">
                  DeserializerManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Directory/">
                  Directory
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/DisplayMarker/">
                  DisplayMarker
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/DisplayMarkerLayer/">
                  DisplayMarkerLayer
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Disposable/">
                  Disposable
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Dock/">
                  Dock
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Emitter/">
                  Emitter
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/File/">
                  File
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/GitRepository/">
                  GitRepository
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Grammar/">
                  Grammar
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/GrammarRegistry/">
                  GrammarRegistry
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Gutter/">
                  Gutter
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/HistoryManager/">
                  HistoryManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/KeymapManager/">
                  KeymapManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/LayerDecoration/">
                  LayerDecoration
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/MarkerLayer/">
                  MarkerLayer
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/MenuManager/">
                  MenuManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Notification/">
                  Notification
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/NotificationManager/">
                  NotificationManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Package/">
                  Package
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/PackageManager/">
                  PackageManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Pane/">
                  Pane
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Panel/">
                  Panel
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/PathWatcher/">
                  PathWatcher
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Point/">
                  Point
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Project/">
                  Project
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Range/">
                  Range
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/ScopeDescriptor/">
                  ScopeDescriptor
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Selection/">
                  Selection
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/StyleManager/">
                  StyleManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Task/">
                  Task
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/TextBuffer/">
                  TextBuffer
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/TextEditor/">
                  TextEditor
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/ThemeManager/">
                  ThemeManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/TooltipManager/">
                  TooltipManager
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/ViewRegistry/">
                  ViewRegistry
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/Workspace/">
                  Workspace
                </Link>
              </li>

              <li>
                <Link href="https://flight-manual.atom.io/api/v1.57.0/WorkspaceCenter/">
                  WorkspaceCenter
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/resources">
                Appendix A: Resources
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/resources/sections/glossary">
                  Glossary
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/faq">
                Appendix B: FAQ
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/is-atom-open-source">
                  Is Atom open source?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-atom-cost">
                  What does Atom cost?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-platforms-does-atom-run-on">
                  What platforms does Atom run on?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-contribute-to-atom">
                  How can I contribute to Atom?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-atom-collect-usage-data">
                  Why does Atom collect usage data?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/atom-in-the-cloud">
                  Atom in the cloud?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-s-the-difference-between-an-ide-and-an-editor">
                  What&apos;s the difference between an IDE and an editor?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-can-i-tell-if-subpixel-antialiasing-is-working">
                  How can I tell if subpixel antialiasing is working?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-is-atom-deleting-trailing-whitespace-why-is-there-a-newline-at-the-end-of-the-file">
                  Why is Atom deleting trailing whitespace? Why is there a
                  newline at the end of the file?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-does-safe-mode-do">
                  What does Safe Mode do?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-have-a-question-about-a-specific-atom-community-package-where-is-the-best-place-to-ask-it">
                  I have a question about a specific Atom community package.
                  Where is the best place to ask it?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-using-an-international-keyboard-and-keys-that-use-altgr-or-ctrl-alt-aren-t-working">
                  I&apos;m using an international keyboard and keys that use
                  AltGr or Ctrl+Alt aren&apos;t working
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-julia-what-do-i-do">
                  I&apos;m having a problem with Julia! What do I do?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do">
                  I&apos;m getting an error about a “self-signed certificate”.
                  What do I do?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-having-a-problem-with-platformio-what-do-i-do">
                  I&apos;m having a problem with PlatformIO! What do I do?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y">
                  How do I make Atom recognize a file with extension X as
                  language Y?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-make-the-welcome-screen-stop-showing-up">
                  How do I make the Welcome screen stop showing up?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-preview-web-page-changes-automatically">
                  How do I preview web page changes automatically?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-accept-input-from-my-program-or-script-when-using-the-script-package">
                  How do I accept input from my program or script when using the
                  script package?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-am-unable-to-update-to-the-latest-version-of-atom-on-macos-how-do-i-fix-this">
                  I am unable to update to the latest version of Atom on macOS.
                  How do I fix this?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/i-m-trying-to-change-my-syntax-colors-from-styles-less-but-it-isn-t-working">
                  I&apos;m trying to change my syntax colors from styles.less,
                  but it isn&apos;t working!
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-build-or-execute-code-i-ve-written-in-atom">
                  How do I build or execute code I&apos;ve written in Atom?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-uninstall-atom-on-macos">
                  How do I uninstall Atom on macOS?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/macos-mojave-font-rendering-change">
                  macOS Mojave font rendering change
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc">
                  Why does macOS say that Atom wants to access my calendar,
                  contacts, photos, etc.?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-turn-on-line-wrap">
                  How do I turn on line wrap?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/the-menu-bar-disappeared-how-do-i-get-it-back">
                  The menu bar disappeared, how do I get it back?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/how-do-i-use-a-newline-in-the-result-of-find-and-replace">
                  How do I use a newline in the result of find and replace?
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/faq/sections/what-is-this-line-on-the-right-in-the-editor-view">
                  What is this line on the right in the editor view?
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/shadow-dom">
                Appendix C: Shadow DOM
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/shadow-dom/sections/removing-shadow-dom-styles">
                  Removing Shadow DOM styles
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis">
                Appendix D: Upgrading to 1.0 APIs
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-package">
                  Upgrading Your Package
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-ui-theme-or-package-selectors">
                  Upgrading Your UI Theme Or Package Selectors
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/upgrading-to-1-0-apis/sections/upgrading-your-syntax-theme">
                  Upgrading Your Syntax Theme
                </Link>
              </li>
            </ul>

            <h3>
              <Link href="https://flight-manual.atom.io/atom-server-side-apis">
                Appendix E: Atom server-side APIs
              </Link>
            </h3>
            <ul>
              <li className="unselected">
                <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-package-server-api">
                  Atom package server API
                </Link>
              </li>

              <li className="unselected">
                <Link href="https://flight-manual.atom.io/atom-server-side-apis/sections/atom-update-server-api">
                  Atom update server API
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-pad"></div>
      </div>
      <FooterItem />
    </body>
  );
}
