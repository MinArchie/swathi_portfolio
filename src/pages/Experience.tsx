import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Flag, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

/**
 * Experience as a hiking trail: a dashed path with numbered
 * markers, and each job as a ticket-stub card zigzagging down
 * the page. The trail ends with a flag and a recruiter CTA.
 */
export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
          The trail so far
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Experience
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Every stop taught me something. Follow the trail.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* the trail */}
        <div className="absolute bottom-24 left-6 top-0 border-l-2 border-dashed border-clay/40 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-14">
          {experience.map((job, i) => {
            const onLeft = i % 2 === 0;
            return (
              <div
                key={`${job.company}-${job.role}`}
                className="relative md:grid md:grid-cols-[1fr_5rem_1fr] md:items-center"
              >
                {/* trail marker */}
                <span className="absolute left-6 top-7 z-10 flex size-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-clay bg-cream font-display text-lg font-bold text-clay shadow-md md:relative md:left-auto md:top-auto md:col-start-2 md:row-start-1 md:translate-x-0 md:justify-self-center">
                  {i + 1}
                </span>

                {/* ticket-stub card */}
                <motion.div
                  initial={{ opacity: 0, x: onLeft ? -60 : 60, rotate: onLeft ? -2 : 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: onLeft ? -1.2 : 1.2 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`relative ml-14 rounded-2xl border bg-card shadow-md transition-colors duration-300 hover:border-clay hover:shadow-xl hover:shadow-clay/15 md:ml-0 md:row-start-1 ${
                    onLeft ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
                  <div className="flex">
                    {/* date stub */}
                    <div className="flex w-10 shrink-0 items-center justify-center rounded-l-2xl border-r-2 border-dashed border-clay/30 bg-clay/10 py-6 sm:w-14">
                      <span className="rotate-180 whitespace-nowrap text-[0.65rem] font-bold uppercase tracking-[0.2em] text-clay [writing-mode:vertical-rl]">
                        {job.period}
                      </span>
                    </div>

                    {/* perforation notches */}
                    <span className="absolute -top-2 left-10 size-4 -translate-x-1/2 rounded-full bg-background sm:left-14" />
                    <span className="absolute -bottom-2 left-10 size-4 -translate-x-1/2 rounded-full bg-background sm:left-14" />

                    {/* details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="font-display text-xl font-semibold">
                            {job.role}
                          </h2>
                          <p className="mt-0.5 font-medium text-clay">
                            {job.company}
                          </p>
                        </div>
                        <Briefcase className="size-5 shrink-0 text-clay/50" />
                      </div>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="size-3.5" /> {job.location}
                      </p>

                      <p className="mt-3 text-sm text-foreground/85">
                        {job.summary}
                      </p>

                      {job.highlights && (
                        <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                          {job.highlights.map((line) => (
                            <li key={line} className="flex items-start gap-2.5">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      )}

                      {job.tags && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* end of the trail */}
        <Reveal className="relative mt-16 flex flex-col items-center text-center">
          <span className="z-10 flex size-12 items-center justify-center rounded-full bg-clay text-white shadow-lg shadow-clay/30">
            <Flag className="size-5" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
            Next stop — your team?
          </h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            I'm open to internships and interesting problems.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">
              Get in touch <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
