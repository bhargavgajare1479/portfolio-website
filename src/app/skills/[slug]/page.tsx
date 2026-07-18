import { getSkillCategoryBySlug, skillCategories } from "@/lib/skills";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return skillCategories.map((c) => ({
    slug: c.slug,
  }));
}

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getSkillCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link href="/skills" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to all skills
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        {category.title}
      </h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
        {category.description}
      </p>

      <div className="w-full">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Technologies & Competencies
        </h2>
        <ul className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="bg-zinc-200/80 dark:bg-zinc-800/80 px-6 py-3 rounded-full text-lg font-medium text-zinc-900 dark:text-zinc-100"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/skills" className="mt-16 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to all skills
      </Link>
    </main>
  );
}
