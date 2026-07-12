import { BentoCard } from "@/components/BentoCard";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-6 lg:py-12 flex flex-col">
      {/* 
        Bento Grid Layout:
        - Mobile/Tablet (< lg): 1 column (stack), evenly sized blocks
        - Desktop (>= lg): 4 columns to achieve asymmetrical weights
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 auto-rows-min">

        {/* 1. Name Block: 1st on mobile, top-left on desktop */}
        <BentoCard className="order-1 lg:order-1 lg:col-span-5 min-h-[250px] lg:min-h-[280px]">
          <div className="flex h-full flex-col justify-center">
            <h1 className="font-heading font-bold tracking-tight flex flex-col">
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold text-3xl sm:text-6xl lg:text-4xl xl:text-4xl leading-tight mt-1">
                BHARGAV
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 text-5xl sm:text-8xl lg:text-6xl xl:text-7xl leading-none">
                GAJARE
              </span>
            </h1>
            <p className="mt-8 text-xl sm:text-2xl font-normal text-zinc-600 dark:text-zinc-300 max-w-md leading-relaxed">
              An engineer who designs and builds systems with performance, architecture, and execution ownership.
            </p>
          </div>
        </BentoCard>

        {/* 2. Education Block: 2nd on mobile, bottom-left (under Name) on desktop */}
        <BentoCard id="education" className="order-2 lg:order-3 lg:col-span-5 min-h-[250px] lg:min-h-[280px]">
          <Link href="/education" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col justify-center">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Education</h2>
              <div className="mt-8 flex-1 overflow-y-auto pr-4">
                <div className="relative ml-2 space-y-8">
                  <span className="absolute left-0 top-2 bottom-1 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

                  <div className="relative pl-8">
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white/60 dark:ring-zinc-900/60" />
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">DMCE, Airoli, Navi Mumbai</h3>
                    <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      2024 - Expected 2027
                    </p>
                  </div>

                  <div className="relative pl-8">
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white/60 dark:ring-zinc-900/60" />
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">TPOLY, Kandivali, Mumbai</h3>
                    <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      2021 - 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </BentoCard>

        {/* 3. Experience Block: 3rd on mobile, Row 1-2 right (spans 2 rows) on desktop */}
        <BentoCard id="experience" className="order-3 lg:order-2 lg:col-span-7 lg:row-span-2 min-h-[300px] lg:min-h-[600px] transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600">
          <Link href="/experience" className="flex h-full flex-col group cursor-pointer">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Experience</h2>

            <div className="mt-8 flex-1 overflow-y-auto pr-4">
              <div className="relative ml-2 space-y-8">
                <span className="absolute left-0 top-2 bottom-1 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

                <div className="relative pl-8">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white/60 dark:ring-zinc-900/60" />
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">IITI DRISHTI CPS FOUNDATION, IIT Indore</h3>
                  <div className="mt-3 flex flex-col gap-4">
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Project Intern (AR/VR) <span className="font-light text-base text-zinc-500 dark:text-zinc-400">| June 2026 - Present</span>
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Digital Healthcare Solutions in VR, Performance Optimization, 3D Assets Optimization, OpenXR, Rendering & Graphics in Unity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white/60 dark:ring-zinc-900/60" />
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Sorxn LLP</h3>
                  <div className="mt-3 flex flex-col gap-4">
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Software Developer <span className="font-light text-base text-zinc-500 dark:text-zinc-400">| Jan 2026 - June 2026</span>
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Backend Infrastructure, CI/CD, Cloudflare Tunneling, Supabase, JWT & RBAC Implementation.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Software Developer Intern <span className="font-light text-base text-zinc-500 dark:text-zinc-400">| Dec 2025 - Jan 2026</span>
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Full-stack Web Development, and Responsive UI Implementation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white/60 dark:ring-zinc-900/60" />
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Vighnesh Inc.</h3>
                  <div className="mt-3 flex flex-col gap-4">
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Jr. Unity Developer <span className="font-light text-base text-zinc-500 dark:text-zinc-400">| June 2024 - Dec 2025</span>
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Aviation Simulations, Performance Conscious System Design, Custom RESTful Layer Engineering, UI/UX & Interaction Design.
                      </p>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Software Developer Intern <span className="font-light text-base text-zinc-500 dark:text-zinc-400">| May 2023 - Jan 2024</span>
                      </p>
                      <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Performance Optimization, Hardware Feasibility Analysis, GPU Computing and Profiling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </BentoCard>

        {/* 4. Projects Block: 4th on mobile, Row 3 left on desktop */}
        <BentoCard id="projects" className="order-4 lg:order-4 lg:col-span-7 min-h-[300px] lg:min-h-[400px] transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600">
          <Link href="/projects" className="flex h-full flex-col group cursor-pointer">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Projects</h2>
            </div>

            <div className="mt-8 space-y-8 flex-1 overflow-y-auto pr-4">
              {projects.map((project) => {
                const keywordsString = project.keywords.join(" • ");
                return (
                  <div key={project.slug} className="flex flex-col">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {keywordsString}
                    </p>
                  </div>
                );
              })}
            </div>
          </Link>
        </BentoCard>

        {/* 5. Skills Block: 5th on mobile, Row 3 right on desktop */}
        <BentoCard id="skills" className="order-5 lg:order-5 lg:col-span-5 min-h-[300px] lg:min-h-[400px]">
          <Link href="/skills" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Skills</h2>

              <div className="mt-8 space-y-8 flex-1 overflow-y-auto pr-4">
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Core Programming Languages
                  </h3>
                  <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    C#, Python, JavaScript, Java, SQL
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    XR Stack
                  </h3>
                  <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Unity, OpenXR, XR Interaction Toolkit, Meta XR SDK, Microsoft MRTK, AR Foundation, Vuforia Engine
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Backend Stack
                  </h3>
                  <p className="mt-2 text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    FastAPI, Firebase, Supabase, Express.js
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </BentoCard>

        {/* 6. Blogs Block: 6th on mobile, equal 6/12 width in bottom row on desktop */}
        <BentoCard id="blogs" className="order-6 lg:order-6 lg:col-span-6 min-h-[250px] lg:min-h-[300px]">
          <div className="flex h-full flex-col justify-center">
            <h2 className="font-heading font-bold tracking-tight flex flex-col">
              <span className="text-zinc-600 dark:text-zinc-400 font-semibold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-none">
                BLOGS
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold text-4xl sm:text-5xl lg:text-4xl xl:text-5xl leading-tight mt-1">
                & INSIGHTS
              </span>
            </h2>
            <p className="mt-8 text-xl sm:text-2xl font-normal text-zinc-600 dark:text-zinc-300 max-w-lg leading-relaxed">
              Deep dives into spatial computing architectures, filesystem forensics, and low-level system performance optimization.
            </p>
          </div>
        </BentoCard>

        {/* 7. Contact Block: 7th on mobile, equal 6/12 width in bottom row on desktop */}
        <BentoCard id="contact" className="order-7 lg:order-7 lg:col-span-6 min-h-[250px] lg:min-h-[300px]">
          <div className="flex h-full flex-col justify-center">
            <h2 className="font-heading font-bold tracking-tight flex flex-col">
              <span className="text-zinc-600 dark:text-zinc-400 font-semibold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl leading-none">
                GET
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold text-4xl sm:text-5xl lg:text-4xl xl:text-5xl leading-tight mt-1">
                IN TOUCH!
              </span>
            </h2>
            <p className="mt-8 text-xl sm:text-2xl font-normal text-zinc-600 dark:text-zinc-300 max-w-lg leading-relaxed">
              Open to discussions on systems architecture, XR engineering, and impactful collaborations.
            </p>
          </div>
        </BentoCard>
      </div>
    </main>
  );
}
