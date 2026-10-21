export interface ExperienceItem {
  slug: string;
  company: string;
  role: string;
  shortDescription: string;
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
    shortDescription: "Digital Healthcare Solutions in XR, Performance Optimization, 3D Assets Optimization, OpenXR, Rendering and Graphics in Unity...",
    period: "Jun 2026 - Sep 2026",
    type: "Internship",
    overview:
      "At IITI DRISHTI CPS Foundation, IIT Indore, I led the architectural design and optimisation of performance-critical AR/VR simulations under strict hardware constraints. By refining 3D topology, compressing textures, applying static batching, and implementing frustum and occlusion culling, I improved runtime performance by over 40% and reduced draw calls and batch counts by more than 50%. I also engineered custom OpenXR hand-grab systems using calibrated finger-joint tracking, grip smoothing, and directional filtering to enable stable object interactions and responsive wheelchair propulsion, alongside fluid locomotion, while maintaining frame budgets through continuous hardware profiling.",
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
    shortDescription: "Backend Infrastructure, CI/CD, Cloudflare Tunneling, Next.js, Supabase, JWT and RBAC implementation...",
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
    shortDescription: "Full Stack Web Development and Responsive UI Implementation...",
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
    shortDescription: "Aviation Simulation, Performance Conscious System Design, Custom RESTful Layer Engineering, UI/UX and Interaction Design...",
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
      "Developed an end-to-end aviation component simulator from the ground up, integrating 20+ interconnected cabin-system controls and workflows.",
      "Built a full-stack application using React, Firebase Authentication, and Firestore for interactive system controls, user identity, and persistent profiles.",
      "Engineered instructor-driven fault injection and hardware interfaces to simulate aircraft-system failures, abnormal conditions, and audio events.",
    ],
  },
  {
    slug: "vighnesh-inc-software-developer-intern",
    company: "Vighnesh Inc.",
    role: "Software Developer Intern",
    shortDescription: "Performance Optimization, Hardware Feasibility Analysis, GPU Computing and Profiling...",
    period: "May 2023 - Jan 2024",
    type: "Internship",
    overview:
      "During my initial internship at Vighnesh Inc., I contributed across full-stack and backend integrations and immersive spatial computing projects. I built backend-synchronized simulation modules in PHP that connected real-time virtual simulation states with server-side processing pipelines. A major milestone involved porting complex Pre-Flight Check aviation training simulations from tethered PC VR systems (HTC Vive) to standalone Meta Quest Pro hardware. Through rigorous GPU profiling, aggressive texture compression, and occlusion culling, I resolved severe rendering bottlenecks to maintain smooth frame rates on mobile VR hardware, while conducting foundational hardware trade-off assessments that guided future engineering roadmaps.",
    achievements: [
      "Built backend-integrated simulation modules, implementing server-side request handling tied to real-time simulation state.",
      "Ported Pre-Flight Check aviation training simulation from PC VR (HTC Vive) to standalone VR (Meta Quest Pro) using the Meta XR SDK.",
      "Profiled and resolved critical rendering bottlenecks through occlusion culling, texture compression, and GPU profiling.",
      "Sustained stable frame rates under strict hardware targets, directly unblocking deployment on low-spec hardware.",
      "Conducted hardware feasibility analysis across heterogeneous platforms, producing architecture trade-off assessments that shaped production decisions.",
    ],
  },
];

export function getExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experienceItems.find((item) => item.slug === slug);
}
