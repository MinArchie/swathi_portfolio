/**
 * ============================================================
 * SITE-WIDE INFO — edit this file to change your name, pitch,
 * skills, contact details, and social links everywhere.
 * ============================================================
 */

export const site = {
  name: "Swathi Kulkarni",
  tagline: "Programmer. Photographer.",

  /** One-line role shown under your name and on the homepage. */
  role: "B.Tech CSE (Hons) student @ RV University, Bengaluru",

  /** The 10-second pitch recruiters read first. Keep it short. */
  pitch:
    "Computer science undergrad who builds clean, interactive web experiences. I like turning ideas into working products — and I sweat the details, from the code to the pixels.",

  /** Longer story for the About page. */
  intro:
    "Hello! I'm a computer science student passionate about coding in Python, C, HTML, CSS, and JavaScript. I specialize in web development, love solving problems, and enjoy building things that feel alive. This site's hand-drawn parallax artwork? Drew and animated it myself.",

  /** One personality line (About page). */
  beyond:
    "Off the keyboard, I'm usually behind a camera or writing — photography and storytelling keep my eye sharp for design.",

  /** Grouped skills (About page). The homepage marquee flattens these. */
  skillGroups: [
    { label: "Languages", items: ["Python", "C", "JavaScript", "TypeScript"] },
    { label: "Web", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { label: "Tools", items: ["Git & GitHub", "VS Code", "Linux"] },
  ],

  email: "swathi.shrirang.kulkarni@gmail.com",
  phone: "9148988384",
  location: "Bengaluru, KA",

  github: "https://github.com/MinArchie",
  linkedin: "https://www.linkedin.com/in/swathi-kulkarni-a146b3294",

  /**
   * Resume button (recruiters love this): drop your resume.pdf
   * into public/ and change this to "resume.pdf". Leave "" to hide.
   */
  resume: "",

  copyrightYear: new Date().getFullYear(),
};

/** Flat skill list, used by the homepage marquee. */
export const allSkills = site.skillGroups.flatMap((g) => g.items);
