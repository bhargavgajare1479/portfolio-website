import { education } from "@/lib/education";
import { Modal } from "@/components/Modal";

export default function EducationModal() {
  return (
    <Modal>
      <div className="space-y-12">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Education</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Academic background, institutions, degrees, and key achievements.</p>
        </div>

        {education.map((item) => (
          <div key={item.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 first:pt-0">
            <div className="flex flex-col gap-1 mb-3">
              <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100">{item.institution}</h2>
              <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{item.degree}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-6">
              <span>{item.period}</span>
              <span>•</span>
              <span>{item.location}</span>
              <span>•</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.score}</span>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Achievements</h3>
              <ul className="list-disc pl-6 space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
