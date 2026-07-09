import { skillCategories } from "@/lib/skills";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Skills & Expertise</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        An overview of core languages, spatial computing frameworks, backend systems, DevOps tools, and architectural concepts.
      </p>

      <div className="w-full space-y-16">
        {skillCategories.map((category) => (
          <div key={category.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0">
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-100">{category.title}</h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {category.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-zinc-200/80 dark:bg-zinc-800/80 px-5 py-2.5 rounded-full text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link href="/" className="mt-16 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>
    </main>
  );
}
