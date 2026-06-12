export const site = {
  name: "Swathi Kulkarni",
  tagline: "Cybersecurity. Research. Engineering.",

  /** One-line role shown under your name and on the homepage. */
  role: "Cybersecurity Student & Software Engineering Intern @ RV University",

  /** The 10-second pitch recruiters read first. Keep it short. */
  pitch:
    "Cybersecurity-focused computer science undergraduate building secure systems, malware analysis tools, and embedded wireless security research projects with real-world engineering experience in backend and full stack development.",

  /** Longer story for the About page. */
  intro:
    "Hello! I'm a Computer Science undergraduate specializing in Cybersecurity at RV University. My work focuses on application security, malware analysis, wireless security, and secure backend systems. I've worked on projects ranging from real-time malicious JavaScript detection and malware analysis tooling to ESP32-based wireless security research published through IEEE. Alongside security research, I have industry experience building production full stack and backend systems at startups using modern web technologies.",

  /** One personality line (About page). */
  beyond:
    "Outside cybersecurity and development, I enjoy photography, writing, and exploring the intersection of design and technology.",

  /** Grouped skills (About page). The homepage marquee flattens these. */
  skillGroups: [
    {
      label: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "C", "C++", "SQL"],
    },
    {
      label: "Cybersecurity",
      items: [
        "Malware Analysis",
        "Network Security",
        "OWASP Principles",
        "YARA",
        "Authentication & Authorization",
        "Wi-Fi Security",
      ],
    },
    {
      label: "Development",
      items: [
        "React",
        "Node.js",
        "Flask",
        "Docker",
        "Angular",
        "TypeScript",
      ],
    },
    {
      label: "Tools & Platforms",
      items: [
        "Git & GitHub",
        "Linux",
        "ESP32",
        "TensorFlow Lite",
        "Kali Linux",
      ],
    },
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
  resume: "https://drive.google.com/file/d/1qpyoa1yTYepWkQ2Xsy4Y6Cf158QGxGcI/view?usp=sharing",

  copyrightYear: new Date().getFullYear(),
};

/** Flat skill list, used by the homepage marquee. */
export const allSkills = site.skillGroups.flatMap((g) => g.items);