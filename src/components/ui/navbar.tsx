"use client"

import * as React from "react";
import Link from "next/link";

type NavbarProps = {
  lexend: { className: string };
  ThemeToggle: React.ComponentType;
};

export function Navbar({ lexend, ThemeToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 justify-between mx-auto w-full max-w-screen-xl px-8">
        <div className="flex items-center">
          <Link href="/" className={`font-bold text-xl uppercase ${lexend.className}`}>BG</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/education" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Education</Link>
          <Link href="/skills" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Skills</Link>
          <Link href="/experience" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Experience</Link>
          <Link href="/projects" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Projects</Link>
          <Link href="/contact" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Contact Me</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}