export interface Project {
  slug: string;
  title: string;
  keywords: string[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "unearth",
    title: "Unearth",
    keywords: ["Systems Programming", "Digital Forensics", "Filesystem Parsing"],
    description: "An advanced forensic engineering suite and high-performance filesystem parser designed for low-level systems analysis, raw disk inspection, and automated digital forensics.",
    techStack: ["Python"],
    githubUrl: "https://github.com/yourusername/unearth",
    liveUrl: "https://example.com",
    challenges: [
      "Parsing raw filesystem structures and inodes at high speed without memory bloat.",
      "Recovering corrupted or fragmented directory tables with resilient error handling protocols.",
    ],
  },
  {
    slug: "homewise-vision",
    title: "Homewise Vision",
    keywords: ["Spatial Computing", "Cloud Architecture", "AR Visualization"],
    description: "A cutting-edge spatial computing platform for visualizing architectural blueprints and interior layouts in augmented reality, backed by scalable cloud infrastructure.",
    techStack: ["C#", "Unity", "Firebase"],
    githubUrl: "https://github.com/yourusername/homewise-vision",
    liveUrl: "https://example.com",
    challenges: [
      "Optimizing real-time spatial occlusion and lighting estimation in complex indoor environments.",
      "Streaming high-fidelity 3D architectural assets over cloud infrastructure with zero perceivable latency.",
    ],
  },
  {
    slug: "serenitysphere",
    title: "SerenitySphere",
    keywords: ["Immersive Systems", "OpenXR", "Hardware Optimization"],
    description: "An immersive OpenXR environment built for standalone hardware, engineering sensory feedback and therapeutic virtual ecosystems with uncompromising performance.",
    techStack: ["C#", "Unity"],
    githubUrl: "https://github.com/yourusername/serenitysphere",
    liveUrl: "https://example.com",
    challenges: [
      "Maintaining a rock-solid 90+ FPS frame rate through aggressive shader profiling and draw call reduction.",
      "Engineering a hardware-agnostic OpenXR runtime abstraction layer for cross-headset deployment.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
