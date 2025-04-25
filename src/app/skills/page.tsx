import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";

const lexend = { className: "" };

export default function SkillsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <h1>Skills</h1>
    </>
  );
} 