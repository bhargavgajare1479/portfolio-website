import { Modal } from "@/components/Modal";
import { Skeleton } from "@/components/Skeleton";

export default function ExperienceDetailModalLoading() {
  return (
    <Modal>
      <div className="space-y-8">
        <div className="space-y-3">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-5 w-32" />
        </div>

        <Skeleton className="h-28 w-full" />

        <div className="space-y-3">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>
    </Modal>
  );
}
