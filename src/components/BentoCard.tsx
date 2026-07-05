"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function BentoCard({ children, className = "", id }: BentoCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      id={id}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col overflow-hidden rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xs transition-colors duration-500 hover:bg-white/60 dark:hover:bg-zinc-900/60 p-8 lg:p-10 ${className}`}
    >
      {/* Light Mode Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 dark:opacity-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0,0,0,0.075),
              transparent 80%
            )
          `,
        }}
      />
      {/* Dark Mode Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
    </div>
  );
}
