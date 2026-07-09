import { education } from "@/lib/education";
import Link from "next/link";

export default function EducationPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Education</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        Academic background, institutions, degrees, and key achievements.
      </p>

      <div className="w-full space-y-16">
        {education.map((item) => (
          <div key={item.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-100">{item.institution}</h2>
                <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">{item.degree}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-6">
              <span>{item.period}</span>
              <span>•</span>
              <span>{item.location}</span>
              <span>•</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.score}</span>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Achievements</h3>
              <ul className="list-disc pl-6 space-y-3 max-w-3xl">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
