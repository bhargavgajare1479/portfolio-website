import { Skeleton } from "@/components/Skeleton";

export default function SkillsLoading() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-64 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-16" />

      <div className="w-full space-y-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0 space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-6 w-full max-w-xl" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Skeleton className="h-10 w-28 rounded-full" />
              <Skeleton className="h-10 w-36 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-full" />
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
