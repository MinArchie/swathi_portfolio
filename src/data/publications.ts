/**
 * ============================================================
 * PUBLICATIONS — shown as a banner on the homepage and in the
 * "Research" block on the Education page.
 *
 * ⚠️ TODO: replace the placeholder title/venue/year below with
 * your paper's exact details from IEEE Xplore.
 *
 * To ADD another paper: copy the { ... } block.
 * ============================================================
 */

export type Publication = {
  title: string;
  venue: string;
  year: string;
  link: string;
  /** Optional one-sentence summary shown under the title. */
  summary?: string;
};

export const publications: Publication[] = [
  {
    title: "Your paper title — edit src/data/publications.ts",
    venue: "IEEE Conference / Journal name",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11544415",
    summary:
      "One sentence on what the paper contributes (optional — delete this line to hide).",
  },
];
