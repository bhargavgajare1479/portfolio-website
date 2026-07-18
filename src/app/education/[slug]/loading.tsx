import { Skeleton } from "@/components/Skeleton";

export default function EducationDetailLoading() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-32 px-8 flex flex-col items-start w-full">
      <div className="flex flex-col gap-2 mb-8 w-full">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-6 w-36" />
        <Skeleton className="h-6 w-28" />
      </div>

      <div className="mb-12 w-full space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="space-y-3 max-w-2xl">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-4/5" />
        </div>
      </div>
    </main>
  );
}
