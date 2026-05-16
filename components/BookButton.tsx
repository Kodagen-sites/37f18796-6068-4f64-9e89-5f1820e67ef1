"use client";

import MagneticButton from "@/components/motion/MagneticButton";
import { openBooking } from "@/lib/booking-trigger";

type Variant = "dark" | "light" | "sage" | "outline";

const STYLES: Record<Variant, string> = {
  dark: "bg-ink text-parchment hover:bg-bark",
  light: "bg-parchment text-ink hover:bg-white",
  sage: "bg-sage text-white hover:bg-sage-deep",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-parchment",
};

/**
 * BookButton — every "Book an appointment" CTA on the site.
 * Opens the always-on B4 sticky booking bar via openBooking().
 */
export default function BookButton({
  label = "Book an appointment",
  variant = "dark",
  className = "",
}: {
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <MagneticButton
      onClick={openBooking}
      ariaLabel={label}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${STYLES[variant]} ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </MagneticButton>
  );
}
