export interface SessionItem {
  slug: string;
  title: string;
  type: string;
  date: string;
  institution?: string;
  description: string;
  images: string[];
  linkedinPostLink?: string;
}

export const sessionItems: SessionItem[] = [
  {
    slug: "introduction-to-game-development-workshop",
    title: "Introduction to Game Development",
    type: "WORKSHOP",
    date: "January, 2026",
    description:
      "Had the opportunity to deliver a guest session on Game Development for second-year Computer Engineering students. The session covered key concepts shaping modern game development. We discussed the balance between building systems from scratch and using game engines, comparing C++ in Unreal Engine, C# in Unity, and GDScript in Godot. Students were introduced to the seven-stage Game Development Life Cycle, from project initiation to testing and deployment, highlighting the multidisciplinary nature of development. The session concluded with an overview of AI's growing role in 2026, including reinforcement learning with ML-Agents and neural rendering technologies such as DLSS.",
    images: [
      "/experience-sessions/introduction-to-game-development-workshop/1.png",
      "/experience-sessions/introduction-to-game-development-workshop/2.png",
      "/experience-sessions/introduction-to-game-development-workshop/3.png",
    ],
    linkedinPostLink: "https://www.linkedin.com/posts/bhargavsg_gamedev-engineering-unity3d-ugcPost-7421585559925604352-1-R4/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACmraTQBHh8PFkl-_HliLQJ-7J7bkaN_5Tk",
  },
  {
    slug: "github-for-beginners-workshop",
    title: "GitHub for Beginners",
    type: "WORKSHOP",
    date: "August, 2025",
    institution: "Datta Meghe College of Engineering, Airoli",
    description:
      "Had the privilege to deliver a workshop for my juniors at Datta Meghe College of Engineering, Airoli, covering the essentials of GitHub. This session empowered students with practical skills in version control, preparing them to manage projects confidently and contribute to real-world repositories.",
    images: [
      "/experience-sessions/github-for-beginners-workshop/1.jpeg",
      "/experience-sessions/github-for-beginners-workshop/2.jpeg",
      "/experience-sessions/github-for-beginners-workshop/3.jpeg",
    ],
    linkedinPostLink: "https://www.linkedin.com/posts/bhargavsg_github-versioncontrol-beyondbytes-ugcPost-7366062241273540608-vVlY/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACmraTQBHh8PFkl-_HliLQJ-7J7bkaN_5Tk",
  },
  {
    slug: "fdp-introduction-to-ar-vr",
    title: "Introduction to Augmented Reality and Virtual Reality",
    type: "FACULTY DEVELOPMENT PROGRAM",
    date: "July, 2025",
    institution: "Prestige Institute of Engineering, Management and Research",
    description:
      "Conducted a Faculty Development Program (FDP) on leading technologies like Augmented Reality and Virtual Reality at Prestige Institute of Engineering, Management and Research. This program equipped faculty members with foundational knowledge and practical skills in AR and VR technologies, enabling them to integrate these cutting-edge tools into their curriculum and enhance the learning experience for students across various disciplines.",
    images: [
      "/experience-sessions/fdp-introduction-to-ar-vr/1.jpeg",
      "/experience-sessions/fdp-introduction-to-ar-vr/2.jpeg",
      "/experience-sessions/fdp-introduction-to-ar-vr/3.jpeg",
    ],
    linkedinPostLink: "https://www.linkedin.com/posts/bhargavsg_ar-vr-xr-ugcPost-7360392989514383360-N2X7/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACmraTQBHh8PFkl-_HliLQJ-7J7bkaN_5Tk",
  },
  {
    slug: "git-and-github-essentials-workshop",
    title: "Git and GitHub Essentials",
    type: "WORKSHOP",
    date: "June, 2025",
    institution: "Tantraniketan",
    description:
      "Conducted a workshop on Git and GitHub for the students of Tantraniketan, an educational organisation, which provided internship program for Polytechnic and Engineering students. This session empowered students with practical skills in version control, branching workflows, and open-source collaboration, preparing them to manage projects confidently and contribute to real-world repositories.",
    images: [
      "/experience-sessions/git-and-github-essentials-workshop/1.jpeg",
      "/experience-sessions/git-and-github-essentials-workshop/2.jpeg",
      "/experience-sessions/git-and-github-essentials-workshop/3.jpeg",
    ],
    linkedinPostLink: "https://www.linkedin.com/posts/bhargavsg_it-was-an-amazing-experience-to-guide-students-ugcPost-7347725548959248384-Sbdw/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACmraTQBHh8PFkl-_HliLQJ-7J7bkaN_5Tk",
  },
  {
    slug: "early-stage-entrepreneurs-seminar",
    title: "Early Stage Entrepreneurs",
    type: "SEMINAR",
    date: "July, 2024",
    institution: "Thakur College of Engineering and Technology, Kandivali (East)",
    description:
      "Had the opportunity to deliver a seminar at Thakur College of Engineering and Technology, Kandivali (East), sharing insights on entrepreneurship, innovation, and the inspiring growth of Vighnesh Inc. - a leading VR & AR solutions provider making an impact across industries such as education, aviation, real estate, and media.",
    images: [
      "/experience-sessions/early-stage-entrepreneurs-seminar/1.jpeg",
      "/experience-sessions/early-stage-entrepreneurs-seminar/2.jpeg",
      "/experience-sessions/early-stage-entrepreneurs-seminar/3.jpeg",
    ],
    linkedinPostLink: "https://www.linkedin.com/posts/om-awadhoot_innovation-entrepreneurship-vr-ugcPost-7297332499595091968-aqiQ/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACmraTQBHh8PFkl-_HliLQJ-7J7bkaN_5Tk",
  },
];

export function getSessionBySlug(slug: string): SessionItem | undefined {
  return sessionItems.find((item) => item.slug === slug);
}
