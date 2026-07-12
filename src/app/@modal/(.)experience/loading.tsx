import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Skeleton";

export default function ExperienceModalLoading() {
  return (
    <Modal>
      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-full max-w-lg" />
        </div>

        <Skeleton className="h-11 w-80 rounded-full" />

        {[1, 2].map((i) => (
          <div key={i} className="border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 first:pt-0 space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-8 w-56" />
              <Skeleton className="h-7 w-28 rounded-full" />
            </div>
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    </Modal>
  );
}
