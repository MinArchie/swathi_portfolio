import { Camera, Code2, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SkillIcon from "@/components/SkillIcon";
import { asset } from "@/lib/utils";
import { site } from "@/data/site";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Photo with a slowly-rotating gradient halo */}
        <Reveal className="relative mx-auto w-72 max-w-full sm:w-80">
          <div className="animate-spin-slow absolute -inset-6 rounded-[3rem] bg-[conic-gradient(from_0deg,rgba(145,111,111,0.45),transparent_30%,rgba(145,111,111,0.25),transparent_70%,rgba(145,111,111,0.45))]" />
          <img
            src={asset("images/random-lines.svg")}
            alt=""
            className="absolute -left-12 -top-12 w-32 opacity-60 hidden sm:block"
          />
          <motion.img
            src={asset("images/mypic.jpg")}
            alt={site.name}
            whileHover={{ rotate: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full rounded-[2.5rem] object-cover shadow-2xl"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
            About me
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Curious builder,
            <br />
            careful with details.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            {site.intro}
          </p>
          <p className="mt-4 flex items-start gap-2 text-muted-foreground">
            <Camera className="mt-1 size-4 shrink-0 text-clay" />
            {site.beyond}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={site.github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* ---------- Skills ---------- */}
      <div className="mt-24">
        <Reveal className="flex items-center gap-3">
          <Code2 className="size-7 text-clay" />
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {site.skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-clay hover:shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="gap-1.5 px-3.5 py-1.5 text-sm transition-colors group-hover:bg-clay/15"
                    >
                      <SkillIcon name={skill} className="size-3.5 text-clay" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
