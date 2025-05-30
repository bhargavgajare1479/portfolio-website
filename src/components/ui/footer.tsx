import React from "react";
import { Lexend, Outfit } from "next/font/google";
import { Button } from "@/components/ui/button";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background text-foreground text-base select-none py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center min-h-0 h-auto md:h-20 gap-6 md:gap-8">
        {/* Left: Name and copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className={`text-2xl font-extrabold uppercase tracking-widest ${lexend.className}`}>Bhargav Gajare</span>
          <span className={`text-lg opacity-70 ${outfit.className}`}>© {new Date().getFullYear()}. All Rights Reserved</span>
        </div>
        {/* Right: Links - all as Button, single row, visually consistent */}
        <div className="flex flex-row md:flex-row items-center gap-3 mt-2 md:mt-0">
          <Button asChild variant="outline" className="font-semibold border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <a
              href="https://drive.google.com/file/d/1szUsqbevX89MYRiLe_CzxN0_sV0YnM8R/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <a
              href="https://github.com/bhargavgajare1479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2z" /></svg>
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <a
              href="https://linkedin.com/in/bhargavsg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" /></svg>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
} 