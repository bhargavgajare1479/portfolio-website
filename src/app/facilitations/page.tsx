"use client"

import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Lexend, Outfit } from "next/font/google";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import facilitations from "@/lib/facilitations.json";
import { useMemo } from "react";

const lexend = Lexend({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function FacilitationsPage() {
  return (
    <>
      <Navbar lexend={lexend} ThemeToggle={ThemeToggle} />
      <main className="min-h-[calc(100vh-4rem)]">
        <motion.div
          className="max-w-screen-xl mx-auto px-4 sm:px-8 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className={`mt-12 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center ${lexend.className}`}>
            Facilitations
          </h1>
          <p className={`mt-4 text-base sm:text-lg md:text-xl text-center text-muted-foreground ${outfit.className} mb-12`}>
            Passing forward the lessons I've picked up along the way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* FDP Card - Large */}
            <motion.div
              className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-xl p-6
                bg-gradient-to-br from-emerald-300/5 to-emerald-500/10
                hover:from-emerald-300/10 hover:to-emerald-500/20
                border border-border/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full flex flex-col">
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold tracking-tight ${lexend.className}`}>
                    {facilitations[2].title}
                  </h3>
                  <p className={`text-base text-muted-foreground ${outfit.className}`}>
                    {facilitations[2].conducted}
                  </p>
                </div>
                
                <p className={`flex-1 text-base text-muted-foreground/90 mt-4 ${outfit.className}`}>
                  {facilitations[2].description}
                </p>

                {facilitations[2].linkedin && (
                  <Link
                    href={facilitations[2].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-base font-medium 
                      text-emerald-500/80 hover:text-emerald-500 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Git Workshop Card - Medium */}
            <motion.div
              className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-xl p-6
                bg-gradient-to-br from-emerald-300/5 to-emerald-500/10
                hover:from-emerald-300/10 hover:to-emerald-500/20
                border border-border/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-full flex flex-col">
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold tracking-tight ${lexend.className}`}>
                    {facilitations[1].title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${outfit.className}`}>
                    {facilitations[1].conducted}
                  </p>
                </div>
                
                <p className={`flex-1 text-sm text-muted-foreground/90 mt-4 ${outfit.className}`}>
                  {facilitations[1].description}
                </p>

                {facilitations[1].linkedin && (
                  <Link
                    href={facilitations[1].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium 
                      text-emerald-500/80 hover:text-emerald-500 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Seminar Card - Wide */}
            <motion.div
              className="md:col-span-7 group relative overflow-hidden rounded-xl p-6
                bg-gradient-to-br from-emerald-300/5 to-emerald-500/10
                hover:from-emerald-300/10 hover:to-emerald-500/20
                border border-border/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full flex flex-col">
                <div className="space-y-2">
                  <h3 className={`text-lg font-bold tracking-tight ${lexend.className}`}>
                    {facilitations[0].title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${outfit.className}`}>
                    {facilitations[0].conducted}
                  </p>
                </div>
                
                <p className={`flex-1 text-sm text-muted-foreground/90 mt-4 ${outfit.className}`}>
                  {facilitations[0].description}
                </p>

                {facilitations[0].linkedin && (
                  <Link
                    href={facilitations[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium 
                      text-emerald-500/80 hover:text-emerald-500 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* GitHub Workshop Card - Small */}
            <motion.div
              className="md:col-span-5 group relative overflow-hidden rounded-xl p-6
                bg-gradient-to-br from-emerald-300/5 to-emerald-500/10
                hover:from-emerald-300/10 hover:to-emerald-500/20
                border border-border/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-full flex flex-col">
                <div className="space-y-2">
                  <h3 className={`text-lg font-bold tracking-tight ${lexend.className}`}>
                    {facilitations[3].title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${outfit.className}`}>
                    {facilitations[3].conducted}
                  </p>
                </div>
                
                <p className={`flex-1 text-sm text-muted-foreground/90 mt-4 ${outfit.className}`}>
                  {facilitations[3].description}
                </p>

                {facilitations[3].linkedin && (
                  <Link
                    href={facilitations[3].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium 
                      text-emerald-500/80 hover:text-emerald-500 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
} 