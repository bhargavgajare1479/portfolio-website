import { Skeleton } from "@/components/Skeleton";

export default function BlogsLoading() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-72 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-12" />
      <Skeleton className="h-48 w-full rounded-3xl" />
    </main>
  );
}
