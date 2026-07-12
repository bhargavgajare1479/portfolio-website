import { EducationContent } from "@/components/EducationContent";
import { Modal } from "@/components/Modal";

export default function EducationModal() {
  return (
    <Modal>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Education</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">Academic background, institutions, degrees, and key achievements.</p>
        </div>

        <EducationContent isModal={true} />
      </div>
    </Modal>
  );
}

