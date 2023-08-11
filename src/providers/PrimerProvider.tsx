"use client";
import { BaseStyles, ThemeProvider } from "@primer/react";
const PrimerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider colorMode="auto">
      <BaseStyles className="width-full height-full">{children}</BaseStyles>
    </ThemeProvider>
  );
};
export default PrimerProvider;
