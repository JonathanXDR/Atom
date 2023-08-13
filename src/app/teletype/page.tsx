'use client';
import CreditBadge from '@/components/CreditBadge/CreditBadge';
import { BroadcastIcon, PlayIcon } from '@primer/octicons-react';
import { Box, Heading, Text } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './main.css';
import realTimePortals from '/public/assets/svg/real-time-portals.svg';
import realTimePrivacy1 from '/public/assets/svg/real-time-privacy-1.svg';
import realTimePrivacy2 from '/public/assets/svg/real-time-privacy-2.svg';

export default function Teletype() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const videoHudRef = React.useRef<HTMLDivElement>(null);
  const videoButtonRef = React.useRef<HTMLButtonElement>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      videoHudRef.current?.classList.add('is-hidden');
    }
  };

  return (
    <>
      <section className="section hero">
        <Box className="wrapper wrapper--full">
          <header className="header">
            <svg className="logo" viewBox="0 0 116 106" aria-label="Atom">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(2.000000, 2.000000)">
                  <path
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    d="M76.189086,44.0856189 C89.2231104,70.8500357 91.9124709,96.0721711 82.0341519,101.11376 C71.8486126,106.314623 52.1597207,88.0926784 38.0575146,60.4151933 C23.9553084,32.7377081 20.7806971,6.08525653 30.9662365,0.885970525 C35.4012393,-1.37856533 41.6386021,0.799236909 48.4305372,6.26187771"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    d="M11.7756915,62.476615 C4.17997299,58.5368926 -0.244183357,53.7922806 0.0104217322,48.8892012 C0.602928639,37.5171948 26.1514492,29.6016632 57.0733946,31.2067353 C87.9953399,32.8133764 112.582019,43.3334237 111.989512,54.7054302 C111.733335,59.6085096 106.83926,63.8683051 98.8757784,67"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    d="M43.8264623,92.4624337 C35.5466486,98.4730696 28.1774106,100.668354 23.5681106,97.6598844 C14.0266558,91.4349207 19.916404,65.2743138 36.7236579,39.2271746 C53.5309117,13.1816113 74.8910444,-2.88667479 84.4324992,3.33986485 C88.8678339,6.23329102 89.9680476,13.4337617 88.1876447,22.9272253"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M64.8406718,49.5222731 C65.6570438,53.3004613 63.2558557,57.024333 59.4775391,57.8406772 C55.6992225,58.6570215 51.9752241,56.255915 51.1588521,52.4777269 C50.3440777,48.6995387 52.7436682,44.975667 56.5219849,44.1593228 C60.2987039,43.3429785 64.0227022,45.744085 64.8406718,49.5222731"
                  ></path>
                </g>
              </g>
            </svg>
          </header>
        </Box>

        <Box className="wrapper intro">
          <Heading as="h2">Collaborate in real time in Atom</Heading>
          <Text as="p">
            <strong>
              Teletype<sup>(beta)</sup> for Atom
            </strong>{' '}
            lets developers share their workspace with team members and
            collaborate on code in real time.
          </Text>
          <Text as="p">
            <Link href="#getting-started">Get started</Link>
          </Text>
        </Box>
      </section>
      <section id="demo" className="section">
        <Box className="wrapper wrapper--full wrapper--video">
          <Box className="video-container">
            <video
              ref={videoRef}
              className="video"
              preload="auto"
              poster="/assets/png/real-time-video-poster.png"
              controls={false}
            >
              <source src="/assets/video/real-time.mp4" type="video/mp4" />
              <track kind="captions" />
            </video>
            <Box ref={videoHudRef} className="video-hud">
              <button
                ref={videoButtonRef}
                className="video-play-button mega-octicon"
                aria-label="Play video"
                onClick={playVideo}
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PlayIcon size={125} />
              </button>
            </Box>
          </Box>
        </Box>
      </section>

      <section id="portals" className="section">
        <Box className="wrapper">
          <Heading as="h2">Code better, together</Heading>
          <Text as="p">
            Working on code together in real time is valuable for knowledge
            sharing and producing quality software. The
            <strong> Teletype </strong> package for Atom aspires to make it as
            easy for developers to code together as it is for them to code
            alone.
          </Text>
          <Text as="p">
            Teletype introduces the concept of
            <strong> real-time &quot;portals&quot; </strong> for sharing
            workspaces. When a host opens a portal, their active tab becomes a
            shared workspace. There, invited collaborators can join in and make
            edits in real time. As the host moves between files, collaborators
            follow along with the active tab automatically.
          </Text>
          <Text as="p" className="is-centered">
            <Image
              className="img"
              src={realTimePortals}
              alt="real-time-portals"
              style={{ width: '100%', height: '100%' }}
            />
          </Text>
        </Box>
      </section>
      <section id="privacy" className="section">
        <Box className="wrapper">
          <Heading as="h2">How code gets shared</Heading>
          <Text as="p">Each portal comes to life in two steps:</Text>
          <ol className="privacy-list">
            <li>
              <Text as="p" className="privacy-img-wrapper">
                <Image
                  className="privacy-img"
                  src={realTimePrivacy1}
                  alt="real-time-privacy-1"
                  style={{ width: '100%', height: '100%' }}
                />
              </Text>
              <Text as="p">
                First you connect to our servers to see who is collaborating. 👋
                &nbsp; Hi there.
              </Text>
            </li>
            <li>
              <Text as="p" className="privacy-img-wrapper">
                <Image
                  className="privacy-img"
                  src={realTimePrivacy2}
                  alt="real-time-privacy-2"
                  style={{ width: '100%', height: '100%' }}
                />
              </Text>
              <Text as="p">
                After that, collaborators share code directly with each other (
                <strong>peer-to-peer</strong>).
              </Text>
            </li>
          </ol>
          <Text as="p">
            There&apos;s no centralized server to spy on your keystrokes, and
            Teletype uses <strong>WebRTC</strong> to encrypt all communication
            between collaborators. What happens in the portal stays in the
            portal.
          </Text>
        </Box>
      </section>
      <section id="getting-started" className="section">
        <Box className="wrapper">
          <Heading as="h2">Getting started</Heading>
          <h4>1. Install Atom</h4>
          <Text as="p">
            Download and install <Link href="/">Atom</Link>. It&apos;s free,
            open source, and cross-platform. You can use it on Windows, macOS,
            or Linux.
          </Text>
          <h4>2. Install Teletype for Atom</h4>
          <Text as="p">
            Install the{' '}
            <Link href="atom://settings-view/show-package?package=teletype">
              teletype{' '}
            </Link>
            package to start collaborating today. If you need help, take a look
            at{' '}
            <Link href="https://flight-manual.atom.io/using-atom/sections/atom-packages/">
              how to install Atom packages
            </Link>
            .
          </Text>

          <hr />

          <h4>Share a portal</h4>
          <Text as="p">
            Click the <BroadcastIcon aria-label="Teletype" size={16} /> icon in
            the Atom status bar, and flip the switch to start sharing a portal
            to your workspace. Then invite people to join your portal by sending
            them your portal URL.
          </Text>
          <h4>Join a portal</h4>
          <Text as="p">
            Once someone has provided you with a link to their portal, simply
            follow the link to join the portal. The portal opens and all
            collaborators can edit together in real time.
          </Text>
        </Box>
      </section>
      <footer id="feedback" className="section">
        <Box className="wrapper">
          <Heading as="h2">Feedback</Heading>
          <Text as="p">
            We welcome your{' '}
            <Link href="https://github.com/atom/atom/discussions">
              feedback{' '}
            </Link>
            on this beta release. If you run into any problems, please{' '}
            <Link href="https://github.com/atom/teletype/issues">
              open an issue{' '}
            </Link>
            or take a look at the{' '}
            <Link href="https://github.com/atom/teletype/blob/master/CONTRIBUTING.md">
              contribution guide{' '}
            </Link>
            and start contributing.
          </Text>
        </Box>

        <Box className="wrapper love">
          <CreditBadge />
        </Box>
      </footer>
    </>
  );
}
