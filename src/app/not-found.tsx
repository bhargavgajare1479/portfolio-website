import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-8 text-center">
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter">
        404
      </h1>
      
      <p className="mt-6 text-xl font-medium text-zinc-600 dark:text-zinc-400 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        href="/"
        className="mt-10 flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-full font-medium transition-transform hover:-translate-y-1"
      >
        <FaArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
