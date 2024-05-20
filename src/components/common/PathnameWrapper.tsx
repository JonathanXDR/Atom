"use client";

import { usePathname } from "next/navigation";
import React from "react";

const PathnameWrapper = ({ children }: { children: React.ReactElement }) => {
  const pathname = usePathname();

  return React.cloneElement(children, { pathname });
};

export default PathnameWrapper;
