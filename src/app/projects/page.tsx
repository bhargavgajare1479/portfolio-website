import { ProjectsContent } from "@/components/ProjectsContent";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Projects</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        Detailed engineering architecture and challenges across all systems and platforms.
      </p>

      <ProjectsContent />
    </main>
  );
}

