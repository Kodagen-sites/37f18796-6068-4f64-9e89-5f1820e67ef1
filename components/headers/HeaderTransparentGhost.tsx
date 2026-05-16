"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useScrollState } from "./hooks";
import { openBooking } from "@/lib/booking-trigger";

/**
 * Header — Transparent Ghost (light-theme adaptation).
 * Transparent over the dark cinematic hero / page heroes; on scroll it
 * settles into a soft parchment bar. Premium, quiet, hospitality-grade.
 */
export default function HeaderTransparentGhost() {
  const scrolled = useScrollState(64);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid
            ? "bg-parchment/90 backdrop-blur-xl border-b border-ink/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-6">
          <Link
            href="/"
            className={`font-display text-base font-medium tracking-[0.04em] transition-colors ${
              solid ? "text-ink" : "text-parchment"
            }`}
          >
            {siteConfig.company.name}
            <span className={solid ? "text-sage" : "text-parchment/70"}> · Salon &amp; Spa</span>
          </Link>

          <nav
            className={`hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.22em] md:flex ${
              solid ? "text-ink/70" : "text-parchment/85"
            }`}
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    active
                      ? solid
                        ? "text-sage-deep"
                        : "text-parchment"
                      : "hover:text-sage"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openBooking}
              className={`hidden rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all md:inline-flex ${
                solid
                  ? "bg-ink text-parchment hover:bg-bark"
                  : "bg-parchment/95 text-ink hover:bg-parchment"
              }`}
            >
              Book an appointment
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`md:hidden ${solid ? "text-ink" : "text-parchment"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-parchment md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-base font-medium text-ink">
                {siteConfig.company.name} · Salon &amp; Spa
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-7 px-6 pt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl font-light text-ink transition-colors hover:text-sage"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + NAV_LINKS.length * 0.06 }}
              >
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openBooking();
                  }}
                  className="mt-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-parchment"
                >
                  Book an appointment
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
