import { ExperienceContent } from "@/components/ExperienceContent";
import { Modal } from "@/components/Modal";

export default function ExperienceModal() {
  return (
    <Modal>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Experience & Leadership</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Explore my engineering work history across internships and full-time roles, alongside technical seminars, workshops, and faculty development programs.
          </p>
        </div>

        <ExperienceContent isModal={true} />
      </div>
    </Modal>
  );
}
