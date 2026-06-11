/**
 * ============================================================
 * WORK EXPERIENCE — rendered on the Experience page; the
 * homepage snapshot counts these and lists role @ company.
 *
 * ⚠️ TODO: replace the two placeholder internships below with
 * your real ones.
 *
 * To ADD a job: copy a { ... } block, paste, edit.
 * To REMOVE one: delete its { ... } block.
 * Order: put the most recent first.
 * ============================================================
 */

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  /** One or two sentences about what you did. */
  summary: string;
  /** Optional bullet points (impact, numbers, shipped things). */
  highlights?: string[];
  /** Optional tech badges. */
  tags?: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Company One — edit src/data/experience.ts",
    location: "Bengaluru, KA",
    period: "May 2025 – Jul 2025",
    summary:
      "One or two sentences about what you built or worked on during this internship.",
    highlights: [
      "A concrete thing you shipped or improved",
      "A number if you have one (users, % faster, etc.)",
    ],
    tags: ["Python", "React"],
  },
  {
    role: "Intern",
    company: "Company Two — edit src/data/experience.ts",
    location: "Remote",
    period: "Dec 2024 – Feb 2025",
    summary:
      "One or two sentences about what you built or worked on during this internship.",
    tags: ["JavaScript"],
  },
];
