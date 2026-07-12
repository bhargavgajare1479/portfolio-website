import { getExperienceBySlug } from "@/lib/experience";
import { getSessionBySlug } from "@/lib/experience-sessions";
import { Modal } from "@/components/Modal";
import { notFound } from "next/navigation";

export default async function ExperienceDetailModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  const session = getSessionBySlug(slug);

  if (!exp && !session) {
    notFound();
  }

  if (exp) {
    return (
      <Modal>
        <div className="space-y-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                {exp.company}
              </h1>
              <span className="px-3 py-1 text-sm font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {exp.type}
              </span>
            </div>
            <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              {exp.role}
            </p>
            <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1">
              {exp.period}
            </p>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {exp.overview}
          </p>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Key Achievements & Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="space-y-6">
        {/* Title: [TYPE] Title */}
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          <span className="text-zinc-500 dark:text-zinc-400">[{session?.type}]</span>{" "}
          {session?.title}
        </h1>

        {/* Date */}
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
          {session?.date}
        </p>

        {/* Image Grid: 1 large hero + 2 side-by-side */}
        {session?.images && session.images.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={session.images[0]}
                alt={`${session.title} — photo 1`}
                className="w-full object-cover rounded-xl aspect-[16/10]"
              />
            </div>
            {session.images.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {session.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`${session.title} — photo ${i + 2}`}
                      className="w-full object-cover rounded-xl aspect-[5/4]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
          {session?.description}
        </p>

        {/* View on LinkedIn link */}
        {session?.linkedinPostLink && (
          <a
            href={session.linkedinPostLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            View on LinkedIn →
          </a>
        )}
      </div>
    </Modal>
  );
}
