"use client"

import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 justify-between mx-auto w-full max-w-screen-xl px-8">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">BG</Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Greetings, I'm <span className="text-primary">Bhargav Gajare</span>
            </h1>
            <p className="max-w-full leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I’m currently focusing on building practical solutions through emerging technologies.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
} 