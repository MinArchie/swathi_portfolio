import { Link } from "react-router-dom";
import { ArrowRight, BookMarked, Briefcase, ExternalLink, Github, GraduationCap, Linkedin, MapPin, Sparkles, Trophy } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import Reveal from "@/components/Reveal";
import SkillIcon from "@/components/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/utils";
import { site, allSkills } from "@/data/site";
import { projects } from "@/data/projects";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { publications } from "@/data/publications";

/**
 * The homepage is a complete one-scroll summary for someone in a
 * hurry: who you are → what you can do → what you've built →
 * where you've been → how to reach you. Every section links to a
 * deeper page.
 */
export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latestEducation = education[education.length - 1];

  return (
    <>
      <ParallaxHero />

      {/* ---------- 10-second snapshot ---------- */}
      <section id="snapshot" className="relative z-10 bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-clay-light">
              <Sparkles className="size-4" /> Hi, I'm Swathi
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Building secure systems & breaking <span className="text-clay-light italic">insecure</span> ones.
              
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              {site.pitch}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Button asChild variant="accent" size="lg">
                <Link to="/projects">
                  View projects <ArrowRight />
                </Link>
              </Button>
              {site.resume && (
                <Button asChild variant="outline-light" size="lg">
                  <a href={site.resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </Button>
              )}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2.5 text-cream/80 transition-all hover:scale-110 hover:bg-cream/10 hover:text-white"
              >
                <Github className="size-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 text-cream/80 transition-all hover:scale-110 hover:bg-cream/10 hover:text-white"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {[
              {
                icon: GraduationCap,
                label: "Currently",
                value: latestEducation.detail,
              },
              {
                icon: Briefcase,
                label: "Experience",
                value: `${experience.length} internships`,
              },
              {
                icon: BookMarked,
                label: "Research",
                value: "Published at IEEE",
              },
              { icon: MapPin, label: "Based in", value: site.location },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl border border-cream/10 bg-espresso-light p-5 transition-all duration-300 hover:-translate-y-1 hover:border-clay"
              >
                <stat.icon className="size-6 text-clay-light transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-cream/50">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-cream/90">
                  {stat.value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Skills marquee ---------- */}
      <div className="overflow-hidden border-y border-espresso/15 bg-clay py-4">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white"
            >
              <span className="flex items-center gap-2.5">
                <SkillIcon name={skill} className="size-4" />
                {skill}
              </span>
              <span className="text-cream/70">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- Featured projects ---------- */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso sm:text-4xl">
                Featured work
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-clay" />
            </div>
            <Button asChild variant="outline">
              <Link to="/projects">
                All projects <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-clay hover:shadow-xl hover:shadow-clay/15">
                  {project.image ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={asset(project.image)}
                        alt={project.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-clay/30 via-sand to-cream font-display text-6xl text-clay/50 transition-colors duration-300 group-hover:text-clay">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github /> Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild variant="accent" size="sm">
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            <ExternalLink /> Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Published research banner ---------- */}
      {publications.length > 0 && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            {publications.map((pub) => (
              <Reveal key={pub.link}>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-espresso via-espresso-light to-clay/70 p-8 text-cream shadow-xl sm:p-10">
                  <BookMarked className="pointer-events-none absolute -right-6 -top-8 size-44 rotate-12 text-cream/5" />
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-clay-light">
                    <BookMarked className="size-4" /> Published research
                  </p>
                  <h3 className="mt-3 max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">
                    {pub.venue} · {pub.year}
                  </p>
                  {pub.summary && (
                    <p className="mt-3 max-w-2xl text-sm text-cream/80">
                      {pub.summary}
                    </p>
                  )}
                  <Button asChild variant="accent" className="mt-6">
                    <a href={pub.link} target="_blank" rel="noreferrer">
                      Read on IEEE Xplore <ExternalLink />
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Journey snapshot ---------- */}
      <section className="bg-sand/60 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap className="size-7 text-clay" />
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                The journey so far
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">
              {latestEducation.detail} at {latestEducation.institution},{" "}
              {latestEducation.place}.
            </p>

            {/* Internships, compact */}
            <div className="mt-6 space-y-3">
              {experience.map((job) => (
                <div key={`${job.company}-${job.role}`} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-clay/15 text-clay">
                    <Briefcase className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {job.role} · {job.company}
                    </p>
                    <p className="text-xs text-muted-foreground">{job.period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/experience">
                  Experience <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/education">
                  Education & achievements <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-4">
            {achievements.slice(0, 2).map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-4 rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-x-1 hover:border-clay"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-clay/15 text-clay">
                  <Trophy className="size-5" />
                </span>
                <div>
                  <p className="font-semibold leading-snug">{a.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.date}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact CTA ---------- */}
      <section className="px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">
            Let's build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to internships, collaborations, and interesting problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact page <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
