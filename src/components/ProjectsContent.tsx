import { projects } from "@/lib/projects";
import { FaGithub, FaVideo, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

export function ProjectsContent() {
  return (
    <div className="space-y-12">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="border-t border-zinc-200 dark:border-zinc-800 pt-10 first:border-t-0 first:pt-0"
        >
          {/* Header row: Title + Keywords on left, Action buttons on right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg font-normal text-zinc-600 dark:text-zinc-400 mt-1 tracking-wide">
                {project.keywords.join(" • ")}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
              )}
              {project.demoVideoUrl && (
                <a
                  href={project.demoVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Demo Video"
                  aria-label={`Demo video for ${project.title}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaVideo size={17} aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  aria-label={`Live demo for ${project.title}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={14} aria-hidden="true" />
                </a>
              )}
              {project.researchPaper && (
                <a
                  href={project.researchPaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Research Paper"
                  aria-label={`Research paper for ${project.title}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <FaFilePdf size={17} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Overview description */}
          <p className="mt-4 text-base sm:text-lg font-normal text-zinc-700 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack section */}
          <div className="mt-6">
            <h3 className="font-heading text-base sm:text-lg font-bold mb-3 text-zinc-900 dark:text-zinc-100 tracking-tight">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Solutions section */}
          <div className="mt-6">
            <h3 className="font-heading text-base sm:text-lg font-bold mb-3 text-zinc-900 dark:text-zinc-100 tracking-tight">
              Key Engineering Challenges & Solutions
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {project.challenges.map((challenge, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base font-normal text-zinc-700 dark:text-zinc-400 leading-relaxed"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
