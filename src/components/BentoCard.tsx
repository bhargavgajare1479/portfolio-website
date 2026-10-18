"use client";

import { MouseEvent, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function BentoCard({ children, className = "", id }: BentoCardProps) {
  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  }

  return (
    <div
      id={id}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col overflow-hidden rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xs transition-colors duration-500 hover:bg-white/60 dark:hover:bg-zinc-900/60 p-8 lg:p-10 ${className}`}
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* Light Mode Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 dark:opacity-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.075), transparent 80%)",
        }}
      />
      {/* Dark Mode Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 80%)",
        }}
      />
      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
