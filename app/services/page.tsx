import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CardTiltLayer from "@/components/motion/CardTiltLayer";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import BookButton from "@/components/BookButton";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hair styling, nail care, massage therapy, facials and skincare, waxing and grooming, plus signature half-day spa rituals — all at Lumière Salon & Spa.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title="Five disciplines, kept calm and kept careful."
        image={siteConfig.pageHeroes.services}
        intro="Every Lumière service shares the same idea — skilled hands, considered products, and a room that lets you slow down. Choose one, or fold several into a single unhurried visit."
      />

      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell">
          <StaggerChildren
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {siteConfig.services.map((service) => (
              <CardTiltLayer key={service.slug} intensity={0.2}>
                <ServiceCard service={service} />
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-pad bg-cocoa">
        <div className="shell max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow !text-sage">Ready when you are</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(30px,4.8vw,58px)] font-light leading-[1.1] text-[color:var(--on-deep)]">
              One appointment is all it takes to feel the difference.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div className="mt-9 flex justify-center">
              <BookButton variant="light" />
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
