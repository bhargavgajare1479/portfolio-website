import Link from "next/link";
import { ContactContent } from "@/components/ContactContent";

export default function ContactPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link
        href="/"
        className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4">Get In Touch</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed">
        Let&apos;s connect to discuss systems architecture, spatial computing engineering, or potential opportunities.
      </p>

      <ContactContent />
    </main>
  );
}
