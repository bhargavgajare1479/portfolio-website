import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";

const lexend = { className: "" };

export default function ExperiencePage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <h1>Experience</h1>
    </>
  );
} 