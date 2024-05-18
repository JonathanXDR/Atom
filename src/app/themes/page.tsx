'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PackageCardLegacy from '@/components/legacy/PackageCardLegacy/PackageCardLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import packages from '@/data/packages.json';
import {
  ChevronRightIcon,
  ClockIcon,
  FlameIcon,
  MegaphoneIcon,
  SearchIcon,
  SquirrelIcon,
  TriangleDownIcon,
  XIcon,
} from '@primer/octicons-react';
import {
  ActionList,
  ActionMenu,
  Box,
  Button,
  FormControl,
  Heading,
  IconButton,
  PageLayout,
  Text,
  TextInput,
} from '@primer/react';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Packages() {
  const timeSpans = [
    { name: 'today' },
    { name: 'this week' },
    { name: 'this month' },
  ];

  const TimeSpan = () => {
    const [selectedTimeSpan, setSelectedTimeSpan] = useState(1);
    const [open, setOpen] = useState(false);
    const selectedType = timeSpans[selectedTimeSpan];
    const anchorRef = useRef(null);

    return (
      <ActionMenu open={open} onOpenChange={setOpen} anchorRef={anchorRef}>
        <ActionMenu.Anchor aria-label="Adjust time span">
          <Text
            as="a"
            sx={{
              cursor: 'pointer',
            }}
          >
            {selectedType.name}
            <TriangleDownIcon size={24} />
          </Text>
        </ActionMenu.Anchor>
        <ActionMenu.Overlay width="medium">
          <IconButton
            icon={XIcon}
            variant="invisible"
            aria-label="Close"
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
            }}
          />
          <ActionList selectionVariant="single">
            <ActionList.Group>
              <ActionList.GroupHeading>
                Adjust time span
              </ActionList.GroupHeading>
              <ActionList.Divider />
              {timeSpans.map((type, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedTimeSpan}
                  onSelect={() => setSelectedTimeSpan(index)}
                >
                  {type.name}
                </ActionList.Item>
              ))}
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    );
  };

  const filters = [
    { name: 'Best Match' },
    { name: 'Recently added' },
    { name: 'Most installed/starred' },
  ];

  const Filter = () => {
    const [selectedFilter, setSelectedFilter] = useState(1);
    const selectedType = filters[selectedFilter];

    return (
      <ActionMenu>
        <ActionMenu.Button size="large">
          <Text
            sx={{
              color: 'fg.muted',
            }}
          >
            Sort:{' '}
          </Text>
          {selectedType.name}
        </ActionMenu.Button>
        <ActionMenu.Overlay width="medium">
          <ActionList selectionVariant="single">
            <ActionList.Group>
              <ActionList.GroupHeading>Sort options</ActionList.GroupHeading>
              <ActionList.Divider />
              {filters.map((type, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedFilter}
                  onSelect={() => setSelectedFilter(index)}
                >
                  {type.name}
                </ActionList.Item>
              ))}
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    );
  };

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
        <PageLayout.Content padding="normal" width="full">
          <Heading
            as="h2"
            className="center index-title"
            sx={{
              marginBlock: '0.83em',
            }}
          >
            Pick your favorite flavor of Atom.
          </Heading>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FormControl
              sx={{
                width: '860px',
                marginBottom: 6,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: 2,
              }}
            >
              <FormControl.Label visuallyHidden>Search</FormControl.Label>
              <TextInput
                leadingVisual={SearchIcon}
                size="large"
                placeholder="Search 664,454 themes"
                sx={{
                  width: '100%',
                }}
              />
              {/* <Filter /> */}
              <Button size="large" type="submit">
                Search
              </Button>
            </FormControl>
          </Box>
          <Box className="package-list featured" sx={{ width: '100%' }}>
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <MegaphoneIcon size={32} /> Featured
              </Heading>
            </Box>
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
            </Box>
          </Box>
          <Box className="package-list trending" sx={{ width: '100%' }}>
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <FlameIcon size={32} /> Trending <TimeSpan />
              </Heading>
            </Box>
            <Box className="loading-overlay"></Box>
            {/* <Box className="trending-packages halves"> */}
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
              {/* </Box> */}
            </Box>
          </Box>
          <Box className="package-list newest" sx={{ width: '100%' }}>
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <ClockIcon size={32} /> Newest
                <Link
                  href="https://atom.io/packages/list?sort=created_at&amp;direction=desc"
                  className="package-list-see-all"
                  aria-label="See all newest"
                >
                  See all <ChevronRightIcon size={16} />
                </Link>
              </Heading>
            </Box>
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
            </Box>
          </Box>
          <Box className="package-list updated" sx={{ width: '100%' }}>
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <SquirrelIcon size={32} /> Recently Updated
                <Link
                  href="https://atom.io/packages/list?sort=updated_at&amp;direction=desc"
                  className="package-list-see-all"
                  aria-label="See all recently updated"
                >
                  See all <ChevronRightIcon size={16} />
                </Link>
              </Heading>
            </Box>
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
            </Box>
          </Box>
          <Text className="stats-footnote">
            1,113,135 packages &amp; themes have been downloaded 325,262,080
            times.
          </Text>
        </PageLayout.Content>

        <PageLayout.Footer>
          <FooterLegacy footer={footer} />
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
