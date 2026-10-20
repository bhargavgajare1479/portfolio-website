import type { Metadata } from "next";
import Link from "next/link";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact Bhargav Gajare for spatial systems architecture, runtime engineering, and technical collaborations.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link
        href="/"
        className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100">Get In Touch</h1>
      <p className="text-lg sm:text-xl font-normal text-zinc-700 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed">
        Let&apos;s connect to discuss systems architecture, spatial computing engineering, or potential opportunities.
      </p>

      <ContactContent />
    </main>
  );
}
