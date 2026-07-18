import { getExperienceBySlug, experienceItems } from "@/lib/experience";
import { getSessionBySlug, sessionItems } from "@/lib/experience-sessions";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const expParams = experienceItems.map((item) => ({ slug: item.slug }));
  const sessionParams = sessionItems.map((item) => ({ slug: item.slug }));
  return [...expParams, ...sessionParams];
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  const session = getSessionBySlug(slug);

  if (!exp && !session) {
    notFound();
  }

  if (exp) {
    return (
      <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
        <Link
          href="/experience"
          className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Experience
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 mb-6">
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
              {exp.company}
            </h1>
            <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mt-2">
              {exp.role}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 text-base font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              {exp.type}
            </span>
            <span className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
              {exp.period}
            </span>
          </div>
        </div>

        <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-12">
          {exp.overview}
        </p>

        <div className="w-full">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Key Achievements & Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/experience"
          className="mt-16 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to Experience
        </Link>
      </main>
    );
  }

  // Session rendering
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link
        href="/experience"
        className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Experience
      </Link>

      {/* Title: [TYPE] Title */}
      <h1 className="font-heading text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        <span className="text-zinc-500 dark:text-zinc-400">[{session?.type}]</span>{" "}
        {session?.title}
      </h1>

      {/* Date */}
      <p className="mt-3 text-xl text-zinc-500 dark:text-zinc-400 font-medium">
        {session?.date}
      </p>

      {/* Image Grid: 1 large hero + 2 side-by-side */}
      {session?.images && session.images.length > 0 && (
        <div className="mt-8 w-full flex flex-col gap-2">
          {/* Hero Image */}
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src={session.images[0]}
              alt={`${session.title} — photo 1`}
              className="w-full object-cover rounded-xl aspect-[16/10]"
            />
          </div>

          {/* Two side-by-side images */}
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
      <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
        {session?.description}
      </p>

      {/* View on LinkedIn link */}
      {session?.linkedinPostLink && (
        <a
          href={session.linkedinPostLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          View on LinkedIn →
        </a>
      )}

      <Link
        href="/experience"
        className="mt-16 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Experience
      </Link>
    </main>
  );
}
