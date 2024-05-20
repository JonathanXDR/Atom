import {
  CodeIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
  PlusIcon,
  RepoIcon,
  StarIcon,
  TelescopeIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import {
  ActionList,
  ActionMenu,
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Link,
  Octicon,
  TabNav,
  Text,
} from "@primer/react";
import React from "react";

const GitHubRepoCard: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "border.default",
          borderRadius: "0.25rem",
          marginY: 4,
          backgroundColor: "canvas.subtle",
          boxShadow: "shadow.small",
        }}
      >
        <Heading
          as="h2"
          sx={{
            fontSize: "0.75rem",
            color: "fg.muted",
            paddingX: 3,
            marginTop: 3,
          }}
        >
          <TelescopeIcon /> Based on repositories you&apos;ve starred
        </Heading>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 2,
              marginY: 3,
              paddingX: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: 1,
              }}
            >
              <Text
                sx={{
                  marginTop: "2px",
                }}
              >
                <Octicon
                  icon={RepoIcon}
                  size={16}
                  sx={{
                    color: "fg.muted",
                    marginRight: 2,
                  }}
                />{" "}
              </Text>
              <Heading
                as="h3"
                sx={{
                  fontSize: "1.25rem",
                  color: "fg.muted",
                  fontWeight: "normal",
                  lineHeight: "1.25",
                }}
              >
                <Link href="/n64decomp">n64decomp</Link> /{" "}
                <Link
                  href="/n64decomp/mk64"
                  sx={{
                    fontWeight: "bold",
                    wordBreak: "break-word",
                  }}
                >
                  mk64
                </Link>{" "}
              </Heading>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ButtonGroup>
                <Button leadingVisual={StarIcon}>
                  Star
                  <Button count={1} />
                </Button>
                <ActionMenu>
                  <ActionMenu.Anchor>
                    <IconButton
                      aria-label="Open menu"
                      icon={TriangleDownIcon}
                    />
                  </ActionMenu.Anchor>

                  <ActionMenu.Overlay width="medium">
                    <ActionList>
                      <ActionList.Group selectionVariant="multiple">
                        <ActionList.GroupHeading>Lists</ActionList.GroupHeading>
                        <ActionList.Divider />
                        <ActionList.Item>List 1</ActionList.Item>
                        <ActionList.Item>List 2</ActionList.Item>
                        <ActionList.Item>List 3</ActionList.Item>
                        <ActionList.Item>List 4</ActionList.Item>
                      </ActionList.Group>
                      <ActionList.Divider />
                      <ActionList.Item>
                        <ActionList.LeadingVisual>
                          <PlusIcon />
                        </ActionList.LeadingVisual>
                        Create list
                      </ActionList.Item>
                    </ActionList>
                  </ActionMenu.Overlay>
                </ActionMenu>
              </ButtonGroup>
            </Box>
          </Box>

          <TabNav
            aria-label="Main"
            sx={{
              paddingX: 3,
            }}
          >
            <TabNav.Link selected>
              <CodeIcon /> Code
            </TabNav.Link>
            <TabNav.Link>
              <IssueOpenedIcon /> Issues
            </TabNav.Link>
            <TabNav.Link>
              <GitPullRequestIcon /> Pull requests
            </TabNav.Link>
          </TabNav>
          <Box
            sx={{
              backgroundColor: "canvas.default",
              borderRadius: "0 0 0.25rem 0.25rem",
            }}
          >
            <Box
              sx={{
                paddingX: 3,
                paddingTop: 3,
              }}
            >
              <Text
                as="p"
                sx={{
                  color: "fg.muted",
                  marginBottom: 0,
                }}
              >
                A speedy Mario Kart 64 decompilation, brought to you by the
                cousin of a tame racing driver.
              </Text>
            </Box>

            <Box
              sx={{
                padding: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  fontSize: "0.75rem",
                  listStyle: "none",
                  color: "fg.muted",
                }}
              >
                <Box
                  sx={{
                    marginRight: 4,
                  }}
                >
                  Updated
                  <Box
                    sx={{
                      flexWrap: "nowrap",
                    }}
                    title="Aug 11, 2023, 6:16 PM GMT+2"
                  >
                    Aug 11, 2023
                  </Box>
                </Box>

                <Box
                  sx={{
                    marginRight: 4,
                  }}
                >
                  <Text
                    sx={{
                      fontSize: "0.75rem",
                      marginY: 1,
                      marginLeft: 0,
                    }}
                  >
                    <Text
                      sx={{
                        backgroundColor: "#555555",
                        position: "relative",
                        top: "1px",
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        border: "1px solid",
                        borderColor: "border.emphasis",
                        borderRadius: "50%",
                      }}
                    ></Text>
                    {"  "}
                    <Text>C</Text>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GitHubRepoCard;
