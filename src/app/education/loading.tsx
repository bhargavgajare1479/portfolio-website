import { Skeleton } from "@/components/Skeleton";

export default function EducationLoading() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-48 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-16" />

      <div className="w-full space-y-16">
        {[1, 2].map((i) => (
          <div key={i} className="border-t border-zinc-200 dark:border-zinc-800 pt-12 first:border-t-0 first:pt-0 space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-6 w-44" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
