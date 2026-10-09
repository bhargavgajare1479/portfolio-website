import React from "react";
import Link from "next/link";

interface TileLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function TileLink({ href, className, children }: TileLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
