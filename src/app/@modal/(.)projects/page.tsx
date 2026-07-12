import { ProjectsContent } from "@/components/ProjectsContent";
import { Modal } from "@/components/Modal";

export default function ProjectsModal() {
  return (
    <Modal>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Projects</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Detailed engineering architecture and challenges across all projects.</p>
        </div>

        <ProjectsContent isModal={true} />
      </div>
    </Modal>
  );
}

