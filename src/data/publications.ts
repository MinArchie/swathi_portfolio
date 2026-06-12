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
    title: "Hardware-Level Emulation of Wi-Fi Clone Attacks with On-Device Intelligence using ESP32",
    venue: "IEEE Xplore",
    year: "2026",
    link: "https://ieeexplore.ieee.org/document/11544415",
    summary:
      "An IEEE-published embedded wireless security research project demonstrating ESP32-based Evil Twin Wi-Fi attacks using on-device machine learning, deauthentication, and rogue access point emulation.",
  },
];
