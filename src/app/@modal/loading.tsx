import { Skeleton } from "@/components/Skeleton";

export default function ModalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-[80vw] h-[80vh] bg-white dark:bg-zinc-900 rounded-2xl p-8 sm:p-12 overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-6 w-full max-w-md" />

        <div className="space-y-8 mt-4">
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-56" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
