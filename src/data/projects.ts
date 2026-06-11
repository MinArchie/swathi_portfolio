/**
 * ============================================================
 * PROJECTS — rendered on the Projects page as cards.
 * Projects with `featured: true` also appear on the homepage
 * (first three featured ones).
 *
 * To ADD a project: copy a { ... } block, paste, edit.
 * To REMOVE a project: delete its { ... } block.
 *
 * Fields:
 *  - title / description: what shows on the card
 *  - tags: tech badges (any strings)
 *  - featured: show on the homepage too (optional)
 *  - github: link to the repo (optional — omit to hide button)
 *  - demo: link to a live demo (optional — omit to hide button)
 *  - image: path under public/ (optional — omit for no image).
 *    Put new screenshots in public/images/projects/ and write
 *    the path as "images/projects/yourfile.png".
 * ============================================================
 */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This very site — hand-drawn parallax artwork brought to life with a custom scroll animation, rebuilt with React, Tailwind, and shadcn/ui.",
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true,
    github: "https://github.com/MinArchie/swathi_portfolio",
    demo: "https://minarchie.github.io/swathi_portfolio/",
  },
  // 👇 Replace these placeholders with your real projects.
  {
    title: "Your Next Project",
    description:
      "A short one- or two-sentence description of what it does and why it's cool.",
    tags: ["Python"],
    featured: true,
    github: "https://github.com/MinArchie",
  },
];
