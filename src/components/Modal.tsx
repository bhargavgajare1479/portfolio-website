"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

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
      className="backdrop:bg-black/80 bg-white dark:bg-zinc-900 text-black dark:text-white p-8 rounded-xl max-w-2xl w-full mx-auto"
      onClose={onDismiss}
      onClick={onBackdropClick}
    >
      <div className="relative">
        <button 
          onClick={onDismiss} 
          className="absolute -top-4 -right-4 p-2 text-zinc-500 hover:text-black dark:hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
}
