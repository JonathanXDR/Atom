'use client';
import FooterLegacy from '@/components/legacy/FooterLegacy/FooterLegacy';
import NavLegacy from '@/components/legacy/NavLegacy/NavLegacy';
import PackageCardLegacy from '@/components/legacy/PackageCardLegacy/PackageCardLegacy';
import footer from '@/data/footer.json';
import nav from '@/data/nav.json';
import packages from '@/data/packages.json';
import {
  CheckIcon,
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
  Text,
  TextInput,
} from '@primer/react';
import Link from 'next/link';
import React from 'react';

export default function Packages() {
  const timeSpans = [
    { name: 'today' },
    { name: 'this week' },
    { name: 'this month' },
  ];

  const TimeSpan = () => {
    const [selectedTimeSpan, setSelectedTimeSpan] = React.useState(1);
    const selectedType = timeSpans[selectedTimeSpan];

    return (
      <ActionMenu>
        <ActionMenu.Anchor aria-label="Adjust time Text">
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
          <ActionList selectionVariant="single">
            <ActionList.Group title="Adjust time Text">
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
    const [selectedFilter, setSelectedFilter] = React.useState(1);
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
            <ActionList.Group title="Sort options">
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
      <Box className="footer-push">
        <NavLegacy nav={nav} />

        <Box className="wrapper content-push packages">
          <Heading
            as="h2"
            className="center index-title"
            sx={{
              marginBlock: '1em',
            }}
          >
            Packages make Atom do amazing things.
          </Heading>
          <FormControl
            sx={{
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
              placeholder="Search 431,802 packages"
              sx={{
                width: '100%',
              }}
            />
            {/* <Filter /> */}
            <Button size="large" type="submit">
              Search
            </Button>
          </FormControl>
          <Box className="package-list featured">
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <MegaphoneIcon size={32} /> Featured
              </Heading>
            </Box>
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
            </Box>
          </Box>
          <Box className="package-list trending">
            <Box className="package-list-header">
              <Heading as="h3" className="package-list-title">
                <FlameIcon size={32} /> Trending{' '}
                <Box className="trending-select">
                  <Box className="select-menu js-menu-container js-select-menu">
                    <Link
                      className="js-menu-target"
                      href="https://atom.io/packages"
                    >
                      <Text className="js-select-button">this week</Text>
                      <TriangleDownIcon size={32} />
                    </Link>

                    <Box className="select-menu-modal-holder js-menu-content js-navigation-container">
                      <Box className="select-menu-modal">
                        <Box className="select-menu-header">
                          <Text className="select-menu-title">
                            Adjust time Text
                          </Text>
                          <XIcon size={16} />
                        </Box>

                        <Box className="select-menu-list">
                          <Box>
                            <Box
                              className="select-menu-item js-navigation-item"
                              data-trending-sort="daily"
                            >
                              <CheckIcon size={16} />
                              <Box className="select-menu-item-text js-select-button-text">
                                today
                              </Box>
                            </Box>

                            <Box
                              className="select-menu-item js-navigation-item selected"
                              data-trending-sort="weekly"
                            >
                              <CheckIcon size={16} />
                              <Box className="select-menu-item-text js-select-button-text">
                                this week
                              </Box>
                            </Box>

                            <Box
                              className="select-menu-item js-navigation-item"
                              data-trending-sort="monthly"
                            >
                              <CheckIcon size={16} />
                              <Box className="select-menu-item-text js-select-button-text">
                                this month
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Heading>
            </Box>
            <Box className="loading-overlay"></Box>
            {/* <Box className="trending-packages halves"> */}
            <Box
              // className="halves"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
              {/* </Box> */}
            </Box>
          </Box>
          <Box className="package-list newest">
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 4,
              }}
            >
              {packages.map((packageCard, index) => (
                <PackageCardLegacy packageCard={packageCard} key={index} />
              ))}
            </Box>
          </Box>
          <Box className="package-list updated">
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
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
        </Box>

        <Box className="footer-pad"></Box>
      </Box>
      <FooterLegacy footer={footer} />
      <Box id="lean_overlay"></Box>
      <Box id="lean_overlay"></Box>
      <Box id="lean_overlay"></Box>
    </>
  );
}
