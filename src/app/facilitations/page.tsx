"use client"
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function ProjectsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>Facilitations</h1>
        <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className}`}>Passing forward the lessons I’ve picked up along the way.</p>
        
      </motion.div>
      <Footer />
    </>
  );
} 