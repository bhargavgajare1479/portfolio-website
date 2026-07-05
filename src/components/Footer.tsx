import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-[1600px] mx-auto px-8 xl:px-16 py-12 mt-auto border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400">
        © {currentYear} Bhargav Gajare. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <a href="mailto:gajarebhargav@gmail.com" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Email">
          <MdEmail size={18} />
        </a>
        <a href="https://github.com/bhargavgajare1479" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors" aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href="https://linkedin.com/in/bhargavsg" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
