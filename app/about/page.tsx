import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import ImageRevealMask from "@/components/motion/ImageRevealMask";
import BookButton from "@/components/BookButton";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumière Salon & Spa was built on a simple idea — that looking after yourself should feel calm, unhurried and whole. Meet the studio behind the quiet.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Unhurried by design",
    body: "We schedule with room to breathe. No double-booking, no rushing you out of the chair — the calm is built into the diary.",
  },
  {
    title: "One roof, every discipline",
    body: "Hair, nails, skin and body under a single roof, so caring for yourself fits into an afternoon instead of a month.",
  },
  {
    title: "Skilled, attentive hands",
    body: "Every Lumière practitioner is trained, certified and chosen for how they listen — not just how they finish.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title="A studio built around the idea of calm."
        image={siteConfig.pageHeroes.about}
        intro="Lumière began with a feeling — that a salon visit could leave you lighter, not more tired."
      />

      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell grid gap-14 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <ImageRevealMask
              src="/section-showcase-3.jpg"
              alt="A tranquil treatment room at Lumière"
              aspectClass="aspect-[4/5]"
              direction="bottom"
              className="overflow-hidden rounded-[1.6rem]"
            />
          </div>
          <div className="md:col-span-6">
            <FadeUp>
              <p className="eyebrow">Why Lumière exists</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(28px,3.8vw,46px)] font-light leading-[1.18] text-ink">
                We wanted one place to feel cared for — properly.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="mt-6 space-y-5 leading-relaxed text-[color:var(--body)]">
                <p>
                  For years, looking after yourself meant juggling three salons and four
                  diaries. A haircut here, a facial there, a massage squeezed in somewhere
                  else. By the time you got to all of it, you needed it all over again.
                </p>
                <p>
                  Lumière folds it into one calm studio. Hair, nails, skin, body and grooming,
                  practised by people who care as much about the quiet as the craft. We keep
                  the room soft, the schedule generous and the conversation real.
                </p>
                <p>
                  We don't have a single flagship address — Lumière works with trusted partner
                  salons nationwide, so the same unhurried standard travels with the name.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--bg-secondary)]">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow">What we hold to</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(28px,4vw,48px)] font-light leading-tight text-ink">
              Three things we never rush.
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-[1.3rem] border border-ink/10 bg-[color:var(--card)] p-7">
                  <span className="font-mono text-xs tracking-[0.2em] text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-light text-ink">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-[color:var(--body)]">{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cocoa">
        <div className="shell max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow !text-sage">Come and see</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mx-auto mt-6 max-w-[18ch] font-display text-[clamp(30px,5vw,62px)] font-light leading-[1.08] text-[color:var(--on-deep)]">
              The calm is easier felt than described.
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
