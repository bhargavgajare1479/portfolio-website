"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // We only show section links if NOT on home page
  const showSectionLinks = !isHome;

  return (
    <header className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-16 py-8 flex items-center justify-between relative">
      {/* Brand / Home Link */}
      <Link href="/" className="font-heading font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity z-50 relative">
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
        <div className="lg:hidden flex items-center gap-4 z-50 relative">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Tablet/Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex justify-end lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Drawer */}
          <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full border-l border-zinc-200 dark:border-zinc-800  p-8 flex flex-col shadow-2xl overflow-y-auto">
            <div className="mt-20 flex flex-col w-full text-xl font-heading font-medium">
              {showSectionLinks && (
                <div className="flex flex-col w-full border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6">
                  <Link href="/#experience" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Experience
                  </Link>
                  <Link href="/#projects" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Projects
                  </Link>
                  <Link href="/#blogs" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                    Blogs
                  </Link>
                </div>
              )}

              <div className="flex flex-col w-full">
                <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                  <FaFileAlt size={24} className="text-zinc-500" />
                  Resume
                </a>
                <a href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                  <FaGithub size={24} className="text-zinc-500" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/bhargavsg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-4 text-zinc-800 dark:text-zinc-200 hover:opacity-70 transition-opacity font-sans">
                  <FaLinkedin size={24} className="text-zinc-500" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
