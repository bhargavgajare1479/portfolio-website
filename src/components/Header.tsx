"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // We only show section links if NOT on home page for desktop header
  const showSectionLinks = !isHome;

  return (
    <header className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-16 py-8 flex items-center justify-between relative z-50">
      {/* Brand / Home Link */}
      <Link href="/" className="font-heading font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity relative">
        BG
      </Link>

      <nav className="flex items-center gap-6 text-base sm:text-lg font-medium">
        {/* Desktop Navigation (Hidden on Tablet/Mobile) */}
        <div className="hidden lg:flex items-center gap-6">
          {showSectionLinks && (
            <>
              <Link href="/#experience" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans">
                Experience
              </Link>
              <Link href="/#projects" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans">
                Projects
              </Link>
              <Link href="/#blogs" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans">
                Blogs
              </Link>
            </>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3 border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-2">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <FaFileAlt size={18} />
          </a>
          <a href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/bhargavsg" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <FaLinkedin size={18} />
          </a>
          <ThemeToggle />
        </div>

        {/* Tablet/Mobile Hamburger Button (Visible on < lg) */}
        <div className="lg:hidden flex items-center gap-4 relative">
          <ThemeToggle />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="p-2 text-zinc-800 dark:text-zinc-200 focus:outline-none cursor-pointer"
            aria-label="Open menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Tablet/Mobile Menu Drawer via Portal */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(false);
              }}
            />

            {/* Side Drawer */}
            <div
              className="relative w-[85vw] max-w-sm h-full bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 p-8 flex flex-col shadow-2xl overflow-y-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header with Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100">Navigation</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="mt-8 flex flex-col w-full text-lg font-heading font-medium">
                <div className="flex flex-col w-full border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6 gap-2">
                  <Link href="/#experience" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Experience
                  </Link>
                  <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Projects
                  </Link>
                  <Link href="/education" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Education
                  </Link>
                  <Link href="/#blogs" onClick={() => setMobileMenuOpen(false)} className="w-full py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Blogs
                  </Link>
                </div>

                <div className="flex flex-col w-full gap-2">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    <FaFileAlt size={20} className="text-zinc-500" />
                    Resume
                  </a>
                  <a href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    <FaGithub size={20} className="text-zinc-500" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/bhargavsg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    <FaLinkedin size={20} className="text-zinc-500" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}


