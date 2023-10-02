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
        /* -------------------------------- Not Final ------------------------------- */
        border: {
          default: '#786f63',
        },
        btn: {
          text: '#efdab9',
          bg: '#3d3a3a',
          border: '#786f63',
          hoverBg: '#57514d',
          hoverBorder: '#57514d',
          activeBg: '#7e746f',
          activeBorder: '#7e746f',
          selectedBg: '#343233',
          counterBg: '#57514d',

          // id="Blue" fill="#659CC8"
          // id="Green" fill="#78AF9F"
          // id="Yellow" fill="#DDA032"
          // id="Orange" fill="#D36E2D"
          // id="Red" fill="#C13F21"
          primary: {
            text: '#343233',
            bg: '#dda032',
            border: '#dda032',
            hoverBg: '#c68f2f',
            hoverBorder: '#c68f2f',
            selectedBg: '#dda032',
            disabledText: '#8e8373',
            disabledBg: '#3d3a3a',
            disabledBorder: '#8e8373',
            icon: '#343233',
            counterBg: '#c68f2f',
          },
          outline: {
            text: '#78Af9f',
            hoverText: '#343233',
            hoverBg: '#57514d',
            hoverBorder: '#57514d',
            hoverCounterBg: '#78af9f',
            selectedText: '#343233',
            selectedBg: '#78af9f',
            selectedBorder: '#78af9f',
            disabledText: '#8e8373',
            disabledBg: '#343233',
            disabledCounterBg: '#57514d',
            counterBg: '#78af9f',
            icon: '#78af9f',
            hoverIcon: '#78af9f',
            counterFg: '#343233',
            hoverCounterFg: '#343233',
            disabledCounterFg: '#8e8373',
          },
          danger: {
            text: '#c13f21',
            hoverText: '#343233',
            hoverBg: '#57514d',
            hoverBorder: '#57514d',
            hoverCounterBg: '#c13f21',
            selectedText: '#343233',
            selectedBg: '#c13f21',
            selectedBorder: '#c13f21',
            disabledText: '#8e8373',
            disabledBg: '#343233',
            disabledCounterBg: '#57514d',
            counterBg: '#c13f21',
            icon: '#c13f21',
            hoverIcon: '#c13f21',
            counterFg: '#343233',
            hoverCounterFg: '#343233',
            disabledCounterFg: '#8e8373',
          },
        },
      },
    },
  },
});

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider colorMode="auto" theme={Atom} preventSSRMismatch>
      <BaseStyles bg="canvas.default" className="w-full min-h-screen">
        {children}
      </BaseStyles>
    </ThemeProvider>
  );
};

export default PrimerProvider;
