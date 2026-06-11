import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Recreates the original site's full-screen overlay transitions:
 * a dark panel covers the page, the new page swaps in underneath,
 * and the panel slides (or fades) away.
 *
 * Variants match the original transition-1..4 directions:
 *   fade   → transition-1 (Home)
 *   left   → transition-2 (slides in from the left)
 *   bottom → transition-3 (slides up from the bottom)
 *   right  → transition-4 (slides in from the right)
 */

type Variant = "fade" | "left" | "bottom" | "right";

const covered = { opacity: 1, x: "0%", y: "0%" };

const hidden: Record<Variant, Record<string, string | number>> = {
  fade: { opacity: 0, x: "0%", y: "0%" },
  left: { opacity: 1, x: "-100%", y: "0%" },
  bottom: { opacity: 1, x: "0%", y: "100%" },
  right: { opacity: 1, x: "100%", y: "0%" },
};

export default function PageTransition({
  variant,
  children,
}: {
  variant: Variant;
  children: ReactNode;
}) {
  // The overlay hides the swap, so jump to the top while covered.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {children}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[200] bg-espresso"
        initial={covered}
        animate={hidden[variant]}
        exit={covered}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </>
  );
}
