export interface SkillCategory {
  slug: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    slug: "core-programming-languages",
    title: "Core Programming Languages",
    description: "Primary general-purpose and programming languages that I have worked with across multiple domains.",
    skills: ["C#", "Python", "JavaScript", "SQL"],
  },
  {
    slug: "xr-stack",
    title: "XR Stack",
    description: "Immersive spatial computing, augmented reality, and virtual reality frameworks and engines.",
    skills: [
      "Unity",
      "OpenXR",
      "XR Interaction Toolkit",
      "Meta XR SDK",
      "Microsoft MRTK",
      "AR Foundation",
      "Vuforia Engine",
    ],
  },
  {
    slug: "backend-stack",
    title: "Backend Stack",
    description: "High-performance server frameworks, cloud databases, and API development infrastructure.",
    skills: ["FastAPI", "Firebase", "Supabase", "Express.js"],
  },
  {
    slug: "tools-and-other-technologies",
    title: "Tools and other technologies",
    description: "DevOps, deployment platforms, version control, and containerization tooling.",
    skills: ["Linux", "Cloudflare", "Git and GitHub", "Docker"],
  },
  {
    slug: "concepts",
    title: "Concepts",
    description: "Architectural principles, optimization methodologies, systems engineering, and advanced software engineering paradigms.",
    skills: [
      "OOP",
      "Runtime Optimization",
      "Asynchronous Programming",
      "REST API Design and Integration",
      "Authentication and Authorisation (JWT and RBAC)",
      "Memory Management",
      "Object Lifecycle Management",
      "Database Integration",
      "LLM Integration",
    ],
  },
];

export function getSkillCategoryBySlug(slug: string): SkillCategory | undefined {
  return skillCategories.find((c) => c.slug === slug);
}
