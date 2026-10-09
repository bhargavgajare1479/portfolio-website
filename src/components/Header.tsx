"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

const RESUME_URL =
  "https://docs.google.com/document/d/14S3Kd3epOc1SCc7CW21R7p-ICucSNiFH/edit?usp=sharing&ouid=114721097828717507781&rtpof=true&sd=true";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // We only show section links if NOT on home page for desktop header
  const showSectionLinks = !isHome;

  return (
    <header className="w-full max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-16 relative z-50">
      <div className="py-8 flex items-center justify-between">
        {/* Brand / Home Link */}
        <Link
          href="/"
          className="font-heading font-bold text-2xl tracking-tight hover:opacity-80 transition-opacity relative"
        >
          BG
        </Link>

        <nav className="flex items-center gap-6 text-base sm:text-lg font-medium">
          {/* Desktop Navigation (Hidden on Tablet/Mobile) */}
          <div className="hidden lg:flex items-center gap-6">
            {showSectionLinks && (
              <>
                <Link
                  href="/experience"
                  className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans"
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans"
                >
                  Projects
                </Link>
                <Link
                  href="/blogs"
                  className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-sans"
                >
                  Blogs
                </Link>
              </>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3 border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaFileAlt size={18} />
            </a>
            <a
              href="https://github.com/bhargavgajare1479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/bhargavsg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
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

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-1 mb-4 p-3 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/experience"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
          >
            Blogs
          </Link>

          <div className="border-t border-zinc-200 dark:border-zinc-800 my-1 pt-2 flex flex-col gap-1">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
            >
              <FaFileAlt size={16} className="text-zinc-500" />
              Resume
            </a>
            <a
              href="https://github.com/bhargavgajare1479"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
            >
              <FaGithub size={16} className="text-zinc-500" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/bhargavsg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors font-sans"
            >
              <FaLinkedin size={16} className="text-zinc-500" />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
