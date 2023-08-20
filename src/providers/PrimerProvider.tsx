'use client';
import '@/app/tailwind.css';
import { BaseStyles, ThemeProvider } from '@primer/react';
import deepmerge from 'deepmerge';

const AtomOneLight = deepmerge(Atom, {
  colorSchemes: {
    light: {
      colors: {
        canvas: {
          default: '#FAFAFA',
        },
        fg: {
          default: '#383A42',
        },
        border: {
          default: '#DBDBDC',
        },
      },
    },
  },
});

const AtomOneDark = deepmerge(Atom, {
  colorSchemes: {
    dark: {
      colors: {
        canvas: {
          default: '#282C34',
        },
        fg: {
          default: '#ABB2BF',
        },
        border: {
          default: '#181A1F',
        },
      },
    },
  },
});

const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider colorMode="light" preventSSRMismatch>
      <BaseStyles className="w-full h-full">{children}</BaseStyles>
    </ThemeProvider>
  );
};
export default PrimerProvider;
