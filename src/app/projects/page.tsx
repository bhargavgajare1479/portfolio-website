import { projects } from "@/lib/projects";
import Link from "next/link";
import { FaGithub, FaVideo, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start">
      <Link href="/" className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Projects</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl leading-relaxed">
        Detailed engineering architecture and challenges across all systems and platforms.
      </p>

      <div className="w-full space-y-16">
        {projects.map((project) => (
          <div key={project.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-heading text-4xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demoVideoUrl && (
                    <a
                      href={project.demoVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Demo Video"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <FaVideo size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
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
                      className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 p-3 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <FaFilePdf size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech} className="bg-zinc-200 dark:bg-zinc-800 px-4 py-1.5 rounded-full text-base font-medium text-zinc-800 dark:text-zinc-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Engineering Challenges</h3>
              <ul className="list-disc pl-6 space-y-3 max-w-3xl">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
