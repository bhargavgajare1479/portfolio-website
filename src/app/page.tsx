import { BentoCard } from "@/components/BentoCard";
import { FaLink } from "react-icons/fa";
import { TileLink } from "@/components/TileLink";
import { education } from "@/lib/education";
import { experienceItems, ExperienceItem } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { skillCategories } from "@/lib/skills";

export default function Home() {
  // Group consecutive roles under the same company for the Bento card timeline
  const groupedExperience = experienceItems.reduce((acc, item) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.company === item.company) {
      lastGroup.roles.push(item);
    } else {
      acc.push({
        company: item.company,
        roles: [item],
      });
    }
    return acc;
  }, [] as { company: string; roles: ExperienceItem[] }[]);

  // Filter skill categories for the homepage Bento card preview
  const homeSkillCategories = skillCategories.filter(
    (category) =>
      category.slug !== "tools-and-other-technologies" &&
      category.slug !== "concepts"
  );

  return (
    <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-6 lg:py-12 flex flex-col">
      {/* 
        Bento Grid Layout:
        - Mobile/Tablet (< lg): 1 column (stack), evenly sized blocks
        - Desktop (>= lg): 4 columns to achieve asymmetrical weights
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 auto-rows-min">

        {/* 1. Name Block: 1st on mobile, top-left on desktop */}
        <BentoCard className="order-1 lg:order-1 lg:col-span-5 min-h-[250px] lg:min-h-[280px] hover:border-zinc-400 dark:hover:border-zinc-600">
          <div className="flex h-full flex-col justify-center">
            <h1 className="font-heading font-bold tracking-tight flex flex-col">
              <span className="text-zinc-700 dark:text-zinc-400 font-semibold text-2xl sm:text-4xl lg:text-3xl leading-tight tracking-tight mt-1">
                BHARGAV
              </span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold text-5xl sm:text-8xl lg:text-6xl xl:text-7xl leading-none tracking-tight">
                GAJARE
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl font-normal text-zinc-700 dark:text-zinc-400 max-w-md leading-relaxed">
              An engineer who designs and builds systems with performance, architecture, and execution ownership.
            </p>
          </div>
        </BentoCard>

        {/* 2. Education Block: 2nd on mobile, bottom-left (under Name) on desktop */}
        <BentoCard id="education" className="order-2 lg:order-3 lg:col-span-5 min-h-[250px] lg:min-h-[280px] hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/education" aria-label="View Education details" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Education</h2>
                <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
              </div>
              <div className="mt-6 flex-1 overflow-y-auto pr-4">
                <div className="relative ml-2 space-y-6">
                  <span className="absolute left-0 top-2 bottom-1 w-[1px] bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

                  {education.map((item, idx) => (
                    <div key={item.slug} className="relative pl-7">
                      <span
                        className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-white/60 dark:ring-zinc-900/60 ${
                          idx === 0
                            ? "bg-zinc-900 dark:bg-zinc-100"
                            : "bg-zinc-300 dark:bg-zinc-700"
                        }`}
                        aria-hidden="true"
                      />
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {item.shortInstitution || item.institution}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TileLink>
        </BentoCard>

        {/* 3. Experience Block: 3rd on mobile, Row 1-2 right (spans 2 rows) on desktop */}
        <BentoCard id="experience" className="order-3 lg:order-2 lg:col-span-7 lg:row-span-2 min-h-[300px] lg:min-h-[600px] transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/experience" aria-label="View Experience details" className="flex h-full flex-col group cursor-pointer">
            <div className="flex items-center gap-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Experience</h2>
              <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
            </div>

            <div className="mt-6 flex-1 overflow-y-auto pr-4">
              <div className="relative ml-2 space-y-8">
                <span className="absolute left-0 top-2 bottom-1 w-[1px] bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

                {groupedExperience.map((group, groupIdx) => (
                  <div key={group.company} className="relative pl-7">
                    <span
                      className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-white/60 dark:ring-zinc-900/60 ${
                        groupIdx === 0
                          ? "bg-zinc-900 dark:bg-zinc-100"
                          : "bg-zinc-300 dark:bg-zinc-700"
                      }`}
                      aria-hidden="true"
                    />
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {group.company}
                    </h3>
                    <div className="mt-2.5 flex flex-col gap-4">
                      {group.roles.map((item) => (
                        <div key={item.slug}>
                          <p className="text-base sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                            {item.role}{" "}
                            <span className="font-normal text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 ml-1">
                              | {item.period}
                            </span>
                          </p>
                          <p className="mt-1 text-sm sm:text-base font-normal text-zinc-700 dark:text-zinc-400 leading-relaxed">
                            {item.shortDescription}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TileLink>
        </BentoCard>

        {/* 4. Projects Block: 4th on mobile, Row 3 left on desktop */}
        <BentoCard id="projects" className="order-4 lg:order-4 lg:col-span-7 min-h-[300px] lg:min-h-[400px] transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/projects" aria-label="View Projects details" className="flex h-full flex-col group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Projects</h2>
                <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 space-y-6 flex-1 overflow-y-auto pr-4">
              {projects.map((project) => (
                <div key={project.slug} className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-wide">
                    {project.keywords.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </TileLink>
        </BentoCard>

        {/* 5. Skills Block: 5th on mobile, Row 3 right on desktop */}
        <BentoCard id="skills" className="order-5 lg:order-5 lg:col-span-5 min-h-[300px] lg:min-h-[400px] hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/skills" aria-label="View Skills details" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:opacity-80 transition-opacity">Skills</h2>
                <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
              </div>

              <div className="mt-6 space-y-6 flex-1 overflow-y-auto pr-4">
                {homeSkillCategories.map((category) => (
                  <div key={category.slug} className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base font-normal text-zinc-700 dark:text-zinc-400 leading-relaxed">
                      {category.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TileLink>
        </BentoCard>

        {/* 6. Blogs Block: 6th on mobile, equal 6/12 width in bottom row on desktop */}
        <BentoCard id="blogs" className="order-6 lg:order-6 lg:col-span-6 min-h-[250px] lg:min-h-[300px] hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/blogs" aria-label="View Blogs and Insights" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col justify-center">
              <h2 className="font-heading font-bold tracking-tight flex flex-col">
                <span className="text-zinc-700 dark:text-zinc-400 font-semibold text-2xl sm:text-3xl lg:text-3xl leading-none tracking-tight">
                  BLOGS
                </span>
                <span className="flex items-center gap-3 mt-1">
                  <span className="text-zinc-900 dark:text-zinc-100 font-bold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
                    & INSIGHTS
                  </span>
                  <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg font-normal text-zinc-700 dark:text-zinc-400 max-w-lg leading-relaxed">
                Deep dives into spatial computing architectures, filesystem forensics, and low-level system performance optimization.
              </p>
            </div>
          </TileLink>

        </BentoCard>

        {/* 7. Contact Block: 7th on mobile, equal 6/12 width in bottom row on desktop */}
        <BentoCard id="contact" className="order-7 lg:order-7 lg:col-span-6 min-h-[250px] lg:min-h-[300px] hover:border-zinc-400 dark:hover:border-zinc-600">
          <TileLink href="/contact" aria-label="Get in touch" className="flex h-full flex-col group cursor-pointer">
            <div className="flex h-full flex-col justify-center">
              <h2 className="font-heading font-bold tracking-tight flex flex-col">
                <span className="text-zinc-700 dark:text-zinc-400 font-semibold text-2xl sm:text-3xl lg:text-3xl leading-none tracking-tight">
                  GET
                </span>
                <span className="flex items-center gap-3 mt-1">
                  <span className="text-zinc-900 dark:text-zinc-100 font-bold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
                    IN TOUCH!
                  </span>
                  <FaLink className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" aria-hidden="true" />
                </span>
              </h2>
              <p className="mt-6 text-base sm:text-lg font-normal text-zinc-700 dark:text-zinc-400 max-w-lg leading-relaxed">
                Open to discussions on systems architecture, XR engineering, and impactful collaborations.
              </p>
            </div>
          </TileLink>
        </BentoCard>
      </div>
    </main>
  );
}
