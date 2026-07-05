"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />; // Placeholder of the same size to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-black dark:hover:text-white"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
    </button>
  );
}
