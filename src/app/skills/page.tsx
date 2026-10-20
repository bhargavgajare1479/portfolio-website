import type { Metadata } from "next";
import { SkillsContent } from "@/components/SkillsContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "Core programming languages, XR, spatial computing, full stack development, and systems engineering concepts.",
};

export default function SkillsPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">Skills & Expertise</h1>
      <p className="text-lg sm:text-xl font-normal text-zinc-700 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        An overview of core languages, spatial computing frameworks, full stack systems, DevOps tools, and architectural concepts.
      </p>

      <SkillsContent />
    </main>
  );
}

