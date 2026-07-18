import { Skeleton } from "@/components/Skeleton";

export default function BlogDetailLoading() {
  return (
    <main className="flex-1 max-w-4xl mx-auto py-24 px-8 flex flex-col items-center justify-center w-full">
      <Skeleton className="h-48 w-full max-w-2xl rounded-3xl" />
    </main>
  );
}
