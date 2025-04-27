import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { Card } from "@/components/ui/card";
import experienceData from "@/lib/experience.json";
import { Footer } from "@/components/ui/footer";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function ExperiencePage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Experience</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className}`}>Real-world challenges, real-world growth.</p>
        <div className="mt-10 mb-12 grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {experienceData.map((exp, idx) => (
            <Card key={idx}>
              <h2 className={`text-2xl font-bold ${lexend.className}`}>{exp.designation}</h2>
              <div className={`text-muted-foreground text-lg mb-1 ${outfit.className}`}>{exp.company}</div>
              <div className={`text-base mb-2 ${outfit.className}`}>{exp.tenure}</div>
              <div className="flex flex-wrap gap-3 mt-3">
                {exp.skills.map((skill, i) => (
                  <span key={i} className={`bg-accent text-accent-foreground px-3 py-1.5 rounded text-base font-medium ${outfit.className}`}>{skill}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
} 