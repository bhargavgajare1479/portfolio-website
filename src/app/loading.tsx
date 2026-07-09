import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-6 lg:py-12 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 auto-rows-min">
        {/* Name block skeleton */}
        <div className="order-1 lg:order-1 lg:col-span-5 min-h-[250px] lg:min-h-[280px] rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-10 flex flex-col justify-center gap-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-16 w-64" />
          <Skeleton className="h-6 w-full max-w-md mt-4" />
        </div>

        {/* Education block skeleton */}
        <div className="order-2 lg:order-3 lg:col-span-5 min-h-[250px] lg:min-h-[280px] rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-10 flex flex-col justify-center gap-4">
          <Skeleton className="h-10 w-40" />
          <div className="space-y-4 mt-4">
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>

        {/* Experience block skeleton */}
        <div className="order-3 lg:order-2 lg:col-span-7 lg:row-span-2 min-h-[300px] lg:min-h-[600px] rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-10 flex flex-col gap-6">
          <Skeleton className="h-10 w-44" />
          <div className="space-y-6 mt-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>

        {/* Projects block skeleton */}
        <div className="order-4 lg:order-4 lg:col-span-7 min-h-[300px] lg:min-h-[400px] rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-10 flex flex-col gap-6">
          <Skeleton className="h-10 w-36" />
          <div className="space-y-4 mt-4">
            <Skeleton className="h-8 w-52" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        {/* Skills block skeleton */}
        <div className="order-5 lg:order-5 lg:col-span-5 min-h-[300px] lg:min-h-[400px] rounded-2xl lg:rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-10 flex flex-col gap-6">
          <Skeleton className="h-10 w-32" />
          <div className="space-y-4 mt-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
