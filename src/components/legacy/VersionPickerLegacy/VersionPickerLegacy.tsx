"use client";
import { Select } from "@primer/react";
import React from "react";
import "./VersionPickerLegacy.css";

interface VersionPickerLegacyProps {
  versions: Token[];
}

type Token = {
  text: string;
  id: number;
};

const VersionPickerLegacy: React.FC<VersionPickerLegacyProps> = ({
  versions,
}) => {
  const latestVersion = versions[0];

  return (
    <Select defaultValue={latestVersion.id.toString()} block>
      {versions.map((version) => (
        <Select.Option key={version.id} value={version.id.toString()}>
          {version.text}
        </Select.Option>
      ))}
    </Select>
  );
};

export default VersionPickerLegacy;
