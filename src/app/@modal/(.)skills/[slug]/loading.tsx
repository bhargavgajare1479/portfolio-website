import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Skeleton";

export default function SkillDetailModalLoading() {
  return (
    <Modal>
      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-6 w-full max-w-lg" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-8 w-56" />
          <div className="flex flex-wrap gap-2.5">
            <Skeleton className="h-10 w-28 rounded-full" />
            <Skeleton className="h-10 w-36 rounded-full" />
            <Skeleton className="h-10 w-32 rounded-full" />
            <Skeleton className="h-10 w-40 rounded-full" />
          </div>
        </div>
      </div>
    </Modal>
  );
}
