'use client';
import { TriangleDownIcon } from '@primer/octicons-react';
import { Button, SelectPanel } from '@primer/react';
import React from 'react';
import './VersionPickerLegacy.css';

type Token = {
  text: string;
  id: number;
};

const versions = [
  { text: '1.63.1', id: 165 },
  { text: '1.63.0', id: 164 },
  { text: '1.62.0', id: 163 },
  { text: '1.61.0', id: 162 },
  { text: '1.60.0', id: 161 },
  { text: '1.59.0', id: 160 },
  { text: '1.58.0', id: 159 },
  { text: '1.57.0', id: 158 },
  { text: '1.56.0', id: 157 },
  { text: '1.55.0', id: 156 },
  { text: '1.54.0', id: 155 },
  { text: '1.53.0', id: 154 },
  { text: '1.52.0', id: 153 },
  { text: '1.51.0', id: 152 },
  { text: '1.50.0', id: 151 },
  { text: '1.49.0', id: 150 },
  { text: '1.48.0', id: 149 },
  { text: '1.47.0', id: 148 },
  { text: '1.46.0', id: 147 },
  { text: '1.45.0', id: 146 },
  { text: '1.44.0', id: 145 },
  { text: '1.43.0', id: 144 },
  { text: '1.42.0', id: 143 },
  { text: '1.41.0', id: 142 },
  { text: '1.40.1', id: 141 },
  { text: '1.40.0', id: 140 },
  { text: '1.39.1', id: 139 },
  { text: '1.39.0', id: 138 },
  { text: '1.38.2', id: 137 },
  { text: '1.38.1', id: 136 },
  { text: '1.38.0', id: 135 },
  { text: '1.37.0', id: 134 },
  { text: '1.36.1', id: 133 },
  { text: '1.36.0', id: 132 },
  { text: '1.35.1', id: 131 },
  { text: '1.35.0', id: 130 },
  { text: '1.34.0', id: 129 },
  { text: '1.33.1', id: 128 },
  { text: '1.33.0', id: 127 },
  { text: '1.32.2', id: 126 },
  { text: '1.32.1', id: 125 },
  { text: '1.32.0', id: 124 },
  { text: '1.31.2', id: 123 },
  { text: '1.31.1', id: 122 },
  { text: '1.31.0', id: 121 },
  { text: '1.30.0', id: 120 },
  { text: '1.29.0', id: 119 },
  { text: '1.28.2', id: 118 },
  { text: '1.28.1', id: 117 },
  { text: '1.28.0', id: 116 },
  { text: '1.27.2', id: 115 },
  { text: '1.27.1', id: 114 },
  { text: '1.27.0', id: 113 },
  { text: '1.26.1', id: 112 },
  { text: '1.26.0', id: 111 },
  { text: '1.25.1', id: 110 },
  { text: '1.25.0', id: 109 },
  { text: '1.24.1', id: 108 },
  { text: '1.24.0', id: 107 },
  { text: '1.23.3', id: 106 },
  { text: '1.23.2', id: 105 },
  { text: '1.23.1', id: 104 },
  { text: '1.23.0', id: 103 },
  { text: '1.22.1', id: 102 },
  { text: '1.22.0', id: 101 },
  { text: '1.21.2', id: 100 },
  { text: '1.21.1', id: 99 },
  { text: '1.21.0', id: 98 },
  { text: '1.20.1', id: 97 },
  { text: '1.20.0', id: 96 },
  { text: '1.19.7', id: 95 },
  { text: '1.19.6', id: 94 },
  { text: '1.19.5', id: 93 },
  { text: '1.19.4', id: 92 },
  { text: '1.19.3', id: 91 },
  { text: '1.19.2', id: 90 },
  { text: '1.19.1', id: 89 },
  { text: '1.19.0', id: 88 },
  { text: '1.18.0', id: 87 },
  { text: '1.17.2', id: 86 },
  { text: '1.17.1', id: 85 },
  { text: '1.17.0', id: 84 },
  { text: '1.16.0', id: 83 },
  { text: '1.15.0', id: 82 },
  { text: '1.14.4', id: 81 },
  { text: '1.14.3', id: 80 },
  { text: '1.14.2', id: 79 },
  { text: '1.14.1', id: 78 },
  { text: '1.14.0', id: 77 },
  { text: '1.13.1', id: 76 },
  { text: '1.13.0', id: 75 },
  { text: '1.12.9', id: 74 },
  { text: '1.12.8', id: 73 },
  { text: '1.12.7', id: 72 },
  { text: '1.12.6', id: 71 },
  { text: '1.12.5', id: 70 },
  { text: '1.12.4', id: 69 },
  { text: '1.12.3', id: 68 },
  { text: '1.12.2', id: 67 },
  { text: '1.12.1', id: 66 },
  { text: '1.12.0', id: 65 },
  { text: '1.11.2', id: 64 },
  { text: '1.11.1', id: 63 },
  { text: '1.11.0', id: 62 },
  { text: '1.10.2', id: 61 },
  { text: '1.10.1', id: 60 },
  { text: '1.10.0', id: 59 },
  { text: '1.9.9', id: 58 },
  { text: '1.9.8', id: 57 },
  { text: '1.9.7', id: 56 },
  { text: '1.9.6', id: 55 },
  { text: '1.9.5', id: 54 },
  { text: '1.9.4', id: 53 },
  { text: '1.9.3', id: 52 },
  { text: '1.9.2', id: 51 },
  { text: '1.9.1', id: 50 },
  { text: '1.9.0', id: 49 },
  { text: '1.8.0', id: 48 },
  { text: '1.7.4', id: 47 },
  { text: '1.7.3', id: 46 },
  { text: '1.7.2', id: 45 },
  { text: '1.7.1', id: 44 },
  { text: '1.7.0', id: 43 },
  { text: '1.6.2', id: 42 },
  { text: '1.6.1', id: 41 },
  { text: '1.6.0', id: 40 },
  { text: '1.5.4', id: 39 },
  { text: '1.5.3', id: 38 },
  { text: '1.5.2', id: 37 },
  { text: '1.5.1', id: 36 },
  { text: '1.5.0', id: 35 },
  { text: '1.4.3', id: 34 },
  { text: '1.4.2', id: 33 },
  { text: '1.4.1', id: 32 },
  { text: '1.4.0', id: 31 },
  { text: '1.3.3', id: 30 },
  { text: '1.3.2', id: 29 },
  { text: '1.3.1', id: 28 },
  { text: '1.3.0', id: 27 },
  { text: '1.2.4', id: 26 },
  { text: '1.2.3', id: 25 },
  { text: '1.2.2', id: 24 },
  { text: '1.2.1', id: 23 },
  { text: '1.2.0', id: 22 },
  { text: '1.1.0', id: 21 },
  { text: '1.0.19', id: 20 },
  { text: '1.0.18', id: 19 },
  { text: '1.0.17', id: 18 },
  { text: '1.0.16', id: 17 },
  { text: '1.0.15', id: 16 },
  { text: '1.0.14', id: 15 },
  { text: '1.0.13', id: 14 },
  { text: '1.0.12', id: 13 },
  { text: '1.0.11', id: 12 },
  { text: '1.0.10', id: 11 },
  { text: '1.0.9', id: 10 },
  { text: '1.0.8', id: 9 },
  { text: '1.0.7', id: 8 },
  { text: '1.0.6', id: 7 },
  { text: '1.0.5', id: 6 },
  { text: '1.0.4', id: 5 },
  { text: '1.0.3', id: 4 },
  { text: '1.0.2', id: 3 },
  { text: '1.0.1', id: 2 },
  { text: '1.0.0', id: 1 },
];

const VersionPickerLegacy: React.FC = () => {
  const [selected, setSelected] = React.useState<Token | undefined>(
    versions[0]
  );
  const [filter, setFilter] = React.useState('');
  const filteredItems = versions.filter((version) =>
    version.text.toLowerCase().startsWith(filter.toLowerCase())
  );
  const [open, setOpen] = React.useState(false);

  return (
    <SelectPanel
      renderAnchor={({ children, ...anchorProps }) => (
        <Button
          sx={{
            width: '100%',
          }}
          size="large"
          trailingAction={TriangleDownIcon}
          {...anchorProps}
        >
          {children || 'Select version'}
        </Button>
      )}
      placeholderText="Search versions"
      open={open}
      onOpenChange={setOpen}
      items={filteredItems}
      selected={selected}
      onSelectedChange={setSelected}
      onFilterChange={setFilter}
      showItemDividers={true}
      overlayProps={{ width: 'small', height: 'xsmall' }}
    />
  );
};

export default VersionPickerLegacy;
