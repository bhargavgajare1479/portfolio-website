import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import projectsData from "@/lib/projects.json";
import { Card } from "@/components/ui/card";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function ProjectsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Projects</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className}`}>Turning concepts into creations — and making them count.</p>
        <div className="mt-10 grid grid-cols-1 gap-8">
          {projectsData.map((project, idx) => (
            <Card key={idx} className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto p-4 text-start flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h2 className={`text-2xl font-bold ${lexend.className}`}>{project.name}</h2>
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <FaGithub className="w-6 h-6 hover:text-primary transition-colors" />
                  </Link>
                )}
                {project.website && project.website.trim() && (
                  <Link href={project.website} target="_blank" rel="noopener noreferrer" aria-label="Project Website">
                    <FaGlobe className="w-5 h-5 text-primary hover:text-primary/80 ml-2" />
                  </Link>
                )}
              </div>
              <p className={`text-base text-muted-foreground ${outfit.className}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techstack.map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded bg-accent text-accent-foreground text-xs font-medium ${outfit.className}`}>{tech}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <span className={`text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider ${lexend.className}`}>STAY TUNED FOR FUTURE PROJECTS!</span>
        </div>
      </div>
    </>
  );
} 