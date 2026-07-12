"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // We only show section links if NOT on home page for desktop header
  const showSectionLinks = !isHome;

  return (
    <header className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-16 relative z-50">
      <div className="py-8 flex items-center justify-between">
        {/* Brand / Home Link */}
        <Link href="/" className="font-heading font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity relative">
          BG
        </Link>

        <nav className="flex items-center gap-6 text-base sm:text-lg font-medium">
          {/* Desktop Navigation (Hidden on Tablet/Mobile) */}
          <div className="hidden lg:flex items-center gap-6">
            {showSectionLinks && (
              <>
                <Link href="/experience" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans">
                  Experience
                </Link>
                <Link href="/projects" className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans">
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
              className="p-2 text-zinc-800 dark:text-zinc-200 focus:outline-none cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — inline dropdown (no portal, no overlay) */}
      {mobileMenuOpen && (
        // <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col py-4 px-2 gap-1">
          {showSectionLinks && (
            <>
              <Link
                href="/experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans"
              >
                Projects
              </Link>
              <Link
                href="/education"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans"
              >
                Education
              </Link>
              <Link
                href="/#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans"
              >
                Blogs
              </Link>
            </>
          )}

          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-2 pt-3 flex flex-col gap-1">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans">
              <FaFileAlt size={18} className="text-zinc-500" />
              Resume
            </a>
            <a href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans">
              <FaGithub size={18} className="text-zinc-500" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/bhargavsg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-2.5 text-base text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-sans">
              <FaLinkedin size={18} className="text-zinc-500" />
              LinkedIn
            </a>
          </div>
        </div>
      )
      }
    </header >
  );
}
