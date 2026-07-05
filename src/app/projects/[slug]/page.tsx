import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

// In Next.js 15+ App Router, params is a Promise
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen max-w-4xl mx-auto py-32 px-8 flex flex-col items-start">
      <h1 className="font-heading text-5xl font-bold mb-4">{project.title}</h1>
      
      <div className="flex gap-4 mb-8">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Demo
          </a>
        )}
      </div>

      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed">
        {project.description}
      </p>

      <div className="mb-12 w-full">
        <h2 className="font-heading text-3xl font-semibold mb-4">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="bg-zinc-200 dark:bg-zinc-800 px-4 py-1.5 rounded-full text-base font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12 w-full">
        <h2 className="font-heading text-3xl font-semibold mb-4">Engineering Challenges</h2>
        <ul className="list-disc pl-6 space-y-3 max-w-2xl">
          {project.challenges.map((challenge, i) => (
            <li key={i} className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {challenge}
            </li>
          ))}
        </ul>
      </div>
      
      <a href="/" className="mt-8 text-base sm:text-lg text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </a>
    </main>
  );
}
