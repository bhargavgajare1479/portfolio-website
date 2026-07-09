import { notFound } from "next/navigation";
import { getEducationBySlug } from "@/lib/education";
import { Modal } from "@/components/Modal";

// This file intercepts the route when soft-navigating from within the app
export default async function EducationModalPage({
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
    <Modal>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="font-heading text-4xl font-bold">{item.institution}</h1>
        <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{item.degree}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-6">
        <span>{item.period}</span>
        <span>•</span>
        <span>{item.location}</span>
        <span>•</span>
        <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.score}</span>
      </div>

      <div className="mb-8">
        <h2 className="font-heading text-xl font-semibold mb-3">Key Achievements</h2>
        <ul className="list-disc pl-6 space-y-2">
          {item.achievements.map((achievement, i) => (
            <li key={i} className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
        <a 
          href={`/education/${item.slug}`} 
          // Using regular href (hard navigation) instead of Next Link for the "View Full Details" action
          className="text-sm font-medium bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
        >
          View Full Details
        </a>
      </div>
    </Modal>
  );
}
