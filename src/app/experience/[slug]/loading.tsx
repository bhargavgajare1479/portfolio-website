import { Skeleton } from "@/components/Skeleton";

export default function ExperienceDetailLoading() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-80 mb-3" />
      <Skeleton className="h-8 w-48 mb-8" />
      <Skeleton className="h-6 w-full max-w-2xl mb-12" />

      <div className="w-full space-y-4">
        <Skeleton className="h-8 w-64 mb-6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full max-w-xl" />
        <Skeleton className="h-6 w-full max-w-lg" />
      </div>
    </main>
  );
}
