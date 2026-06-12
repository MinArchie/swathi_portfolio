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
    featured: false,
    github: "https://github.com/MinArchie/swathi_portfolio",
    demo: "https://minarchie.github.io/swathi_portfolio/",
    image: "images/projects/portfolio.png",
  },
  {
    title: "XAI Malware Detection Extension",
    description:
      "A Chrome extension that detects and blocks malicious JavaScript in real time using a cloud-hosted Python/Flask backend and an Explainable Boosting Machine trained on ~17,000 JS samples.",
    tags: [
      "Python",
      "Flask",
      "JavaScript",
      "Machine Learning",
      "Cybersecurity",
      "Chrome Extension",
    ],
    featured: true,
    github: "https://github.com/MinArchie/XAI-MalwareJs",
    image: "images/projects/xai-project.png",
  },
  {
    title: "ESP32 Evil Twin Wi-Fi Research Platform",
    description:
      "An IEEE-published embedded wireless security project demonstrating ESP32-based Evil Twin Wi-Fi attacks using on-device machine learning, deauthentication, and rogue access point emulation.",
    tags: [
      "ESP32",
      "C++",
      "Embedded Systems",
      "TensorFlow Lite",
      "Wi-Fi Security",
      "Cybersecurity",
    ],
    featured: true,
    github: "https://github.com/MinArchie/evil-twin-wifi",
    image: "images/projects/evil-twin.png",
  },
  {
    title: "Malware Analysis Simulator",
    description:
      "A web-based malware analysis platform featuring YARA scanning, IOC extraction, VirusTotal integration, and AI-powered threat analysis recommendations.",
    tags: [
      "Python",
      "Docker",
      "YARA",
      "Malware Analysis",
      "Cybersecurity",
    ],
    featured: true,
    github: "https://github.com/MinArchie/Malware-Anaysis-Simulator",
    image: "images/projects/malware-analysis.png",
  },
];