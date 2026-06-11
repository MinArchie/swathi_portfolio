/**
 * ============================================================
 * EDUCATION TIMELINE — newest entries can go anywhere; the page
 * renders them in the order they appear in this array.
 *
 * To ADD an entry: copy one { ... } block, paste it, edit it.
 * To REMOVE an entry: delete its { ... } block.
 * ============================================================
 */

export type EducationEntry = {
  year: string;
  institution: string;
  place: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    year: "2020",
    institution: "Vidyaniketan Public School",
    place: "Bengaluru, KA",
    detail: "CBSE 10th — 86%",
  },
  {
    year: "2022",
    institution: "Vidyaniketan Public School",
    place: "Bengaluru, KA",
    detail: "CBSE 12th — 87%",
  },
  {
    year: "2024 – present",
    institution: "RV University",
    place: "Bengaluru, KA",
    detail: "Pursuing B.Tech (Hons) in Computer Science",
  },
];
