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
    role: "Software Engineering Intern",
    company: "Rescope",
    location: "Remote • Berkeley, CA",
    period: "Jun 2025 – Present",
    summary:
      "Worked full time during Summer 2025 before continuing part time during the academic semester, building backend and full stack systems for a real estate permit management platform.",
    highlights: [
      "Built production workflows for permit processing and authorization systems",
      "Worked on RBAC and authentication flows using Better Auth and Permit.io",
    ],
    tags: [
      "TypeScript",
      "React",
      "TanStack Start",
      "Drizzle ORM",
      "RBAC",
      "Permit.io",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Carbon Sustain",
    location: "Remote • Berkeley, CA",
    period: "Jan 2025 – Jun 2025",
    summary:
      "Built frontend features for enterprise sustainability tooling at a UC Berkeley-funded startup focused on carbon emissions tracking and reporting.",
    highlights: [
      "Developed UI components and workflows using Angular",
      "Worked alongside backend-integrated enterprise tooling systems",
    ],
    tags: [
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Frontend",
    ],
  },
];
