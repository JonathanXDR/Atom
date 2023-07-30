'use client';

import { ThemeProvider } from '@primer/react';
export default function Home() {
  return (
    <ThemeProvider colorMode="auto">
      <main>
        <h1>Hello World!</h1>
      </main>
    </ThemeProvider>
  );
}
