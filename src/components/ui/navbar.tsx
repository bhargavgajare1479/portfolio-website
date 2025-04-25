"use client"

import * as React from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

type NavbarProps = {
  lexend: { className: string };
  ThemeToggle: React.ComponentType;
};

export function Navbar({ lexend, ThemeToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 justify-between mx-auto w-full max-w-screen-xl px-4 sm:px-8">
        <div className="flex items-center">
          <Link href="/" className={`font-bold text-xl uppercase ${lexend.className}`}>BG</Link>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/education" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Education</Link>
          <Link href="/skills" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Skills</Link>
          <Link href="/experience" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Experience</Link>
          <Link href="/projects" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Projects</Link>
          <Link href="/contact" className="px-3 py-2 hover:underline" style={{ fontFamily: 'var(--font-outfit)' }}>Contact Me</Link>
          <ThemeToggle />
        </div>
        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b z-50 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col items-center py-4 gap-2">
            <Link href="/education" className="px-4 py-2 w-full text-center hover:underline" style={{ fontFamily: 'var(--font-outfit)' }} onClick={() => setMenuOpen(false)}>Education</Link>
            <Link href="/skills" className="px-4 py-2 w-full text-center hover:underline" style={{ fontFamily: 'var(--font-outfit)' }} onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link href="/experience" className="px-4 py-2 w-full text-center hover:underline" style={{ fontFamily: 'var(--font-outfit)' }} onClick={() => setMenuOpen(false)}>Experience</Link>
            <Link href="/projects" className="px-4 py-2 w-full text-center hover:underline" style={{ fontFamily: 'var(--font-outfit)' }} onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/contact" className="px-4 py-2 w-full text-center hover:underline" style={{ fontFamily: 'var(--font-outfit)' }} onClick={() => setMenuOpen(false)}>Contact Me</Link>
          </nav>
        </div>
      )}
    </header>
  );
}