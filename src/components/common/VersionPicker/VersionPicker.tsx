"use client";
import { TriangleDownIcon } from "@primer/octicons-react";
import { Button, SelectPanel } from "@primer/react";
import React from "react";
import "./VersionPicker.css";

interface VersionPickerProps {
  versions: Token[];
}

type Token = {
  text: string;
  id: number;
};

const VersionPicker: React.FC<VersionPickerProps> = ({ versions }) => {
  const [selected, setSelected] = React.useState<Token | undefined>(
    versions[0],
  );
  const [filter, setFilter] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const filteredItems = versions
    .filter((version) =>
      version.text.toLowerCase().startsWith(filter.toLowerCase()),
    )
    .map((version) => ({
      ...version,
      key: version.id,
    }));

  return (
    <SelectPanel
      renderAnchor={({ children, ...anchorProps }) => (
        <Button
          sx={{ width: "100%" }}
          size="large"
          trailingAction={TriangleDownIcon}
          {...anchorProps}
        >
          {children || "Select version"}
        </Button>
      )}
      placeholderText="Search versions"
      open={open}
      onOpenChange={setOpen}
      items={filteredItems}
      selected={selected}
      onSelectedChange={(item: any) => setSelected(item as Token | undefined)}
      onFilterChange={setFilter}
      showItemDividers={true}
      overlayProps={{ width: "medium", height: "xlarge" }}
    />
  );
};

export default VersionPicker;
