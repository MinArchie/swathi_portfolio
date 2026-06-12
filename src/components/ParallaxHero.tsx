import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * The hand-drawn parallax hero. The SCROLL layer speeds and
 * breakpoints are kept exactly as authored in the original
 * script.js. On top of that, the scene is "alive":
 *  - layers drift subtly toward the cursor (depth-based)
 *  - birds bob, the sun glows, the sky slowly breathes
 *  - fireflies float up through the valley
 *  - the title animates in letter by letter
 */

type LayerId =
  | "sky"
  | "sun"
  | "mountains"
  | "valley1"
  | "valley2"
  | "birds"
  | "valley3"
  | "valley4";

/** Cursor-parallax depth (px of drift at screen edge) per layer. */
const MOUSE_DEPTH: Record<LayerId, number> = {
  sky: 6,
  sun: 10,
  mountains: 14,
  valley1: 18,
  valley2: 22,
  birds: 30,
  valley3: 26,
  valley4: 32,
};

/**
 * Static vertical nudge per layer (independent of the scroll
 * animation). vw units scale with the artwork's width.
 * valley4 = the deer + foreground ground.
 */
const STATIC_TOP: Partial<Record<LayerId, string>> = {
  valley4: "-7vw",
};

/** Idle "alive" animation applied to the image inside each layer. */
const IDLE: Partial<Record<LayerId, string>> = {
  sky: "animate-sky-breathe",
  sun: "animate-sun-breathe",
  birds: "animate-bob",
};

const BACK_LAYERS: LayerId[] = ["sky", "sun", "mountains", "valley1", "valley2", "birds"];
const FRONT_LAYERS: LayerId[] = ["valley3", "valley4"];

/**
 * Entrance choreography: sky, sun and birds are present from the
 * start (with the fireflies and the title), then the landscape
 * rises into place back-to-front, as if the valley is waking up.
 * Layers without an entry here just fade in immediately.
 */
const ENTRANCE: Partial<Record<LayerId, { delay: number; y: number }>> = {
  mountains: { delay: 1.2, y: 45 },
  valley1: { delay: 1.35, y: 60 },
  valley2: { delay: 1.5, y: 75 },
  valley3: { delay: 1.65, y: 90 },
  valley4: { delay: 1.8, y: 110 },
};

/** Original scroll offsets from script.js — do not change lightly. */
function scrollOffset(id: LayerId, value: number, width: number) {
  if (width > 600) {
    switch (id) {
      case "sun": return { x: 0, y: value * 0.5 };
      case "valley3": return { x: 0, y: value * 0.1 };
      case "valley2": return { x: 0, y: value * 0.2 };
      case "valley1": return { x: 0, y: value * 0.2 };
      case "sky": return { x: 0, y: value * 0.2 };
      case "birds": return { x: value * -0.5, y: 0 };
      default: return { x: 0, y: 0 };
    }
  }
  if (width > 449) {
    switch (id) {
      case "sun": return { x: 0, y: value * 0.5 };
      case "valley3":
      case "valley2":
      case "valley1": return { x: 0, y: value * 0.3 };
      case "sky": return { x: 0, y: value * 0.2 };
      case "birds": return { x: value * -0.5, y: 0 };
      default: return { x: 0, y: 0 };
    }
  }
  // Tiny screens: only the sun moves (as in the original)
  return id === "sun" ? { x: 0, y: value * 0.5 } : { x: 0, y: 0 };
}

const FIREFLIES = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 83 + 11) % 100}%`,
  top: `${28 + ((i * 37) % 45)}%`,
  size: 3 + (i % 3) * 2,
  delay: `${(i * 1.3) % 9}s`,
  duration: `${8 + (i % 5) * 2}s`,
}));

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotate: 6 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

export default function ParallaxHero() {
  const layerRefs = useRef<Partial<Record<LayerId, HTMLDivElement | null>>>({});
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouse = { tx: 0, ty: 0, x: 0, y: 0 };
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2; // -1 .. 1
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      // ease the cursor drift so layers glide instead of snapping
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      const value = window.scrollY;
      const width = window.innerWidth;

      for (const id of [...BACK_LAYERS, ...FRONT_LAYERS]) {
        const el = layerRefs.current[id];
        if (!el) continue;
        const s = scrollOffset(id, value, width);
        const mx = width > 600 ? mouse.x * MOUSE_DEPTH[id] : 0;
        const my = width > 600 ? mouse.y * MOUSE_DEPTH[id] * 0.5 : 0;
        el.style.transform = `translate(${s.x + mx}px, ${s.y + my}px)`;
      }

      if (textRef.current) {
        // original behaviour: the title sinks behind the valleys
        textRef.current.style.marginTop = `${value * 2.5}px`;
        textRef.current.style.transform = `translate(${mouse.x * 12}px, ${mouse.y * 6}px)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollDown = () =>
    document.getElementById("snapshot")?.scrollIntoView({ behavior: "smooth" });

  const renderLayer = (id: LayerId) => {
    const entrance = ENTRANCE[id];
    return (
      <div
        key={id}
        ref={(el) => {
          layerRefs.current[id] = el;
        }}
        style={{ top: STATIC_TOP[id] }}
        /* 40px side / 20px top bleed so the cursor drift (max ±32px)
           never exposes a layer's edge. Mobile (no cursor) needs none. */
        className="pointer-events-none absolute left-[-40px] top-[-20px] w-[calc(100%+80px)] will-change-transform max-[600px]:left-0 max-[600px]:top-0 max-[600px]:w-[250%]"
      >
        {/* Entrance lives on this inner wrapper so it never fights
            the rAF scroll/cursor transform on the outer div. */}
        <motion.div
          initial={entrance ? { opacity: 0, y: entrance.y } : { opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            entrance
              ? { delay: entrance.delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0.8 }
          }
        >
          <img
            src={asset(`images/parallax/${id}.png`)}
            alt=""
            className={`w-full ${IDLE[id] ?? ""}`}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative flex h-[130vh] items-center justify-center overflow-hidden bg-espresso max-[600px]:h-[65vh]">
      {/* DOM order matters: later layers are drawn on top, so the
          title sinks behind the front valleys as you scroll. */}
      {BACK_LAYERS.map(renderLayer)}

      {/* Fireflies drifting up through the scene */}
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          className="animate-firefly pointer-events-none absolute rounded-full bg-amber-100/90 blur-[1px]"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.duration,
            boxShadow: "0 0 8px 2px rgba(255, 226, 160, 0.55)",
          }}
        />
      ))}

      {/* Title block (sinks behind the valleys on scroll) */}
      <div ref={textRef} className="absolute top-[13vh] px-4 text-center max-[600px]:top-[9vh]">
        <motion.h1
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.04, delayChildren: 0.25 }}
          aria-label={site.name}
          className="font-display text-[3rem] font-semibold leading-none text-espresso [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)] sm:text-[5rem] lg:text-[6.5rem]"
        >
          {site.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-espresso/80 sm:text-base"
        >
          {site.tagline}
        </motion.p>
      </div>

      {FRONT_LAYERS.map(renderLayer)}

      {/* Eye-catching scroll cue */}
      <motion.button
        onClick={scrollDown}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.8 }}
        className="group absolute top-[calc(100svh-8.5rem)] z-20 flex cursor-pointer flex-col items-center gap-3 max-[600px]:top-auto max-[600px]:bottom-4"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-cream/90 transition-colors group-hover:text-white">
          scroll
        </span>
        <span className="relative flex h-11 w-7 items-start justify-center rounded-full border-2 border-cream/80 p-1.5 transition-colors group-hover:border-white">
          <span className="animate-wheel size-1.5 rounded-full bg-cream" />
          {/* soft pulsing halo */}
          <span className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-clay/40 blur-md" />
        </span>
      </motion.button>
    </section>
  );
}
