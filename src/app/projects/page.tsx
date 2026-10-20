import type { Metadata } from "next";
import { ProjectsContent } from "@/components/ProjectsContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Detailed engineering architecture, challenges, and solutions across spatial computing and systems projects.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto py-24 px-8 flex flex-col items-start">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">Projects</h1>
      <p className="text-lg sm:text-xl font-normal text-zinc-700 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        Detailed engineering architecture and challenges across all systems and platforms.
      </p>

      <ProjectsContent />
    </main>
  );
}

