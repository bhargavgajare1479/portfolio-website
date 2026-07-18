import { notFound } from "next/navigation";
import { getEducationBySlug } from "@/lib/education";

// In Next.js 15+ App Router, params is a Promise
export default async function EducationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = getEducationBySlug(resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto py-32 px-8 flex flex-col items-start">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="font-heading text-5xl font-bold">{item.institution}</h1>
        <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">{item.degree}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-lg text-zinc-500 dark:text-zinc-400 mb-12">
        <span>{item.period}</span>
        <span>•</span>
        <span>{item.location}</span>
        <span>•</span>
        <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.score}</span>
      </div>

      <div className="mb-12 w-full">
        <h2 className="font-heading text-3xl font-semibold mb-4">Key Achievements</h2>
        <ul className="list-disc pl-6 space-y-3 max-w-2xl">
          {item.achievements.map((achievement, i) => (
            <li key={i} className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <a href="/" className="mt-8 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </a>
    </main>
  );
}
