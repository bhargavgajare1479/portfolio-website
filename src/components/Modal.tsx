"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { isMobileOrTablet } from "@/lib/device";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  function checkScroll() {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollable = el.scrollHeight > el.clientHeight + 1;
    const isNotAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight > 1;
    const isNotAtTop = el.scrollTop > 1;
    setIsScrollable(scrollable);
    setCanScrollDown(scrollable && isNotAtBottom);
    setCanScrollUp(scrollable && isNotAtTop);
  }

  useEffect(() => {
    if (isMobileOrTablet()) {
      window.location.replace(window.location.pathname);
      return;
    }
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    const resetScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
        checkScroll();
      }
    };
    resetScroll();
    requestAnimationFrame(resetScroll);
    const timer = setTimeout(resetScroll, 20);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();

    const observer = new ResizeObserver(() => checkScroll());
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));

    window.addEventListener("resize", checkScroll);
    el.addEventListener("scrollend", checkScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkScroll);
      el.removeEventListener("scrollend", checkScroll);
    };
  }, []);

  function scrollDown() {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const scrollAmount = el.clientHeight * 0.75;
      el.scrollBy({ top: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
      setTimeout(checkScroll, 600);
    }
  }

  function scrollUp() {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const scrollAmount = el.clientHeight * 0.75;
      el.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
      setTimeout(checkScroll, 600);
    }
  }

  function onDismiss() {
    router.back();
  }

  // Close when clicking on the backdrop
  function onBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      onDismiss();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/80 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl fixed inset-0 m-auto w-[80vw] h-[80vh] max-w-none max-h-none p-0 shadow-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50"
      onClose={onDismiss}
      onClick={onBackdropClick}
    >
      <div className="relative w-full h-full flex flex-col">
        {/* Fixed Close Button */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={onDismiss}
            className="flex items-center justify-center w-10 h-10 text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Floating Scroll Controls (Bottom Right) */}
        {isScrollable && (
          <div className="absolute bottom-6 right-6 z-50 flex flex-col items-center gap-2">
            <button
              onClick={scrollUp}
              disabled={!canScrollUp}
              className={`flex items-center justify-center w-10 h-10 rounded-md transition-all text-sm font-semibold ${canScrollUp
                ? "flex items-center justify-center w-10 h-10 text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer"
                : "flex items-center justify-center w-10 h-10 text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer"
                }`}
              aria-label="Scroll up"
            >
              <FaArrowUp size={12} />
            </button>
            <button
              onClick={scrollDown}
              disabled={!canScrollDown}
              className={`flex items-center justify-center w-10 h-10 rounded-md transition-all text-sm font-semibold ${canScrollDown
                ? "flex items-center justify-center w-10 h-10 text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer"
                : "flex items-center justify-center w-10 h-10 text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-sm cursor-pointer"
                }`}
              aria-label="Scroll down"
            >
              <FaArrowDown size={12} />
            </button>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="w-full h-full overflow-y-auto p-8 sm:p-12 pr-16 sm:pr-20"
        >
          {children}
        </div>
      </div>
    </dialog>
  );
}
