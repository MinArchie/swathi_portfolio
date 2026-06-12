import type { ComponentType } from "react";
import { Bug, Database, KeyRound, Network, ScanSearch, Wifi } from "lucide-react";
import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiDocker,
  SiFlask,
  SiGithub,
  SiJavascript,
  SiKalilinux,
  SiLinux,
  SiNodedotjs,
  SiOwasp,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
  SiEspressif,
} from "react-icons/si";

/**
 * Maps a skill name from site.skillGroups to a small icon.
 * Brand logos come from Simple Icons (react-icons/si); abstract
 * security concepts fall back to lucide glyphs.
 */
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  // Languages
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  C: SiC,
  "C++": SiCplusplus,
  SQL: Database,

  // Cybersecurity
  "Malware Analysis": Bug,
  "Network Security": Network,
  "OWASP Principles": SiOwasp,
  YARA: ScanSearch,
  "Authentication & Authorization": KeyRound,
  "Wi-Fi Security": Wifi,

  // Development
  React: SiReact,
  "Node.js": SiNodedotjs,
  Flask: SiFlask,
  Docker: SiDocker,
  Angular: SiAngular,

  // Tools & platforms
  "Git & GitHub": SiGithub,
  Linux: SiLinux,
  ESP32: SiEspressif,
  "TensorFlow Lite": SiTensorflow,
  "Kali Linux": SiKalilinux,
};

export default function SkillIcon({
  name,
  className = "size-3.5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name];
  return Icon ? <Icon className={className} aria-hidden /> : null;
}
