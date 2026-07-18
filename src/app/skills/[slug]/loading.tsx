import { Skeleton } from "@/components/Skeleton";

export default function SkillDetailLoading() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-80 mb-4" />
      <Skeleton className="h-6 w-full max-w-xl mb-12" />

      <div className="w-full space-y-6">
        <Skeleton className="h-8 w-56 mb-6" />
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-12 w-32 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-28 rounded-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="h-12 w-44 rounded-full" />
        </div>
      </div>
    </main>
  );
}
