import { skillCategories } from "@/lib/skills";

interface SkillsContentProps {
  isModal?: boolean;
}

export function SkillsContent({ isModal = false }: SkillsContentProps) {
  return (
    <div className={isModal ? "space-y-12" : "w-full space-y-16"}>
      {skillCategories.map((category) => (
        <div
          key={category.slug}
          className={`border-t border-zinc-200 dark:border-zinc-800 first:border-t-0 first:pt-0 ${
            isModal ? "pt-8" : "pt-12"
          }`}
        >
          <div className="flex flex-col gap-2 mb-6">
            <h2
              className={`font-heading font-bold text-zinc-900 dark:text-zinc-100 ${
                isModal ? "text-3xl" : "text-4xl"
              }`}
            >
              {category.title}
            </h2>
            <p
              className={`text-zinc-600 dark:text-zinc-400 leading-relaxed ${
                isModal ? "text-base sm:text-lg" : "text-lg sm:text-xl max-w-3xl"
              }`}
            >
              {category.description}
            </p>
          </div>

          <ul className={`flex flex-wrap ${isModal ? "gap-2.5" : "gap-3"}`}>
            {category.skills.map((skill) => (
              <li
                key={skill}
                className={`bg-zinc-200/80 dark:bg-zinc-800/80 rounded-full font-medium text-zinc-900 dark:text-zinc-100 ${
                  isModal
                    ? "px-4 py-2 text-base"
                    : "px-5 py-2.5 text-base sm:text-lg"
                }`}
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
