/**
 * ============================================================
 * ACHIEVEMENTS — rendered on the Education & Achievements page.
 *
 * To ADD one: copy a { ... } block, paste it anywhere in the
 * array, and edit. `highlights` is an optional list of extra
 * bullet points (rank, prize, etc.) — omit it if not needed.
 * To REMOVE one: delete its { ... } block.
 * ============================================================
 */

export type Achievement = {
  date: string;
  title: string;
  description: string;
  highlights?: string[];
};

export const achievements: Achievement[] = [
  {
    date: "10 Nov 2023",
    title: "3rd place — CTF Challenge",
    description:
      "Won 3rd place in a Capture-the-Flag challenge organized by RVU's CyberSecurity Club.",
    highlights: ["Prize: Bluetooth speakers"],
  },
  {
    date: "31 Mar 2021",
    title: "1st — SOF International English Olympiad (School Level)",
    description: "Won 1st place at school level in the SOF International English Olympiad.",
    highlights: ["Zonal Rank: 11", "International Rank: 15"],
  },
];
