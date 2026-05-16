"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCursorHighlight from "@/components/motion/GlassCursorHighlight";
import { resolveImage } from "@/lib/image-fallback";
import type { Service } from "@/content/site-config";

/**
 * ServiceCard — CV4 Liquid Glass, light-theme adaptation.
 * Frosted cream panel over the sage section background, hairline border,
 * cursor-tracked highlight, and a T4 parallax thumbnail (y 0% → -14%).
 */
export default function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-14%"]);

  const img = resolveImage({
    src: service.image,
    industry: "salon",
    keyword: service.name,
    brandColor: "#7c9070",
  });

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full"
      aria-label={`${service.name} — view details`}
    >
      <div
        ref={ref}
        className="relative h-full overflow-hidden rounded-[1.4rem] border border-ink/10 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_60px_-30px_rgba(45,36,24,0.4)]"
        style={{
          background: "rgba(255,251,245,0.66)",
          backdropFilter: "blur(14px) saturate(130%)",
          WebkitBackdropFilter: "blur(14px) saturate(130%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <GlassCursorHighlight accent="#7c9070" opacity={0.16} radius={300}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={img}
              alt={service.name}
              style={{ y }}
              className="absolute inset-x-0 -top-[8%] h-[120%] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(255,251,245,0.85)] to-transparent" />
          </div>

          <div className="p-7">
            <p className="eyebrow">{service.tagline}</p>
            <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ink">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--body)] line-clamp-3">
              {service.description}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-sage-deep transition-colors group-hover:text-terracotta">
                Explore →
              </span>
              <span className="font-mono text-xs text-[color:var(--muted)]">
                from {service.startingFrom}
              </span>
            </div>
          </div>
        </GlassCursorHighlight>
      </div>
    </Link>
  );
}
