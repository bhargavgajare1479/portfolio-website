import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { Card } from "@/components/ui/card";
import educationData from "@/lib/education.json";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

type Education = {
  institute: string;
  stream: string;
  tenure: string
  achievements: string;
  clubsAndCommittees: string;
};

export default function EducationPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className={`text-4xl font-bold uppercase text-center ${lexend.className}`}>Education</h1>
        <p className={`mt-4 text-lg text-center text-muted-foreground ${outfit.className}`}>Where it all began — and where I realized textbooks are just the warm-up...</p>
        <div className="mt-10 w-full max-w-2xl flex flex-col gap-6">
          {(educationData as Education[]).map((edu, idx) => (
            <Card key={idx}>
              <h2 className={`text-2xl font-semibold ${lexend.className}`}>{edu.institute}</h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-2">
                <span className={`text-md uppercase tracking-wide ${outfit.className}`}>{edu.stream}</span>
                <span className={`text-sm text-muted-foreground ${outfit.className}`}>{edu.tenure}</span>
              </div>
              <p className={`mt-2 text-base ${outfit.className}`}>{edu.achievements}</p>
              <p className={`mt-2 text-base ${outfit.className}`}>{edu.clubsAndCommittees}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
} 