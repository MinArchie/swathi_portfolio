import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/utils";
import { projects } from "@/data/projects";

/**
 * Editorial "case study" layout: each project is a full-width row
 * with the visual on alternating sides and a large index number.
 * Rows take their natural height, so short and long descriptions
 * both look intentional (no equal-height card whitespace).
 */
export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
          Things I've built
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A selection of what I've been working on. Code for everything is on{" "}
          <a
            href="https://github.com/MinArchie"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-clay underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-10">
        {projects.map((project, i) => {
          const number = String(i + 1).padStart(2, "0");
          const flipped = i % 2 === 1;

          return (
            <Reveal key={project.title}>
              <article className="group relative grid items-center gap-8 border-t border-espresso/15 py-16 md:grid-cols-2 md:gap-14">
                {/* Giant watermark index, anchored to the text side */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -top-2 select-none font-display text-[7rem] font-semibold leading-none text-clay/10 transition-colors duration-500 group-hover:text-clay/20 sm:text-[9rem] ${
                    flipped ? "left-0" : "right-0"
                  }`}
                >
                  {number}
                </span>

                {/* Visual */}
                <motion.div
                  whileHover={{ rotate: flipped ? 1 : -1, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={flipped ? "md:order-2" : ""}
                >
                  {project.image ? (
                    <div className="overflow-hidden rounded-3xl border shadow-lg">
                      <img
                        src={asset(project.image)}
                        alt={project.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-espresso via-espresso-light to-clay/70 shadow-lg"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(247,242,236,0.07) 1px, transparent 1px), linear-gradient(to bottom right, #241c1c, #382e2e, rgba(145,111,111,0.7))",
                        backgroundSize: "22px 22px, 100% 100%",
                      }}
                    >
                      <span className="font-display text-[6rem] font-semibold text-cream/15 transition-all duration-500 group-hover:scale-110 group-hover:text-cream/25 sm:text-[8rem]">
                        {project.title.charAt(0)}
                      </span>
                      <span className="absolute bottom-5 right-6 font-display text-xl text-clay-light/70">
                        {number}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Text — takes its natural height */}
                <div className="relative">
                  <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-clay">
                    {number}
                    {project.featured && (
                      <Badge variant="accent" className="gap-1">
                        <Star className="size-3" /> Featured
                      </Badge>
                    )}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {project.github && (
                      <Button asChild variant="outline">
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github /> Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild variant="accent">
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
