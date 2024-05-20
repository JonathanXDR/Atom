import { Box, Heading, Link, Text } from "@primer/react";
import Image from "next/image";
import React from "react";
import indexGithubScreenshot from "/public/assets/png/index-github-screenshot.png";
import indexIdeScreenshot from "/public/assets/png/index-ide-screenshot.png";
import indexTeletypeScreenshot from "/public/assets/png/index-teletype-screenshot.png";

const RiverItem: React.FC = () => {
  return (
    <>
      <Box as="section" id="teletype" className="section section--realtime">
        <Box className="wrapper">
          <Heading as="h3">Teletype for Atom</Heading>

          <Text
            as="p"
            sx={{
              marginBlock: "1em",
            }}
          >
            Great things happen when developers work together—from teaching and
            sharing knowledge to building better software. Teletype for Atom
            makes collaborating on code just as easy as it is to code alone,
            right from your editor.
          </Text>

          <Box className="welcome-bgs">
            <Image
              className="welcome-bg welcome-bg--screenshot"
              src={indexTeletypeScreenshot}
              alt="index-teletype-screenshot"
            />
          </Box>

          <Text as="p">
            Share your workspace and edit code together in real time. To start
            collaborating,{" "}
            <Link href="atom://settings-view/show-package?package=teletype">
              open Teletype in Atom{" "}
            </Link>
            and install the package.
          </Text>

          <Text as="p" className="welcome-cta">
            <Link href="/teletype" className="welcome-button">
              Learn more
            </Link>
          </Text>
        </Box>
      </Box>

      <Box as="section" id="ide" className="section section--ide">
        <Box className="wrapper">
          <Heading as="h3">Atom IDE</Heading>
          <Text
            as="p"
            sx={{
              marginBlock: "1em",
            }}
          >
            Atom-IDE is a set of optional packages to bring IDE-like
            functionality to Atom and improve language integrations.
          </Text>
          <Box className="welcome-bgs">
            <Image
              className="welcome-bg welcome-bg--screenshot"
              src={indexIdeScreenshot}
              alt="index-ide-screenshot"
            />
          </Box>
          <Text as="p">
            Get smarter context-aware auto-completion, code navigation features
            such as an outline view, go to definition and find all references.
            You can also hover-to-reveal information, diagnostics (errors and
            warnings) and document formatting. To get all these IDE features,
            <Link href="atom://settings-view/show-package?package=atom-ide-ui">
              {" "}
              open Atom IDE UI in Atom{" "}
            </Link>
            and install the package.
          </Text>
          <Text as="p" className="welcome-cta">
            <Link href="/ide" className="welcome-button">
              Learn more
            </Link>
          </Text>
        </Box>
      </Box>

      <Box as="section" id="github" className="section section--github">
        <Box className="wrapper">
          <Heading as="h3">GitHub for Atom</Heading>

          <Text
            as="p"
            sx={{
              marginBlock: "1em",
            }}
          >
            A text editor is at the core of a developer&apos;s toolbox, but it
            doesn&apos;t usually work alone. Work with Git and GitHub directly
            from Atom with the GitHub package.
          </Text>

          <Box className="welcome-bgs">
            <Image
              className="welcome-bg welcome-bg--screenshot"
              src={indexGithubScreenshot}
              alt="index-github-screenshot"
            />
          </Box>

          <Text as="p">
            Create new branches, stage and commit, push and pull, resolve merge
            conflicts, view pull requests and more—all from within your editor.
            The GitHub package is already bundled with Atom, so you&apos;re
            ready to go!
          </Text>

          <Text as="p" className="welcome-cta">
            <Link href="/github" className="welcome-button">
              Learn more
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default RiverItem;
