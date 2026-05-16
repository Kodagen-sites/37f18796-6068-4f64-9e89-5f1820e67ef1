"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import NumberCounter from "@/components/motion/NumberCounter";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import Marquee from "@/components/motion/Marquee";
import ImageRevealMask from "@/components/motion/ImageRevealMask";
import StickyScrollSection from "@/components/motion/StickyScrollSection";
import CanvasAtmosphere from "@/components/motion/CanvasAtmosphere";
import ServiceCard from "@/components/ServiceCard";
import BookButton from "@/components/BookButton";
import { siteConfig } from "@/content/site-config";

export default function HomeSections() {
  const { valueProp, services, showcase, process, stats, testimonials, cta, contact } =
    siteConfig;

  return (
    <>
      {/* 2 — VALUE PROP (T7 oversized type) */}
      <section className="section-pad bg-[color:var(--bg-secondary)]">
        <div className="shell max-w-4xl">
          <FadeUp>
            <p className="eyebrow">{valueProp.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mt-7 font-display text-[clamp(28px,4.4vw,52px)] font-light leading-[1.18] text-ink"
          >
            {valueProp.statement}
          </TextReveal>
        </div>
      </section>

      {/* Marquee chapter transition */}
      <div className="border-y border-ink/10 bg-[color:var(--bg-primary)] py-5">
        <Marquee speed={34} className="font-display text-xl text-sage-deep">
          {["Hair Styling", "Nail Care", "Massage Therapy", "Facials & Skincare", "Waxing & Grooming", "Spa Rituals"].map(
            (w) => (
              <span key={w} className="mx-8 inline-flex items-center gap-8">
                {w}
                <span className="text-terracotta">✦</span>
              </span>
            ),
          )}
        </Marquee>
      </div>

      {/* 3 — SERVICES (T6 cards) */}
      <section id="services" className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <FadeUp>
              <p className="eyebrow">What we do</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,56px)] font-light leading-tight text-ink">
                Five disciplines, one unhurried roof.
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {services.map((service) => (
              <CardTiltLayer key={service.slug} intensity={0.2}>
                <ServiceCard service={service} />
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 4 — SHOWCASE (T5 image mosaic) */}
      <section className="section-pad bg-[color:var(--bg-tertiary)]">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <FadeUp>
              <p className="eyebrow">{showcase.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,56px)] font-light leading-tight text-ink">
                {showcase.heading}
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            <div className="md:col-span-7">
              <ImageRevealMask
                src={showcase.images[0].src}
                alt={showcase.images[0].alt}
                aspectClass="aspect-[4/3]"
                direction="bottom"
                className="overflow-hidden rounded-[1.4rem]"
              />
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.12} className="h-full">
                <img
                  src={showcase.images[1].src}
                  alt={showcase.images[1].alt}
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2} className="h-full">
                <img
                  src={showcase.images[2].src}
                  alt={showcase.images[2].alt}
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-7">
              <FadeUp delay={0.28} className="h-full">
                <img
                  src={showcase.images[3].src}
                  alt={showcase.images[3].alt}
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — TYPE STATEMENT (T7, deep tone) */}
      <section className="section-pad bg-cocoa">
        <div className="shell max-w-5xl text-center">
          <TextReveal
            as="h2"
            className="font-display text-[clamp(30px,5.2vw,68px)] font-light italic leading-[1.16] text-[color:var(--on-deep)]"
          >
            {siteConfig.typeStatement}
          </TextReveal>
        </div>
      </section>

      {/* 6 — PROCESS (T15 pinned split-scroll) */}
      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <FadeUp>
              <p className="eyebrow">{process.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,56px)] font-light leading-tight text-ink">
                {process.heading}
              </h2>
            </FadeUp>
          </div>
          <StickyScrollSection
            stickyOffset="top-28"
            sticky={
              <div className="overflow-hidden rounded-[1.6rem] border border-ink/10">
                <img
                  src={process.image}
                  alt="A calm hallway leading into a Lumière treatment room"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            }
            scrolling={
              <div className="flex flex-col gap-7">
                {process.steps.map((step, i) => (
                  <FadeUp key={step.title} delay={0.04}>
                    <div className="rounded-[1.3rem] border border-ink/10 bg-[color:var(--card)] p-7">
                      <span className="font-mono text-xs tracking-[0.2em] text-terracotta">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-light text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-[color:var(--body)]">
                        {step.body}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* 8 — STATS (T13 counters) */}
      <section className="section-pad bg-[color:var(--bg-secondary)]">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow text-center">{stats.eyebrow}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-5 text-center font-display text-[clamp(28px,4.2vw,50px)] font-light text-ink">
              {stats.heading}
            </h2>
          </FadeUp>
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.items.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08} className="text-center">
                <div className="font-display text-[clamp(40px,6vw,72px)] font-light text-sage-deep">
                  <NumberCounter to={stat.value} suffix={stat.suffix} formatThousands />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--body)]">
                  {stat.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — TESTIMONIALS (T12 flow) */}
      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell">
          <div className="mb-12 max-w-2xl">
            <FadeUp>
              <p className="eyebrow">{testimonials.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,56px)] font-light leading-tight text-ink">
                {testimonials.heading}
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            staggerDelay={0.12}
          >
            {testimonials.items.map((t) => (
              <figure
                key={t.author}
                className="flex h-full flex-col rounded-[1.3rem] border border-ink/10 bg-[color:var(--card)] p-7"
              >
                <span className="font-display text-4xl leading-none text-sage">&ldquo;</span>
                <blockquote className="mt-3 flex-1 font-display text-lg font-light italic leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-medium text-ink">{t.author}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 10 — CTA (T7 + T11 canvas atmosphere) */}
      <section className="relative section-pad overflow-hidden bg-cocoa">
        <CanvasAtmosphere mode="drift" />
        <div className="shell relative z-10 max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow !text-sage">{cta.eyebrow}</p>
          </FadeUp>
          <TextReveal
            as="h2"
            className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(34px,5.6vw,72px)] font-light leading-[1.06] text-[color:var(--on-deep)]"
          >
            {cta.heading.join(" ")}
          </TextReveal>
          <FadeUp delay={0.16}>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-[color:var(--on-deep-muted)]">
              {cta.body}
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-9 flex justify-center">
              <BookButton variant="light" label={cta.label} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 11 — CONTACT teaser */}
      <section className="section-pad bg-[color:var(--bg-tertiary)]">
        <div className="shell grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <FadeUp>
              <p className="eyebrow">{contact.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(30px,4.6vw,54px)] font-light leading-tight text-ink">
                {contact.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-5 max-w-md leading-relaxed text-[color:var(--body)]">
                {contact.intro}
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-sage-deep transition-colors hover:text-terracotta"
              >
                Full contact details &amp; map →
              </Link>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="rounded-[1.4rem] border border-ink/10 bg-[color:var(--card)] p-8">
              <ul className="space-y-5">
                <ContactRow icon={<MapPin size={18} />} label="Studio">
                  {contact.address}
                </ContactRow>
                <ContactRow icon={<Phone size={18} />} label="Call">
                  {contact.phone}
                </ContactRow>
                <ContactRow icon={<Mail size={18} />} label="Email">
                  {contact.email}
                </ContactRow>
                <ContactRow icon={<Clock size={18} />} label="Hours">
                  {contact.hours.map((h) => `${h.day} ${h.time}`).join(" · ")}
                </ContactRow>
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 text-sage-deep">{icon}</span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          {label}
        </p>
        <p className="mt-1 text-ink">{children}</p>
      </div>
    </li>
  );
}
