'use client';
import { BaseStyles, ThemeProvider, theme } from '@primer/react';
import deepmerge from 'deepmerge';

const Atom = deepmerge(theme, {
  fonts: {
    normal:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    mono: "'Helvetica Neue', Helvetica, arial, freesans, clean, sans-serif",
    error: "Verdana, 'Verdana Ref', sans-serif",
  },
  colorSchemes: {
    light: {
      colors: {
        fg: {
          default: '#574c4f',
          muted: '#949189',
          subtle: '#9e9b95',
          emphasis: '#ffffff',
        },
        canvas: {
          default: '#ffffff',
          overlay: '#ffffff',
          inset: '#efeae1',
          subtle: '#f9f6ed',
        },
        accent: {
          fg: '#40a977',
          emphasis: '#3b9b6d',
          muted: '#b0d7c4',
          subtle: '#c4e1d3',
        },
        header: {
          text: '#efeae1',
          bg: '#584b4f',
          divider: '#efeae1',
          logo: '#efeae1',
        },
      },
    },
    dark: {
      colors: {
        fg: {
          default: '#efdab9',
          muted: '#786f63',
          subtle: '#8e8373',
          emphasis: '#ffffff',
        },
        canvas: {
          default: '#343233',
          overlay: '#343233',
          inset: '#2c2a2b',
          subtle: '#3d3a3a',
        },
        accent: {
          fg: '#ffd152',
          emphasis: '#ebac00',
          muted: '#ffecb9',
          subtle: '#fff1cb',
        },
        header: {
          text: '#efeae1',
          bg: '#584b4f',
          divider: '#efeae1',
          logo: '#efeae1',
        },
      },
    },
  },
});

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider colorMode="auto" preventSSRMismatch>
      <BaseStyles bg="canvas.default" className="w-full min-h-screen">
        {children}
      </BaseStyles>
    </ThemeProvider>
  );
};

export default PrimerProvider;
