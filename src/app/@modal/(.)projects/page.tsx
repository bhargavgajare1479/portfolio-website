import { projects } from "@/lib/projects";
import { Modal } from "@/components/Modal";

export default function ProjectsModal() {
  return (
    <Modal>
      <div className="max-h-[80vh] overflow-y-auto pr-2 space-y-12">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Projects Overview</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Detailed engineering architecture and challenges across all projects.</p>
        </div>

        {projects.map((project) => (
          <div key={project.slug} className="border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 first:pt-0">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech} className="bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Engineering Challenges</h3>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {challenge}
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
