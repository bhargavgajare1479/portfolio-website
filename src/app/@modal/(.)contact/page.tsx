import { ContactContent } from "@/components/ContactContent";
import { Modal } from "@/components/Modal";

export default function ContactModal() {
  return (
    <Modal>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-4xl font-bold mb-2">Get In Touch</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Let&apos;s connect to discuss systems architecture, spatial computing engineering, or potential opportunities.
          </p>
        </div>

        <ContactContent isModal={true} />
      </div>
    </Modal>
  );
}
