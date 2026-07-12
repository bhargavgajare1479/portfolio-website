import { education } from "@/lib/education";

interface EducationContentProps {
  isModal?: boolean;
}

export function EducationContent({ isModal = false }: EducationContentProps) {
  return (
    <div className="space-y-12">
      {education.map((item) => (
        <div
          key={item.slug}
          className="border-t border-zinc-200 dark:border-zinc-800 pt-10 first:border-t-0 first:pt-0"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {item.institution}
              </h2>
              <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                {item.degree}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 text-sm font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {item.score}
              </span>
              <span className="text-base font-medium text-zinc-500 dark:text-zinc-400">
                {item.period}
              </span>
            </div>
          </div>

          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {item.overview}
          </p>

          <div className="mt-6">
            <h4 className="font-heading text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
              Key Achievements & Recognition
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {item.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
