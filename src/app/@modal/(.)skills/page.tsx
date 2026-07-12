import { SkillsContent } from "@/components/SkillsContent";
import { Modal } from "@/components/Modal";

export default function SkillsModal() {
  return (
    <Modal>
      <div className="space-y-12">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Skills & Expertise</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Comprehensive overview of core languages, spatial computing frameworks, backend systems, DevOps tools, and architectural concepts.
          </p>
        </div>

        <SkillsContent isModal={true} />
      </div>
    </Modal>
  );
}

