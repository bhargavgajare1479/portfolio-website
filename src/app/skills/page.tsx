"use client";
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { SiC, SiCplusplus, SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiFirebase, SiGit, SiGithub, SiMysql, SiGooglecloud } from "react-icons/si";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function SkillsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  // Define icon color based on resolvedTheme
  const iconColor = resolvedTheme === "dark" ? "#fff" : "#222";
  // Utility class for SVGs
  const svgClass = resolvedTheme === "dark" ? "object-contain" : "object-contain filter invert-0 brightness-0";
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Skills</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className}`}>The tools I learnt— and the instincts I built along the way.</p>
        <h2 className={`mt-10 mb-8 text-2xl sm:text-3xl font-semibold text-center ${lexend.className}`}>Programming Languages</h2>
        <div className="mt-6 grid grid-cols-3 gap-x-0 gap-y-4 justify-items-center mx-auto">
          <div className="group flex flex-col items-center">
            <SiC size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>C</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiCplusplus size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>C++</span>
          </div>
          <div className="group flex flex-col items-center">
            <img src="/csharp.svg" alt="C#" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>C#</span>
          </div>
          <div className="group flex flex-col items-center">
            <img src="/java.svg" alt="Java" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Java</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiPython size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Python</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiHtml5 size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>HTML</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiCss3 size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>CSS</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiJavascript size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>JavaScript</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiTypescript size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>TypeScript</span>
          </div>
        </div>
        <h2 className={`mt-12 mb-8 text-2xl sm:text-3xl font-semibold text-center ${lexend.className}`}>Frameworks, Libraries, and Engines</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-0 gap-y-4 justify-items-center mx-auto">
          <div className="group flex flex-col items-center">
            <img src="/unity.svg" alt="Unity" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Unity</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiReact size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>React</span>
          </div>
          <div className="group flex flex-col items-center">
            <img src="/next.svg" alt="Next.js" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Next.js</span>
          </div>
          <div className="group flex flex-col items-center">
            <img src="/tailwind.svg" alt="Tailwind CSS" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Tailwind CSS</span>
          </div>
        </div>
        <h2 className={`mt-12 mb-8 text-2xl sm:text-3xl font-semibold text-center ${lexend.className}`}>Tools</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-0 gap-y-4 justify-items-center mx-auto">
          <div className="group flex flex-col items-center">
            <SiFirebase size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Firebase</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiGit size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Git</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiGithub size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>GitHub</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiMysql size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>MySQL</span>
          </div>
          <div className="group flex flex-col items-center">
            <img src="/vercel.svg" alt="Vercel" width={36} height={36} className={svgClass} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Vercel</span>
          </div>
          <div className="group flex flex-col items-center">
            <SiGooglecloud size={36} color={iconColor} />
            <span className={`mt-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded shadow text-foreground ${lexend.className}`}>Google Cloud</span>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
} 