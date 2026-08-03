export interface ExperienceItem {
  slug: string;
  company: string;
  role: string;
  period: string;
  type: "Internship" | "Full Time" | "Hybrid" | "Part Time";
  overview: string;
  achievements: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    slug: "iiti-drishti-cps-foundation-project-intern",
    company: "IITI Drishti CPS Foundation, IIT Indore",
    role: "Project Intern (AR/VR)",
    period: "Jun 2026 - Present",
    type: "Internship",
    overview:
      "At IITI Drishti CPS Foundation at IIT Indore, I spearhead the architectural design and optimization of performance-critical AR/VR simulation systems. Facing rigorous hardware limits, I systematically analyzed client deliverables to engineer tailored rendering pipelines and spatial computing solutions. By combining aggressive 3D model topology refinement, texture compression, static batching, and comprehensive occlusion and frustum culling, I achieved over 40% faster runtime performance and cut draw calls and batch counts by more than half. Additionally, I built highly responsive interactive spatial controls—including open-standard OpenXR hand grab mechanics and fluid locomotion—while maintaining strict frame budgets via continuous hardware profiling.",
    achievements: [
      "Analyzed and planned system architecture based on client deliverables to develop performance-conscious simulation systems.",
      "Reduced draw calls by optimizing 3D model topology and implementing aggressive texture compression.",
      "Boosted runtime performance by 40% using frustum culling, occlusion culling, baked lighting, baked shadows, and static batching.",
      "Decreased runtime triangles and batches by over 50% across targeted simulation environments.",
      "Developed device-specific render pipeline assets to cater to tight hardware constraints.",
      "Engineered custom C# scripts for Hand Grab logic and advanced locomotion mechanics using OpenXR.",
      "Monitored frame-by-frame performance constantly using the Unity Profiler and Meta Performance Analyzer.",
    ],
  },
  {
    slug: "sorxn-llp-software-developer",
    company: "Sorxn LLP",
    role: "Software Developer",
    period: "Jan 2026 - Jun 2026",
    type: "Hybrid",
    overview:
      "At Sorxn LLP, I architected and prototyped a backend infrastructure from the ground up, designing scalable RESTful API systems and automated deployment workflows. Seeking greater sovereignty and performance, I constructed a self-hosted communication server infrastructure on hardened Linux systems backed by Cloudflare tunneling and routing. This transition successfully eliminated dependency on third-party managed platforms while ensuring secure remote management. Building on this core infrastructure, I designed a full-stack internal administration dashboard secured with end-to-end JSON Web Token (JWT) authentication and granular role-based access control (RBAC), empowering internal teams with efficient, reliable, and secure operational tooling.",
    achievements: [
      "Built and validated a backend infrastructure prototype from the ground up - RESTful API systems, deployment pipelines, and PostgreSQL database integration, sustaining 150+ concurrent requests before handing off to production development.",
      "Built a self-hosted backend communication stack on Linux with Cloudflare-based traffic routing and tunnel-based secure remote access.",
      "Eliminated reliance on managed third-party services by routing internal tools through secure, self-hosted infrastructure.",
      "Developed a full-stack internal administration platform leveraging the established backend.",
      "Implemented robust security features including JWT-based authentication and role-based access control (RBAC).",
    ],
  },
  {
    slug: "sorxn-llp-software-developer-intern",
    company: "Sorxn LLP",
    role: "Software Developer Intern",
    period: "Dec 2025 - Jan 2026",
    type: "Internship",
    overview:
      "During my tenure as a Software Developer Intern at Sorxn LLP, I played a pivotal hands-on role in developing internal software systems alongside building and launching the official company web platform. Working closely with core engineering teams, I helped structure clean, maintainable web architectures and streamlined internal workflows. I took direct ownership of the final production deployment pipeline, managing domain routing, SSL configuration, and server optimization to ensure high uptime and responsive performance. This intensive foundational experience established seamless digital operations and paved the way for my transition to leading backend infrastructure development as a full-time Software Developer.",
    achievements: [
      "Assisted in the development of internal software systems and the official company website.",
      "Managed the production deployment and domain configuration of the official company website.",
    ],
  },
  {
    slug: "vighnesh-inc-unity-developer",
    company: "Vighnesh Inc.",
    role: "Unity Developer",
    period: "Jun 2024 - Dec 2025",
    type: "Hybrid",
    overview:
      "As a Unity Developer at Vighnesh Inc., I engineered core systems and custom architectural abstractions for large-scale enterprise XR and WebGL simulation platforms. To overcome cross-platform compatibility barriers, I replaced restrictive third-party SDKs with custom-built Firebase REST API clients and flexible UnityWebRequest networking layers. I architected a deterministic UI state machine managing over 500 runtime screens across 20+ aerospace simulation modules. Furthermore, I engineered an additive scene lifecycle controller with intelligent instance recycling, slashing peak memory consumption and load latency by over 50% while ensuring stable, memory-efficient C# execution across diverse standalone VR and web environments.",
    achievements: [
      "Replaced an external SDK entirely with a hand-rolled Firebase Authentication and Cloud Firestore REST API layer to achieve full WebGL compatibility.",
      "Eliminated a third-party runtime dependency by building a reusable UnityWebRequest HTTP abstraction for platform-agnostic backend communication within XR applications.",
      "Designed a rigid UI state management system handling 500+ runtime screens across 20+ ATA simulation modules to enforce deterministic state transitions.",
      "Built a custom scene lifecycle manager across 10+ additive scenes that prevented duplicate instantiation through active instance reuse.",
      "Cut peak memory usage, application latency, and overhead by over 50% using custom scene management workflows.",
      "Developed core application systems in C# with structured update loops and memory-conscious allocation patterns.",
      "Resolved platform-specific runtime constraints for multi-platform targeting by coordinating architecture decisions with deployment-stage testing outcomes.",
    ],
  },
  {
    slug: "vighnesh-inc-software-developer-intern",
    company: "Vighnesh Inc.",
    role: "Software Developer Intern",
    period: "May 2023 - Jan 2024",
    type: "Internship",
    overview:
      "During my initial internship at Vighnesh Inc., I contributed across full-stack backend integrations and immersive spatial computing projects. I built backend-synchronized simulation modules in PHP that connected real-time virtual simulation states with server-side processing pipelines. A major milestone involved porting complex Pre-Flight Check aviation training simulations from tethered PC VR systems (HTC Vive) to standalone Meta Quest Pro hardware. Through rigorous GPU profiling, aggressive texture compression, and occlusion culling, I resolved severe rendering bottlenecks to maintain smooth frame rates on mobile VR hardware, while conducting foundational hardware trade-off assessments that guided future engineering roadmaps.",
    achievements: [
      "Built backend-integrated simulation modules in PHP, implementing server-side request handling tied to real-time simulation state.",
      "Ported a Pre-Flight Check simulation from PC VR (HTC Vive) to standalone VR (Meta Quest Pro) using the Meta XR SDK.",
      "Profiled and resolved critical rendering bottlenecks through occlusion culling, texture compression, and GPU profiling.",
      "Sustained stable frame rates under strict hardware targets, directly unblocking deployment on low-spec hardware.",
      "Conducted hardware feasibility analysis across heterogeneous platforms, producing architecture trade-off assessments that shaped production decisions.",
    ],
  },
];

export function getExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experienceItems.find((item) => item.slug === slug);
}
