"use client";
import FooterItem from "@/components/FooterItemLegacy/FooterItemLegacy";
import NavItemLegacy from "@/components/NavItemLegacy/NavItemLegacy";
import {
  ChevronRightIcon,
  ClockIcon,
  FlameIcon,
  MegaphoneIcon,
  SearchIcon,
  SquirrelIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import {
  ActionList,
  ActionMenu,
  Button,
  FormControl,
  Text,
  TextInput,
} from "@primer/react";
import Link from "next/link";
import React from "react";
import "./main.css";
import "/public/assets/css/application.css";

export default function Packages() {
  const timeSpans = [
    { name: "today" },
    { name: "this week" },
    { name: "this month" },
  ];

  const TimeSpan = () => {
    const [selectedTimeSpan, setSelectedTimeSpan] = React.useState(1);
    const selectedType = timeSpans[selectedTimeSpan];

    return (
      <ActionMenu>
        <ActionMenu.Anchor aria-label="Adjust time span">
          <Text
            as="a"
            sx={{
              cursor: "pointer",
            }}
          >
            {selectedType.name}
            <TriangleDownIcon size={24} />
          </Text>
        </ActionMenu.Anchor>
        <ActionMenu.Overlay width="medium">
          <ActionList selectionVariant="single">
            <ActionList.Group title="Adjust time span">
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
    { name: "Best Match" },
    { name: "Recently added" },
    { name: "Most installed/starred" },
  ];

  const Filter = () => {
    const [selectedFilter, setSelectedFilter] = React.useState(1);
    const selectedType = filters[selectedFilter];

    return (
      <ActionMenu>
        <ActionMenu.Button size="large">
          <Text
            sx={{
              color: "fg.muted",
            }}
          >
            Sort:{" "}
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
    <body>
      <div className="footer-push">
        <NavItemLegacy />

        <div id="js-pjax-container">
          <div className="wrapper content-push packages">
            <h2 className="center index-title">
              Packages make Atom do amazing things.
            </h2>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TextInput
                leadingVisual={SearchIcon}
                size="large"
                placeholder="Search 431,802 packages"
                sx={{
                  width: "100%",
                }}
              />
              <Filter />
              <Button size="large" type="submit">
                Search
              </Button>
            </FormControl>

            <div className="package-list featured">
              <div className="package-list-header">
                <h3 className="package-list-title">
                  <MegaphoneIcon size={32} /> Featured
                </h3>
              </div>
              <div className="halves">{/* TODO: Add cards here */}</div>
            </div>

            <div className="package-list trending">
              <div className="package-list-header">
                <h3 className="package-list-title">
                  <FlameIcon size={32} /> Trending <TimeSpan />
                </h3>
              </div>
              <div className="loading-overlay"></div>
              <div className="trending-packages halves">
                {/* TODO: Add cards here */}
              </div>
            </div>

            <div className="package-list newest">
              <div className="package-list-header">
                <h3 className="package-list-title">
                  <ClockIcon size={32} /> Newest
                  <Link
                    href="https://atom.io/packages/list?sort=created_at&amp;direction=desc"
                    className="package-list-see-all"
                    aria-label="See all newest"
                  >
                    See all <ChevronRightIcon size={16} />
                  </Link>
                </h3>
              </div>
              <div className="halves">{/* TODO: Add cards here */}</div>
            </div>

            <div className="package-list updated">
              <div className="package-list-header">
                <h3 className="package-list-title">
                  <SquirrelIcon size={32} /> Recently Updated
                  <Link
                    href="https://atom.io/packages/list?sort=updated_at&amp;direction=desc"
                    className="package-list-see-all"
                    aria-label="See all recently updated"
                  >
                    See all <ChevronRightIcon size={16} />
                  </Link>
                </h3>
              </div>
              <div className="halves">{/* TODO: Add cards here */}</div>
            </div>

            <p className="stats-footnote">
              1,113,135 packages &amp; themes have been downloaded 325,262,080
              times.
            </p>
          </div>
          N
        </div>

        <div className="footer-pad"></div>
      </div>

      <FooterItem />

      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
    </body>
  );
}
