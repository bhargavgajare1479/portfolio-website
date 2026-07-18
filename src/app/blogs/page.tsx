import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Link
        href="/"
        className="mb-8 text-base font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="font-heading text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-zinc-100">
        Blogs & Insights
      </h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed font-normal">
        A place where there&apos;s no need to be formal
      </p>

      <div className="w-full py-16 px-8 sm:px-12 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/20 flex flex-col items-center text-center space-y-6">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-bold">
          Coming Soon
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Technical Deep Dives Under Preparation!
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-xl">
          I am currently finalizing detailed articles on various interesting topics.
        </p>
      </div>
    </main>
  );
}
