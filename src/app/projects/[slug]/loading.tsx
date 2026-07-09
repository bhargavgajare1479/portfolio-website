import { Skeleton } from "@/components/Skeleton";

export default function ProjectDetailLoading() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-32 px-8 flex flex-col items-start w-full">
      <div className="flex flex-wrap items-center gap-4 mb-8 w-full">
        <Skeleton className="h-12 w-64" />
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      <Skeleton className="h-24 w-full max-w-2xl mb-12" />

      <div className="mb-12 w-full space-y-4">
        <Skeleton className="h-8 w-36" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>

      <div className="mb-12 w-full space-y-4">
        <Skeleton className="h-8 w-56" />
        <div className="space-y-3 max-w-2xl">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-4/5" />
        </div>
      </div>
    </main>
  );
}
