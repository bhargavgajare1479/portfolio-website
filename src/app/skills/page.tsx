import { SkillsContent } from "@/components/SkillsContent";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Skills & Expertise</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        An overview of core languages, spatial computing frameworks, backend systems, DevOps tools, and architectural concepts.
      </p>

      <SkillsContent />

      <Link href="/" className="mt-16 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>
    </main>
  );
}

