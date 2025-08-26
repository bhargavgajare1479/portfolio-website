"use client"

import Link from "next/link"
import { 
  GraduationCap, 
  Code, 
  FolderGit2, 
  Briefcase, 
  Mail,
  ArrowRight,
  BookOpen
} from "lucide-react"
import { Lexend, Outfit } from 'next/font/google'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

import { ThemeToggle } from "@/components/theme-toggle"

const lexend = Lexend({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export function HeroSection() {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [pendingRoute, setPendingRoute] = useState<string | null>(null)
  const router = useRouter()

  // Animation variants
  const fadeVariants = {
    visible: { opacity: 1, transition: { duration: 0.4 } },
    hidden: { opacity: 0, transition: { duration: 0.4 } }
  }

  // Handler for tile click
  const handleTileClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setPendingRoute(href)
    setIsFadingOut(true)
  }

  // Animation complete handler
  const handleAnimationComplete = () => {
    if (isFadingOut && pendingRoute) {
      router.push(pendingRoute)
    }
  }

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 justify-between mx-auto w-full max-w-screen-xl px-8">
          <div className="flex items-center">
            <Link href="/" className={`font-bold text-xl uppercase ${lexend.className}`}>BG</Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <motion.main
        className="flex-1 w-full h-[calc(100vh-3.5rem)]"
        initial="visible"
        animate={isFadingOut ? "hidden" : "visible"}
        variants={fadeVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="md:hidden grid grid-cols-1 gap-3 p-3 h-full overflow-y-auto">
          <div className="bg-primary/10 text-foreground p-6 flex flex-col justify-center items-center border border-border/20 rounded-xl shadow-md">
            <h1 className={`text-2xl sm:text-3xl font-bold mb-1 text-center py-4 uppercase ${lexend.className}`}>Bhargav Gajare</h1>
            <p className={`text-xs sm:text-sm text-center ${outfit.className}`}>
              Software developer focused on building practical solutions through emerging technologies.
            </p>
          </div>
          
          {/* Education Tile */}
          <Link href="/education" className="bg-gradient-to-br from-teal-300/30 to-teal-500/40 hover:from-teal-300/40 hover:to-teal-500/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="relative">
                <GraduationCap className="w-14 h-14 sm:w-16 sm:h-16 text-teal-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Education</h2>
            </div>
          </Link>
          
          {/* Skills Tile */}
          <Link href="/skills" className="bg-gradient-to-br from-orange-300/30 to-orange-500/40 hover:from-orange-300/40 hover:to-orange-500/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="relative">
                <Code className="w-14 h-14 sm:w-16 sm:h-16 text-orange-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-orange-400/80 rounded-full animate-pulse"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Skills</h2>
            </div>
          </Link> 
          
          {/* Technical Workshops Tile */}
          <Link href="/facilitations" className="bg-gradient-to-br from-emerald-300/30 to-emerald-500/40 hover:from-emerald-300/40 hover:to-emerald-500/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="relative">
                <BookOpen className="w-14 h-14 sm:w-16 sm:h-16 text-emerald-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Facilitations</h2>
            </div>
          </Link>
          
          {/* Projects Tile */}
          <Link href="/projects" className="bg-gradient-to-br from-amber-200/30 to-amber-400/40 hover:from-amber-200/40 hover:to-amber-400/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="relative">
                <FolderGit2 className="w-14 h-14 sm:w-16 sm:h-16 text-amber-500/90 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-amber-400/80 rounded-full animate-bounce"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Projects</h2>
            </div>
          </Link>
          
          {/* Experience Tile */}
          <Link href="/experience" className="bg-gradient-to-br from-purple-300/30 to-violet-400/40 hover:from-purple-300/40 hover:to-violet-400/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="relative">
                <Briefcase className="w-14 h-14 sm:w-16 sm:h-16 text-purple-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Experience</h2>
            </div>
          </Link>
          
          {/* Contact Tile */}
          <Link href="/contact" className="bg-gradient-to-br from-blue-300/30 to-cyan-400/40 hover:from-blue-300/40 hover:to-cyan-400/50 text-card-foreground p-4 flex flex-col justify-center items-center transition-colors border border-border/20 rounded-lg group">
            <div className="flex flex-col items-center gap-3">
              <div className="relative">
                <Mail className="w-14 h-14 sm:w-16 sm:h-16 text-blue-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/80 rounded-full animate-ping"></div>
              </div>
              <h2 className={`text-xl sm:text-2xl font-bold uppercase ${lexend.className}`}>Contact Me</h2>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>
        
        {/* Desktop/Laptop Layout */}
        <div className="hidden md:grid grid-cols-6 grid-rows-6 gap-2 h-full">
          <Link href="/education" onClick={handleTileClick("/education")} className="bg-gradient-to-br from-teal-300/30 to-teal-500/40 hover:from-teal-300/40 hover:to-teal-500/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-2 row-span-2 rounded-lg group">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <GraduationCap className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-teal-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-teal-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase ${lexend.className}`}>Education</h2>
            </div>
          </Link>
          
          {/* Top Right - Skills */}
          <Link href="/skills" onClick={handleTileClick("/skills")} className="bg-gradient-to-br from-orange-300/30 to-orange-500/40 hover:from-orange-300/40 hover:to-orange-500/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-2 row-span-2 rounded-lg group">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <Code className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-orange-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-orange-400/80 rounded-full animate-pulse"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase ${lexend.className}`}>Skills</h2>
            </div>
          </Link>
          
          {/* Technical Workshops */}
          <Link href="/workshops" onClick={handleTileClick("/facilitations")} className="bg-gradient-to-br from-emerald-300/30 to-emerald-500/40 hover:from-emerald-300/40 hover:to-emerald-500/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-2 row-span-3 rounded-lg group">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <BookOpen className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-emerald-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-emerald-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center ${lexend.className}`}>Facilitations</h2>
            </div>
          </Link>
          
          {/* Middle Left - Projects */}
          <Link href="/projects" onClick={handleTileClick("/projects")} className="bg-gradient-to-br from-amber-200/30 to-amber-400/40 hover:from-amber-200/40 hover:to-amber-400/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-2 row-span-3 rounded-lg group">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <FolderGit2 className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-amber-500/90 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-amber-400/80 rounded-full animate-bounce"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase ${lexend.className}`}>Projects</h2>
            </div>
          </Link>
          
          {/* Middle Center - Personal Info */}
          <div className="bg-primary/10 text-foreground p-6 md:p-8 flex flex-col justify-center items-center border border-border/20 col-span-2 row-span-3 rounded-xl shadow-md">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-center py-4 uppercase ${lexend.className}`}>Bhargav Gajare</h1>
            <p className={`text-sm md:text-md lg:text-lg text-center ${outfit.className}`}>
              Software developer focused on building practical solutions through emerging technologies.
            </p>
          </div>
          
          {/* Right Side - Experience */}
          <Link href="/experience" onClick={handleTileClick("/experience")} className="bg-gradient-to-br from-purple-300/30 to-violet-400/40 hover:from-purple-300/40 hover:to-violet-400/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-2 row-span-5 rounded-lg group">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <div className="relative">
                <Briefcase className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-purple-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-purple-400/80 rounded-full animate-ping opacity-75"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase ${lexend.className}`}>Experience</h2>
            </div>
          </Link>
          
          {/* Bottom Row - Contact */}
          <Link href="/contact" onClick={handleTileClick("/contact")} className="bg-gradient-to-br from-blue-300/30 to-cyan-400/40 hover:from-blue-300/40 hover:to-cyan-400/50 text-card-foreground p-6 md:p-8 flex flex-col justify-center items-center transition-colors border border-border/20 col-span-4 row-span-2 rounded-lg group">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="relative">
                <Mail className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-blue-500/90 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-blue-400/80 rounded-full animate-ping"></div>
              </div>
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase ${lexend.className}`}>Contact Me</h2>
              <ArrowRight className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>
      </motion.main>
    </div>
  )
}