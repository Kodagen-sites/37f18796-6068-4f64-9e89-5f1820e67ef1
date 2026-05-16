import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import ContactForm from "@/components/ContactForm";
import { SocialLinks } from "@/components/social-icons";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumière Salon & Spa. Send us a message, find our hours, or use the booking bar to reserve your appointment in seconds.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { contact, socials } = siteConfig;
  return (
    <main>
      <PageHero
        eyebrow={contact.eyebrow}
        title="Let's find a time that feels easy."
        image={siteConfig.pageHeroes.contact}
        intro={contact.intro}
      />

      {/* CT4 — split photo + form */}
      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <FadeUp>
              <p className="eyebrow">Reach us</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(28px,3.6vw,44px)] font-light leading-tight text-ink">
                {contact.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <img
                src="/section-about.jpg"
                alt="A warm corner of the Lumière studio"
                className="mt-7 w-full rounded-[1.4rem] object-cover"
              />
            </FadeUp>
            <FadeUp delay={0.22}>
              <ul className="mt-7 space-y-5">
                <Detail icon={<MapPin size={18} />} label="Studio">
                  {contact.address}
                  <br />
                  <span className="text-[color:var(--muted)]">{contact.location}</span>
                </Detail>
                <Detail icon={<Phone size={18} />} label="Call">
                  <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-sage-deep">
                    {contact.phone}
                  </a>
                </Detail>
                <Detail icon={<Mail size={18} />} label="Email">
                  <a href={`mailto:${contact.email}`} className="hover:text-sage-deep">
                    {contact.email}
                  </a>
                </Detail>
                <Detail icon={<Clock size={18} />} label="Hours">
                  {contact.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day} — {h.time}
                    </span>
                  ))}
                </Detail>
              </ul>
            </FadeUp>
            <FadeUp delay={0.28}>
              <div className="mt-7 flex items-center gap-4 text-ink">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Follow
                </span>
                <SocialLinks socials={socials} />
              </div>
            </FadeUp>
          </div>

          <div className="md:col-span-7">
            <FadeUp delay={0.12}>
              <ContactForm />
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-5 text-center text-sm text-[color:var(--muted)]">
                Prefer to book straight away? Use the booking bar at the foot of the page.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}

function Detail({
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
        <p className="mt-1 leading-relaxed text-ink">{children}</p>
      </div>
    </li>
  );
}
