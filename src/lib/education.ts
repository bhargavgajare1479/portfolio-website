export interface Education {
    slug: string;
    institution: string;
    shortInstitution: string;
    degree: string;
    location: string;
    period: string;
    score: string;
    shortDescription: string;
    achievements: string[];
}

export const education: Education[] = [
    {
        slug: "dmce",
        institution: "NYSS’s Datta Meghe College of Engineering",
        shortInstitution: "NYSS’s Datta Meghe College of Engineering",
        degree: "B.E. in Artificial Intelligence and Data Science",
        location: "Navi Mumbai, India",
        period: "Sept 2024 – Expected June 2027",
        score: "Current CGPA: 7.32",
        shortDescription: "B.E. Artificial Intelligence & Data Science • 7.32 CGPA • 2024 – 2027",
        achievements: [
            "International Research Selection: Authored an advanced systems/data research paper selected for international publication and presentation at an International Research Conference.",
            "AISPARK '25 (1st Place): Secured championship honors at the flagship mini-project competition hosted by the Student Hive of Artificial Intelligence and Data Science.",
            "U’LECTRO 2025 (Judges’ Choice Award): Earned distinct recognition in the AR/VR domain at the nationwide technology competition organized by SVKM's NMIMS Mukesh Patel School of Technology Management & Engineering.",
            "CSI Mini Project (2nd Place): Awarded runner-up honors in the technical development showcase organized by the Computer Society of India.",
        ],
    },
    {
        slug: "thakur-polytechnic",
        institution: "Zagdu Singh Charitable Trust’s Thakur Polytechnic",
        shortInstitution: "Thakur Polytechnic",
        degree: "Diploma in Computer Engineering",
        location: "Mumbai, India",
        period: "Oct 2021 – June 2024",
        score: "Final Score: 86.97%",
        shortDescription: "Diploma in Computer Engineering • 86.97% • 2021 – 2024",
        achievements: [
            "Homewise Vision Research Publication: Principal author of the spatial computing research paper \"AR Application: Homewise Vision\" published in the International Research Journal of Engineering and Technology (IRJET), Volume 11, Issue 2.",
            "Technofest 2024 (3rd Place): Placed top-three in the competitive Capstone Project category for engineering execution.",
        ],
    },
];

export function getEducationBySlug(slug: string): Education | undefined {
    return education.find((e) => e.slug === slug);
}