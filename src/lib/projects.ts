export interface Project {
  slug: string;
  title: string;
  keywords: string[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  researchPaper?: string;
  challenges: string[];
}

export const projects: Project[] = [
  {
    slug: "unearth",
    title: "Unearth",
    keywords: ["Digital Forensics", "Data Recovery", "Filesystem Parsing"],
    description: "Unearth is a digital forensic investigation platform designed to help investigators uncover hidden or deleted information from digital systems. It combines data recovery techniques with intelligent content analysis in a single environment. The platform can recover deleted files from modern file systems, analyse recovered data, and assist investigators in understanding what happened on a system. Unearth also includes AI-based tools that help examine media and online content for deeper investigation.",
    techStack: ["Python"],
    githubUrl: "https://github.com/bhargavgajare1479/unearth",
    liveUrl: "https://unearth-forensics.vercel.app",
    challenges: [
      "RAID based Btrfs configurations may require additional handling depending on the storage layout.",
      "Due to the Copy-On-Write architecture, deleted metadata may disappear quickly, which reduces the time window for metadata based recovery.",
      "Advanced XFS recovery features are still under development and may not cover all edge cases.",
      "Some complex storage layouts or fragmented data structures may require deeper analysis beyond the current implementation."
    ],
  },
  {
    slug: "homewise-vision",
    title: "Homewise Vision",
    keywords: ["Spatial Computing", "Cloud Architecture", "AR Visualization"],
    description: "HomewiseVision is an AR-based app that helps users visualize and customize house designs using marker-based scanning. It allows free movement inside the 3D model, furniture placement, and real-time cost estimation. Designed for early planning, it ensures smarter decisions, faster execution, and a more engaging home-building experience.",
    techStack: ["C#", "Unity", "Firebase", "Vuforia Engine", "Python"],
    githubUrl: "https://github.com/bhargavgajare1479/HomewiseVision",
    liveUrl: "https://homewise-vision-prod.vercel.app",
    researchPaper: "https://www.irjet.net/archives/V11/i2/IRJET-V11I202.pdf",
    challenges: [
      "Proper placement of furnitures in the 3D model and visualising the cost of the furniture in real-time.",
      "Developing the application for multiple platforms, with different hardware specifications and AR capabilities.",
      "Integration of Apple Roomplan API to devices which do not support it."
    ],
  },
  {
    slug: "serenitysphere",
    title: "SerenitySphere",
    keywords: ["Immersive Systems", "OpenXR", "Hardware Optimization"],
    description: "In fast-paced cities like Mumbai, stress, anxiety, and chronic pain are rising, while traditional treatments have limitations. SerenitySphere is an immersive VR-based therapy solution with spatial audio, guided meditation, mindful games, and daily affirmations. It provides a safe, drug-free and engaging way to support mental wellness & pain relief.",
    techStack: ["C#", "Unity", "OpenXR", "XR Interaction Toolkit"],
    githubUrl: "https://github.com/bhargavgajare1479/SerenitySphere",
    demoVideoUrl: "https://drive.google.com/drive/folders/16oX4wzuZ6JkFNKWh57s4L51jT7_wjvY1?usp=drive_link",
    challenges: [
      "Maintaining a minimum baseline of 72 FPS across all VR devices, by using aggressive shader profiling and draw call reduction, specially for standalone VR Headsets.",
      "Engineering a hardware-agnostic OpenXR runtime abstraction layer for cross-headset deployment.",
      "Development of various Render Pipeline assets, catering to different VR Devices and constant testing across them."
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
