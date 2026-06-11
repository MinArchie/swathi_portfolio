import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/utils";
import { projects } from "@/data/projects";

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

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-colors duration-300 hover:border-clay hover:shadow-xl hover:shadow-clay/15"
            >
              <div className="relative">
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
                {project.featured && (
                  <Badge variant="accent" className="absolute right-4 top-4 gap-1 shadow">
                    <Star className="size-3" /> Featured
                  </Badge>
                )}
              </div>

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
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
