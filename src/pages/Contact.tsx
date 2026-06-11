import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/utils";
import { site } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  // GitHub Pages has no server, so the form opens the visitor's
  // email app with everything pre-filled. See CONTENT_GUIDE.md
  // for swapping this to Formspree if you want real form delivery.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    // Compact one-screen layout: everything fits without scrolling
    // on desktop (vertically centered in the space under the navbar).
    <section className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-8 pt-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay sm:text-sm">
          Get in touch
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-5xl">
          Let's talk.
        </h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-6">
        <div className="grid overflow-hidden rounded-[2rem] border shadow-xl lg:grid-cols-2">
          {/* Left: direct contact panel */}
          <div className="relative bg-espresso p-7 text-cream sm:p-9">
            <img
              src={asset("images/random-lines.svg")}
              alt=""
              className="pointer-events-none absolute right-5 top-5 w-24 opacity-30"
            />
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              Reach me directly
            </h2>
            <p className="mt-2 max-w-sm text-sm text-cream/70">
              Internships, collaborations, or just a good idea — my inbox is
              open.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3.5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-clay/25 text-clay-light transition-all duration-300 group-hover:scale-110 group-hover:bg-clay group-hover:text-white">
                  <Mail className="size-4.5" />
                </span>
                <span className="break-all text-sm font-medium underline-offset-4 group-hover:underline sm:text-base">
                  {site.email}
                </span>
              </a>
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-clay/25 text-clay-light">
                  <Phone className="size-4.5" />
                </span>
                <span className="text-sm font-medium sm:text-base">{site.phone}</span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-clay/25 text-clay-light">
                  <MapPin className="size-4.5" />
                </span>
                <span className="text-sm font-medium sm:text-base">{site.location}</span>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-cream/25 p-2.5 transition-all hover:scale-110 hover:border-clay hover:bg-clay"
              >
                <Github className="size-4.5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-cream/25 p-2.5 transition-all hover:scale-110 hover:border-clay hover:bg-clay"
              >
                <Linkedin className="size-4.5" />
              </a>
            </div>
          </div>

          {/* Right: message form */}
          <div className="bg-card p-7 sm:p-9">
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              Send a message
            </h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <Input
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
              <Textarea
                placeholder="Type your message…"
                rows={4}
                className="min-h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                <Send /> Send
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
