import { Skeleton } from "@/components/Skeleton";

export default function ContactLoading() {
  return (
    <main className="flex-1 max-w-5xl mx-auto py-24 px-8 flex flex-col items-start w-full">
      <Skeleton className="h-6 w-32 mb-8" />
      <Skeleton className="h-12 w-72 mb-4" />
      <Skeleton className="h-6 w-full max-w-2xl mb-12" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-12 w-36 rounded-xl" />
        </div>
      </div>
    </main>
  );
}
