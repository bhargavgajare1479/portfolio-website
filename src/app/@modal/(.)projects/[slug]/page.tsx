import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { Modal } from "@/components/Modal";

// This file intercepts the route when soft-navigating from within the app
export default async function ProjectModal({
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
    <Modal>
      <h1 className="font-heading text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">{project.description}</p>
      
      <div className="mb-8">
        <h2 className="font-heading text-xl font-semibold mb-3">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
              GitHub
            </a>
          )}
        </div>
        <a 
          href={`/projects/${project.slug}`} 
          // Using regular href (hard navigation) instead of Next Link for the "View Full Details" action
          className="text-sm font-medium bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
        >
          View Full Details
        </a>
      </div>
    </Modal>
  );
}
