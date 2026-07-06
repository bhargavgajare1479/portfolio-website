import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { Modal } from "@/components/Modal";
import { FaGithub, FaVideo, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

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
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h1 className="font-heading text-4xl font-bold">{project.title}</h1>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.demoVideoUrl && (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Demo Video"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaVideo size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
          {project.researchPaper && (
            <a
              href={project.researchPaper}
              target="_blank"
              rel="noopener noreferrer"
              title="Research Paper"
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              <FaFilePdf size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
      
      <div className="mb-8">
        <h2 className="font-heading text-xl font-semibold mb-3">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="font-heading text-xl font-semibold mb-3">Engineering Challenges</h2>
        <ul className="list-disc pl-6 space-y-2">
          {project.challenges.map((challenge, i) => (
            <li key={i} className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
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
