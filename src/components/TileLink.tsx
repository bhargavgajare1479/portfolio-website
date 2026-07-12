"use client";

import React from "react";
import Link from "next/link";
import { isMobileOrTablet } from "@/lib/device";

interface TileLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function TileLink({ href, className, children }: TileLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Except mobile and tablet screens (horizontal and vertical),
    // clicking a tile on the hero page directly opens the full-fledged webpage
    // rather than intercepting into a modal.
    if (isMobileOrTablet()) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <Link
      href={href}
      scroll={false}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
