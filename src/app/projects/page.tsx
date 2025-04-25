import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";

const lexend = { className: "" };

export default function ProjectsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <h1>Projects</h1>
    </>
  );
} 