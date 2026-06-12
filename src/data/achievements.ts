export type Achievement = {
  date: string;
  title: string;
  description: string;
  highlights?: string[];
};

export const achievements: Achievement[] = [
  {
    date: "05 Jun 2026",
    title: "IEEE Research Publication",
    description:
      "Published research on ESP32-based Evil Twin Wi-Fi attack emulation with on-device machine learning at IEEE AIDE 2026.",
    highlights: [
      "Wireless Security",
      "Embedded Systems",
      "ESP32",
    ],
  },
  {
    date: "01 Aug 2025",
    title: "2× Merit Scholarship Award",
    description:
      "Awarded RV University Merit Scholarship consecutively for academic excellence.",
    highlights: [
      "CGPA: 9.67/10",
      "2024 & 2025",
    ],
  },
  {
    date: "15 Apr 2026",
    title: "1st Place — Capture The Flag (CTF)",
    description:
      "Won 1st place in a cybersecurity Capture The Flag competition hosted by Christ University.",
    highlights: [
      "Cybersecurity",
      "Threat Analysis",
      "Problem Solving",
    ],
  },
  {
    date: "10 Nov 2023",
    title: "3rd Place — CTF Challenge",
    description:
      "Won 3rd place in a Capture-the-Flag challenge organized by RVU's CyberSecurity Club.",
    highlights: ["Prize: Bluetooth Speakers"],
  },
  {
    date: "31 Mar 2021",
    title: "1st — SOF International English Olympiad (School Level)",
    description:
      "Won 1st place at school level in the SOF International English Olympiad.",
    highlights: ["Zonal Rank: 11", "International Rank: 15"],
  },
];