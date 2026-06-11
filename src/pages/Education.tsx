import { useEffect, useRef } from "react";
import { BookMarked, ChevronDown, ExternalLink, GraduationCap, MapPin, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { education } from "@/data/education";
import { achievements } from "@/data/achievements";
import { publications } from "@/data/publications";

export default function Education() {
  const achievementsRef = useRef<HTMLElement>(null);
  const gliding = useRef(false);

  // One wheel flick glides the page between the Education screen
  // and the Achievements section (and back), instead of free
  // scrolling through the boundary. Touch scrolling is untouched.
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const target = achievementsRef.current;
      if (!target) return;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      if (gliding.current) {
        // don't let extra wheel ticks interrupt the glide
        e.preventDefault();
        return;
      }

      const glide = (top: number) => {
        e.preventDefault();
        gliding.current = true;
        window.scrollTo({ top, behavior: "smooth" });
        window.setTimeout(() => (gliding.current = false), 900);
      };

      if (e.deltaY > 0 && window.scrollY < targetTop - 10) {
        glide(targetTop); // down from the education screen
      } else if (e.deltaY < 0 && window.scrollY > 0 && window.scrollY <= targetTop + 10) {
        glide(0); // up from the top of achievements
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const scrollToAchievements = () =>
    achievementsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ---------- Education: fills the first screen, vertically centered ---------- */}
      <section className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
            The journey
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Education
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {education.map((entry, i) => (
            <Reveal key={`${entry.year}-${entry.detail}`} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-clay hover:shadow-xl hover:shadow-clay/15">
                {/* oversized year watermark */}
                <span className="pointer-events-none absolute -right-3 -top-7 font-display text-[6.5rem] font-bold leading-none text-clay/10 transition-colors duration-300 group-hover:text-clay/20">
                  {entry.year.slice(0, 4)}
                </span>

                <span className="flex size-12 items-center justify-center rounded-2xl bg-clay/15 text-clay transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <GraduationCap className="size-6" />
                </span>

                <Badge variant="accent" className="mt-5">
                  {entry.year}
                </Badge>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                  {entry.institution}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" /> {entry.place}
                </p>
                <p className="mt-4 font-medium text-foreground/85">{entry.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quiet guide to the next section */}
        <button
          onClick={scrollToAchievements}
          className="group absolute bottom-7 right-6 flex cursor-pointer items-center gap-2 text-muted-foreground/70 transition-colors hover:text-clay"
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
            Achievements
          </span>
          <ChevronDown className="size-4 animate-bounce" />
        </button>
      </section>

      {/* ---------- Achievements: inverted color scheme ---------- */}
      <section ref={achievementsRef} className="bg-espresso px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-clay/25 text-clay-light">
              <Trophy className="size-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-light">
                Wins I'm proud of
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                Achievements
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 space-y-5">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="group flex flex-col gap-5 rounded-3xl border border-cream/10 bg-espresso-light p-7 transition-all duration-300 hover:border-clay hover:shadow-lg hover:shadow-clay/10 sm:flex-row sm:items-center">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-clay/25 text-clay-light transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                    <Trophy className="size-7" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-cream sm:text-xl">
                        {item.title}
                      </h3>
                      <Badge variant="outline-light">{item.date}</Badge>
                    </div>
                    <p className="mt-1.5 text-sm text-cream/70">
                      {item.description}
                    </p>
                    {item.highlights && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.highlights.map((line) => (
                          <Badge
                            key={line}
                            className="border-transparent bg-cream/10 text-cream/90"
                          >
                            {line}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ---------- Research / publications ---------- */}
          {publications.length > 0 && (
            <>
              <Reveal className="mt-20 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-clay/25 text-clay-light">
                  <BookMarked className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-light">
                    Peer-reviewed work
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                    Research
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 space-y-5">
                {publications.map((pub, i) => (
                  <Reveal key={pub.link} delay={i * 0.08}>
                    <div className="group rounded-3xl border border-cream/10 bg-espresso-light p-7 transition-all duration-300 hover:border-clay hover:shadow-lg hover:shadow-clay/10 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-semibold text-cream sm:text-xl">
                          {pub.title}
                        </h3>
                        <Badge variant="outline-light">{pub.year}</Badge>
                      </div>
                      <p className="mt-1.5 text-sm text-cream/70">{pub.venue}</p>
                      {pub.summary && (
                        <p className="mt-3 text-sm text-cream/80">{pub.summary}</p>
                      )}
                      <Button asChild variant="accent" size="sm" className="mt-5">
                        <a href={pub.link} target="_blank" rel="noreferrer">
                          Read on IEEE Xplore <ExternalLink />
                        </a>
                      </Button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
