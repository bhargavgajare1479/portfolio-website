import Link from "next/link";

export default function BlogDetailPage() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-center justify-center text-center w-full">
      <div className="w-full py-16 px-8 sm:px-12 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/20 flex flex-col items-center space-y-6">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-bold">
          Coming Soon
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          This article is being prepared
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-xl">
          Check back very soon!
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm hover:opacity-90 transition-all"
        >
          ← Back to Blogs
        </Link>
      </div>
    </main>
  );
}
