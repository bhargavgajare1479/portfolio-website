import { Skeleton } from "@/components/Skeleton";

export default function ExperienceLoading() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-80 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-12" />

      {/* Pill Skeleton */}
      <Skeleton className="h-12 w-80 rounded-full mb-12" />

      <div className="w-full space-y-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-t border-zinc-200 dark:border-zinc-800 pt-10 first:border-t-0 first:pt-0 space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-8 w-32 rounded-full" />
            </div>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-24 w-full" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-5 w-full max-w-xl" />
              <Skeleton className="h-5 w-full max-w-lg" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
