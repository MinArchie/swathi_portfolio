import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-display text-lg text-cream">{site.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 transition-colors hover:bg-cream/10 hover:text-white"
          >
            <Github className="size-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 transition-colors hover:bg-cream/10 hover:text-white"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="rounded-full p-2 transition-colors hover:bg-cream/10 hover:text-white"
          >
            <Mail className="size-5" />
          </a>
        </div>
        <p className="text-sm">
          © {site.copyrightYear} ·{" "}
          <Link to="/contact" className="underline-offset-4 hover:underline">
            Get in touch
          </Link>
        </p>
      </div>
    </footer>
  );
}
