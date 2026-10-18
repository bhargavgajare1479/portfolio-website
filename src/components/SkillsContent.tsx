import { skillCategories } from "@/lib/skills";

export function SkillsContent() {
  return (
    <div className="w-full space-y-16">
      {skillCategories.map((category) => (
        <div
          key={category.slug}
          className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0"
        >
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="font-heading font-bold text-4xl text-zinc-900 dark:text-zinc-100">
              {category.title}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="bg-zinc-200/80 dark:bg-zinc-800/80 px-5 py-2.5 rounded-full font-medium text-base sm:text-lg text-zinc-900 dark:text-zinc-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
