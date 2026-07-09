import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Skeleton";

export default function SkillsModalLoading() {
  return (
    <Modal>
      <div className="space-y-12">
        <div className="space-y-3">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-full max-w-lg" />
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="border-t border-zinc-200 dark:border-zinc-800 pt-8 first:border-t-0 first:pt-0 space-y-4">
            <Skeleton className="h-8 w-56" />
            <Skeleton className="h-5 w-full max-w-md" />
            <div className="flex flex-wrap gap-2.5">
              <Skeleton className="h-9 w-24 rounded-full" />
              <Skeleton className="h-9 w-32 rounded-full" />
              <Skeleton className="h-9 w-28 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
