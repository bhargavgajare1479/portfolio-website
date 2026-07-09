import { getSkillCategoryBySlug } from "@/lib/skills";
import { Modal } from "@/components/Modal";
import { notFound } from "next/navigation";

export default async function SkillDetailModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getSkillCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <Modal>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
            {category.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            {category.description}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Technologies & Competencies
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="bg-zinc-200/80 dark:bg-zinc-800/80 px-5 py-2.5 rounded-full text-base font-medium text-zinc-900 dark:text-zinc-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
