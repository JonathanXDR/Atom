'use client';
import { Box, Heading, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';
import './AtomEnvironmentContent.css';

const AtomEnvironmentContent: React.FC = () => {
  return (
    <Box className="document-content">
      <Heading as="h2" className="page-title">
        AtomEnvironment
        <Text
          className="label label-essential"
          title="This class is in the essential API"
        >
          Essential
        </Text>
        <Link
          className="document-source"
          href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L57"
          title="View class source"
        >
          <Text className="octicon octicon-file-code"></Text>
        </Link>
      </Heading>
      <Box className="markdown-body">
        <Text as="p">
          Atom global for dealing with packages, themes, menus, and the window.
        </Text>

        <Text as="p">
          An instance of this class is always available as the <code>atom</code>{' '}
          global.
        </Text>
      </Box>
      <Heading as="h2" className="detail-section">
        Properties
      </Heading>

      <Box className="api-entry js-api-entry essential" id="instance-clipboard">
        <Heading as="h3" className="name">
          <Link
            href="#instance-clipboard"
            className="js-api-name"
            key="instance-clipboard"
          >
            <Text className="operator operator-instance">::</Text>clipboard
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L66"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Clipboard/">
                Clipboard
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-deserializers"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-deserializers"
            className="js-api-name"
            key="instance-deserializers"
          >
            <Text className="operator operator-instance">::</Text>deserializers
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L79"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/DeserializerManager/">
                DeserializerManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-views">
        <Heading as="h3" className="name">
          <Link
            href="#instance-views"
            className="js-api-name"
            key="instance-views"
          >
            <Text className="operator operator-instance">::</Text>views
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L83"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/ViewRegistry/">
                ViewRegistry
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-notifications"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-notifications"
            className="js-api-name"
            key="instance-notifications"
          >
            <Text className="operator operator-instance">::</Text>notifications
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L86"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/NotificationManager/">
                NotificationManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-config">
        <Heading as="h3" className="name">
          <Link
            href="#instance-config"
            className="js-api-name"
            key="instance-config"
          >
            <Text className="operator operator-instance">::</Text>config
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L91"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Config/">
                Config
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-keymaps">
        <Heading as="h3" className="name">
          <Link
            href="#instance-keymaps"
            className="js-api-name"
            key="instance-keymaps"
          >
            <Text className="operator operator-instance">::</Text>keymaps
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L107"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/KeymapManager/">
                KeymapManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-tooltips">
        <Heading as="h3" className="name">
          <Link
            href="#instance-tooltips"
            className="js-api-name"
            key="instance-tooltips"
          >
            <Text className="operator operator-instance">::</Text>tooltips
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L112"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/TooltipManager/">
                TooltipManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-commands">
        <Heading as="h3" className="name">
          <Link
            href="#instance-commands"
            className="js-api-name"
            key="instance-commands"
          >
            <Text className="operator operator-instance">::</Text>commands
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L118"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/CommandRegistry/">
                CommandRegistry
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-grammars">
        <Heading as="h3" className="name">
          <Link
            href="#instance-grammars"
            className="js-api-name"
            key="instance-grammars"
          >
            <Text className="operator operator-instance">::</Text>grammars
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L122"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/GrammarRegistry/">
                GrammarRegistry
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-styles">
        <Heading as="h3" className="name">
          <Link
            href="#instance-styles"
            className="js-api-name"
            key="instance-styles"
          >
            <Text className="operator operator-instance">::</Text>styles
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L125"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/StyleManager/">
                StyleManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-packages">
        <Heading as="h3" className="name">
          <Link
            href="#instance-packages"
            className="js-api-name"
            key="instance-packages"
          >
            <Text className="operator operator-instance">::</Text>packages
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L128"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/PackageManager/">
                PackageManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-themes">
        <Heading as="h3" className="name">
          <Link
            href="#instance-themes"
            className="js-api-name"
            key="instance-themes"
          >
            <Text className="operator operator-instance">::</Text>themes
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L141"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/ThemeManager/">
                ThemeManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-menu">
        <Heading as="h3" className="name">
          <Link
            href="#instance-menu"
            className="js-api-name"
            key="instance-menu"
          >
            <Text className="operator operator-instance">::</Text>menu
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L150"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/MenuManager/">
                MenuManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-contextMenu"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-contextMenu"
            className="js-api-name"
            key="instance-contextMenu"
          >
            <Text className="operator operator-instance">::</Text>contextMenu
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L156"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/ContextMenuManager/">
                ContextMenuManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-project">
        <Heading as="h3" className="name">
          <Link
            href="#instance-project"
            className="js-api-name"
            key="instance-project"
          >
            <Text className="operator operator-instance">::</Text>project
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L163"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Project/">
                Project
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-textEditors"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-textEditors"
            className="js-api-name"
            key="instance-textEditors"
          >
            <Text className="operator operator-instance">::</Text>textEditors
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L174"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TextEditorRegistry">
                TextEditorRegistry
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-workspace">
        <Heading as="h3" className="name">
          <Link
            href="#instance-workspace"
            className="js-api-name"
            key="instance-workspace"
          >
            <Text className="operator operator-instance">::</Text>workspace
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L182"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Workspace/">
                Workspace
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-history">
        <Heading as="h3" className="name">
          <Link
            href="#instance-history"
            className="js-api-name"
            key="instance-history"
          >
            <Text className="operator operator-instance">::</Text>history
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L217"
            title="View property source"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A{' '}
              <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/HistoryManager/">
                HistoryManager
              </Link>{' '}
              instance
            </Text>
          </Box>
        </Box>
      </Box>

      <Heading as="h2" className="detail-section">
        Event Subscription
      </Heading>

      <Text as="p" className="no-methods-message">
        This section only has Extended methods.
      </Text>
      <Heading as="h4">Extended Methods</Heading>
      <Box className="api-entry js-api-entry extended" id="instance-onDidBeep">
        <Heading as="h3" className="name">
          <Link
            href="#instance-onDidBeep"
            className="js-api-name method-signature"
            key="instance-onDidBeep"
          >
            ::onDidBeep
            <Text className="argument-list">
              (<Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L472"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Invoke the given callback whenever{' '}
              <Link href="#instance-beep">::beep</Link> is called.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    to be called whenever{' '}
                    <Link href="#instance-beep">::beep</Link> is called.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Disposable/">
                      Disposable
                    </Link>{' '}
                    on which <code>.dispose()</code> can be called to
                    unsubscribe.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-onWillThrowError"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-onWillThrowError"
            className="js-api-name method-signature"
            key="instance-onWillThrowError"
          >
            ::onWillThrowError
            <Text className="argument-list">
              (<Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L489"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Invoke the given callback when there is an unhandled error, but
              before the devtools pop open
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    to be called whenever there is an unhandled error
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>event</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>originalError</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    the original error object
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>message</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    the original error object
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>url</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    Url to the file where the error originated.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>line</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>column</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>preventDefault</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    call this to avoid popping up the dev tools.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Disposable/">
                      Disposable
                    </Link>{' '}
                    on which <code>.dispose()</code> can be called to
                    unsubscribe.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-onDidThrowError"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-onDidThrowError"
            className="js-api-name method-signature"
            key="instance-onDidThrowError"
          >
            ::onDidThrowError
            <Text className="argument-list">
              (<Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L504"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Invoke the given callback whenever there is an unhandled error.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    to be called whenever there is an unhandled error
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>event</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>originalError</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    the original error object
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>message</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    the original error object
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>url</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    Url to the file where the error originated.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>line</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-2">
                <td>
                  <Text as="p">
                    <code>column</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="/web/20221129200901/https://flight-manual.atom.io/api/v1.57.0/Disposable/">
                      Disposable
                    </Link>{' '}
                    on which <code>.dispose()</code> can be called to
                    unsubscribe.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-whenShellEnvironmentLoaded"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-whenShellEnvironmentLoaded"
            className="js-api-name method-signature"
            key="instance-whenShellEnvironmentLoaded"
          >
            ::whenShellEnvironmentLoaded
            <Text className="argument-list">
              (<Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L519"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Invoke the given callback as soon as the shell environment is
              loaded (or immediately if it was already loaded).
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    to be called whenever there is an unhandled error
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>

      <Heading as="h2" className="detail-section">
        Atom Details
      </Heading>

      <Box className="api-entry js-api-entry essential" id="instance-inDevMode">
        <Heading as="h3" className="name">
          <Link
            href="#instance-inDevMode"
            className="js-api-name method-signature"
            key="instance-inDevMode"
          >
            ::inDevMode<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L533"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current window is in
                    development mode.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-inSafeMode"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-inSafeMode"
            className="js-api-name method-signature"
            key="instance-inSafeMode"
          >
            ::inSafeMode<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L539"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current window is in safe
                    mode.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-inSpecMode"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-inSpecMode"
            className="js-api-name method-signature"
            key="instance-inSpecMode"
          >
            ::inSpecMode<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L545"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current window is running
                    specs.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getAppName"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getAppName"
            className="js-api-name method-signature"
            key="instance-getAppName"
          >
            ::getAppName<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L561"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Get the full name of this Atom release (e.g. “Atom”, “Atom Beta”)
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns the app name{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>
                    .
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getVersion"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getVersion"
            className="js-api-name method-signature"
            key="instance-getVersion"
          >
            ::getVersion<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L569"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Get the version of the Atom application.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns the version text{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>
                    .
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getReleaseChannel"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getReleaseChannel"
            className="js-api-name method-signature"
            key="instance-getReleaseChannel"
          >
            ::getReleaseChannel<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L580"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Gets the release channel of the Atom application.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns the release channel as a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>
                    . Will return a specific release channel name like ‘beta’ or
                    ‘nightly’ if one is found in the Atom version or ‘stable’
                    otherwise.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-isReleasedVersion"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-isReleasedVersion"
            className="js-api-name method-signature"
            key="instance-isReleasedVersion"
          >
            ::isReleasedVersion<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L585"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current version is an
                    official release.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getWindowLoadTime"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getWindowLoadTime"
            className="js-api-name method-signature"
            key="instance-getWindowLoadTime"
          >
            ::getWindowLoadTime<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L596"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Get the time taken to completely load the current window.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description">
              <Text as="p">
                This time include things like loading and activating packages,
                creating DOM elements for the editor, and reading the config.
              </Text>
            </Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns the{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    of milliseconds taken to load the window or null if the
                    window hasn’t finished loading yet.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getStartupMarkers"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getStartupMarkers"
            className="js-api-name method-signature"
            key="instance-getStartupMarkers"
          >
            ::getStartupMarkers<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L606"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Get the all the markers with the information about startup time.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns an array of timing markers. Each timing is an object
                    with two keys:
                  </Text>

                  <ul>
                    <li>
                      <code>label</code>: string
                    </li>
                    <li>
                      <code>time</code>: Time since the <code>startTime</code>{' '}
                      (in milliseconds).
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getLoadSettings"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getLoadSettings"
            className="js-api-name method-signature"
            key="instance-getLoadSettings"
          >
            ::getLoadSettings<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L615"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Get the load settings for the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns an{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    containing all the load setting key/value pairs.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>

      <Heading as="h2" className="detail-section">
        Managing The Atom Window
      </Heading>

      <Box className="api-entry js-api-entry essential" id="instance-open">
        <Heading as="h3" className="name">
          <Link
            href="#instance-open"
            className="js-api-name method-signature"
            key="instance-open"
          >
            ::open
            <Text className="argument-list">
              (<Text className="argument">params</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L637"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Open a new Atom window using the given options.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description">
              <Text as="p">
                Calling this method without an options parameter will open a
                prompt to pick a file/folder to open in the new window.
              </Text>
            </Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>params</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    An{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    with the following keys:
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>pathsToOpen</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    An{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
                      Array
                    </Link>{' '}
                    of{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    paths to open.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>newWindow</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    A{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>
                    , true to always open a new window instead of reusing
                    existing windows depending on the paths to open.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>devMode</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    A{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>
                    , true to open the window in development mode. Development
                    mode loads the Atom source from the locally cloned
                    repository and also loads all the packages in
                    ~/.atom/dev/packages
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>safeMode</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    A{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>
                    , true to open the window in safe mode. Safe mode prevents
                    all packages installed to ~/.atom/packages from loading.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-close">
        <Heading as="h3" className="name">
          <Link
            href="#instance-close"
            className="js-api-name method-signature"
            key="instance-close"
          >
            ::close<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L651"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Close the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-getSize">
        <Heading as="h3" className="name">
          <Link
            href="#instance-getSize"
            className="js-api-name method-signature"
            key="instance-getSize"
          >
            ::getSize<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L658"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Get the size of current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns an{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    in the format <code>{'width: 1000, height: 700'}</code>
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-setSize">
        <Heading as="h3" className="name">
          <Link
            href="#instance-setSize"
            className="js-api-name method-signature"
            key="instance-setSize"
          >
            ::setSize
            <Text className="argument-list">
              (<Text className="argument">width</Text>,{' '}
              <Text className="argument">height</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L666"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Set the size of current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>width</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    of pixels.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>height</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    of pixels.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-getPosition"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getPosition"
            className="js-api-name method-signature"
            key="instance-getPosition"
          >
            ::getPosition<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L673"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Get the position of current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns an{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    in the format <code>{'x: 10, y: 20'}</code>
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry essential"
        id="instance-setPosition"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-setPosition"
            className="js-api-name method-signature"
            key="instance-setPosition"
          >
            ::setPosition
            <Text className="argument-list">
              (<Text className="argument">x</Text>,{' '}
              <Text className="argument">y</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L681"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Set the position of current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>x</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    of pixels.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>y</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    of pixels.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Heading as="h4">Extended Methods</Heading>
      <Box className="api-entry js-api-entry extended" id="instance-pickFolder">
        <Heading as="h3" className="name">
          <Link
            href="#instance-pickFolder"
            className="js-api-name method-signature"
            key="instance-pickFolder"
          >
            ::pickFolder
            <Text className="argument-list">
              (<Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L646"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Prompt the user to select one or more folders.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    A{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    to call once the user has confirmed the selection.
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>paths</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    An{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
                      Array
                    </Link>{' '}
                    of{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    paths that the user selected, or <code>null</code> if the
                    user dismissed the dialog.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-getCurrentWindow"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-getCurrentWindow"
            className="js-api-name method-signature"
            key="instance-getCurrentWindow"
          >
            ::getCurrentWindow<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L686"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Get the current window</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry extended" id="instance-center">
        <Heading as="h3" className="name">
          <Link
            href="#instance-center"
            className="js-api-name method-signature"
            key="instance-center"
          >
            ::center<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L691"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Move current window to the center of the screen.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry extended" id="instance-focus">
        <Heading as="h3" className="name">
          <Link
            href="#instance-focus"
            className="js-api-name method-signature"
            key="instance-focus"
          >
            ::focus<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L696"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Focus the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry extended" id="instance-show">
        <Heading as="h3" className="name">
          <Link
            href="#instance-show"
            className="js-api-name method-signature"
            key="instance-show"
          >
            ::show<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L702"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Show the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry extended" id="instance-hide">
        <Heading as="h3" className="name">
          <Link
            href="#instance-hide"
            className="js-api-name method-signature"
            key="instance-hide"
          >
            ::hide<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L707"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Hide the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry extended" id="instance-reload">
        <Heading as="h3" className="name">
          <Link
            href="#instance-reload"
            className="js-api-name method-signature"
            key="instance-reload"
          >
            ::reload<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L712"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Reload the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-restartApplication"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-restartApplication"
            className="js-api-name method-signature"
            key="instance-restartApplication"
          >
            ::restartApplication<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L717"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Relaunch the entire application.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-isMaximized"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-isMaximized"
            className="js-api-name method-signature"
            key="instance-isMaximized"
          >
            ::isMaximized<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L722"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current window is
                    maximized.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-isFullScreen"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-isFullScreen"
            className="js-api-name method-signature"
            key="instance-isFullScreen"
          >
            ::isFullScreen<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L731"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body"></Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">
                      Boolean
                    </Link>{' '}
                    that is <code>true</code> if the current window is in full
                    screen mode.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-setFullScreen"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-setFullScreen"
            className="js-api-name method-signature"
            key="instance-setFullScreen"
          >
            ::setFullScreen<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L736"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Set the full screen state of the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-toggleFullScreen"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-toggleFullScreen"
            className="js-api-name method-signature"
            key="instance-toggleFullScreen"
          >
            ::toggleFullScreen<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L741"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Toggle the full screen state of the current window.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>

      <Heading as="h2" className="detail-section">
        Messaging the User
      </Heading>

      <Box className="api-entry js-api-entry essential" id="instance-beep">
        <Heading as="h3" className="name">
          <Link
            href="#instance-beep"
            className="js-api-name method-signature"
            key="instance-beep"
          >
            ::beep<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L1180"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Visually and audibly trigger a beep.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="api-entry js-api-entry essential" id="instance-confirm">
        <Heading as="h3" className="name">
          <Link
            href="#instance-confirm"
            className="js-api-name method-signature"
            key="instance-confirm"
          >
            ::confirm
            <Text className="argument-list">
              (<Text className="argument">options</Text>,{' '}
              <Text className="argument">callback</Text>)
            </Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L1239"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              A flexible way to open a dialog akin to an alert dialog.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description">
              <Text as="p">
                While both async and sync versions are provided, it is
                recommended to use the async version such that the renderer
                process is not blocked while the dialog box is open.
              </Text>

              <Text as="p">
                The async version accepts the same options as Electron’s{' '}
                <code>dialog.showMessageBox</code>. For convenience, it sets{' '}
                <code>type</code> to <code>&apos;info&apos;</code> and{' '}
                <code>normalizeAccessKeys</code> to <code>true</code> by
                default.
              </Text>

              <Text as="p">
                If the dialog is closed (via <code>Esc</code> key or{' '}
                <code>X</code> in the top corner) without selecting a button the
                first button will be clicked unless a “Cancel” or “No” button is
                provided.
              </Text>
            </Box>
          </Box>

          <table className="arguments">
            <thead>
              <tr>
                <th>Argument</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>options</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    An options{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>
                    . If the callback argument is also supplied, see the
                    documentation at
                    https://electronjs.org/docs/api/dialog#dialogshowmessageboxbrowserwindow-options-callback
                    for the list of available options. Otherwise, only the
                    following keys are accepted:
                  </Text>
                </td>
              </tr>
              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>message</code>
                  </Text>
                </td>
                <td>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    message to display.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>detailedMessage</code>
                  </Text>
                </td>
                <td>
                  <Text className="optional">optional</Text>
                  <Text as="p">
                    The{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>{' '}
                    detailed message to display.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-1">
                <td>
                  <Text as="p">
                    <code>buttons</code>
                  </Text>
                </td>
                <td>
                  <Text className="optional">optional</Text>
                  <Text as="p">
                    Either an{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
                      Array
                    </Link>{' '}
                    of{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
                      String
                    </Link>
                    s or an{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
                      Object
                    </Link>{' '}
                    where keys are button names and the values are callback{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>
                    s to invoke when clicked.
                  </Text>
                </td>
              </tr>

              <tr className="markdown-body argument-depth-0">
                <td>
                  <Text as="p">
                    <code>callback</code>
                  </Text>
                </td>
                <td>
                  <Text className="optional">optional</Text>
                  <Text as="p">
                    A{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">
                      Function
                    </Link>{' '}
                    that will be called with the index of the chosen option. If
                    a callback is supplied, the dialog will be non-blocking.
                    This argument is recommended.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns the chosen button index{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">
                      Number
                    </Link>{' '}
                    if the buttons option is an array or the return value of the
                    callback if the buttons option is an object. If a callback
                    function is supplied, returns <code>undefined</code>.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>

      <Heading as="h2" className="detail-section">
        Managing the Dev Tools
      </Heading>

      <Text as="p" className="no-methods-message">
        This section only has Extended methods.
      </Text>
      <Heading as="h4">Extended Methods</Heading>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-openDevTools"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-openDevTools"
            className="js-api-name method-signature"
            key="instance-openDevTools"
          >
            ::openDevTools<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L1255"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Open the dev tools for the current window.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
                      Promise
                    </Link>{' '}
                    that resolves when the DevTools have been opened.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-toggleDevTools"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-toggleDevTools"
            className="js-api-name method-signature"
            key="instance-toggleDevTools"
          >
            ::toggleDevTools<Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L1263"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">
              Toggle the visibility of the dev tools for the current window.
            </Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>

          <table className="return-values">
            <thead>
              <tr>
                <th>Return values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="markdown-body">
                  <Text as="p">
                    Returns a{' '}
                    <Link href="https://web.archive.org/web/20221129200901/https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
                      Promise
                    </Link>{' '}
                    that resolves when the DevTools have been opened or closed.
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
      <Box
        className="api-entry js-api-entry extended"
        id="instance-executeJavaScriptInDevTools"
      >
        <Heading as="h3" className="name">
          <Link
            href="#instance-executeJavaScriptInDevTools"
            className="js-api-name method-signature"
            key="instance-executeJavaScriptInDevTools"
          >
            ::executeJavaScriptInDevTools
            <Text className="argument-list">()</Text>
          </Link>
          <Link
            className="document-source"
            href="https://web.archive.org/web/20221129200901/https://github.com/atom/atom/blob/v1.57.0/src/atom-environment.js#L1268"
          >
            <Text className="octicon octicon-file-code"></Text>
          </Link>
        </Heading>
        <Box className="method-summary-wrapper">
          <Box className="summary markdown-body">
            <Text as="p">Execute code in dev tools.</Text>
          </Box>

          <Box className="body markdown-body">
            <Box className="description"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AtomEnvironmentContent;
