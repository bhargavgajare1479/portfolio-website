import type { Metadata } from "next";
import { EducationContent } from "@/components/EducationContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background, degrees, coursework, and scholastic honors by Bhargav Gajare.",
};

export default function EducationPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto py-24 px-8 flex flex-col items-start">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">Education</h1>
      <p className="text-lg sm:text-xl font-normal text-zinc-700 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        Academic background, institutions, degrees, and key achievements.
      </p>

      <EducationContent />
    </main>
  );
}

