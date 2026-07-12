import Link from "next/link";
import { ExperienceContent } from "@/components/ExperienceContent";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link
        href="/"
        className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Experience & Leadership</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed">
        Explore my engineering work history across internships and full-time roles, alongside technical seminars, workshops, and faculty development programs.
      </p>

      <ExperienceContent />
    </main>
  );
}
