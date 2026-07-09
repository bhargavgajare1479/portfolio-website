import { skillCategories } from "@/lib/skills";
import { Modal } from "@/components/Modal";

export default function SkillsModal() {
  return (
    <Modal>
      <div className="space-y-12">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Skills & Expertise</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Comprehensive overview of core languages, spatial computing frameworks, backend systems, DevOps tools, and architectural concepts.
          </p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 first:pt-0">
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100">{category.title}</h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {category.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-zinc-200/80 dark:bg-zinc-800/80 px-4 py-2 rounded-full text-base font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
}
