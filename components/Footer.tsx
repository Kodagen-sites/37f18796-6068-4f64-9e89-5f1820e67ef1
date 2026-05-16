import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";
import BookButton from "@/components/BookButton";
import { NAV_LINKS } from "@/components/headers/nav-links";

/**
 * Footer — FT5 "Parting Shot": a final oversized CTA on deep cocoa,
 * then a four-block info row, social, legal and a live-year copyright.
 * Bottom padding clears the fixed B4 booking bar.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { company, contact, socials, legal } = siteConfig;

  return (
    <footer className="bg-cocoa text-[color:var(--on-deep)]">
      {/* Parting-shot CTA */}
      <div className="shell border-b border-white/10 py-20 text-center md:py-28">
        <p className="eyebrow !text-sage">Before you go</p>
        <h2 className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(34px,5.5vw,68px)] font-light leading-[1.04] text-[color:var(--on-deep)]">
          Your week could use an afternoon at Lumière.
        </h2>
        <div className="mt-9 flex justify-center">
          <BookButton variant="light" />
        </div>
      </div>

      {/* Info row */}
      <div className="shell grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-xl text-[color:var(--on-deep)]">
            {company.name} <span className="text-sage">· Salon &amp; Spa</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--on-deep-muted)]">
            {siteConfig.footer.brandStatement}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow !text-[color:var(--on-deep-muted)]">Explore</p>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--on-deep-muted)] transition-colors hover:text-sage"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow !text-[color:var(--on-deep-muted)]">Visit</p>
          <p className="text-sm text-[color:var(--on-deep-muted)]">{contact.address}</p>
          <p className="text-sm text-[color:var(--on-deep-muted)]">{contact.location}</p>
          {siteConfig.contact.hours.map((h) => (
            <p key={h.day} className="text-sm text-[color:var(--on-deep-muted)]">
              {h.day} — {h.time}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="eyebrow !text-[color:var(--on-deep-muted)]">Contact</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-[color:var(--on-deep-muted)] transition-colors hover:text-sage"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className="text-sm text-[color:var(--on-deep-muted)] transition-colors hover:text-sage"
          >
            {contact.phone}
          </a>
          <SocialLinks socials={socials} className="mt-3 text-[color:var(--on-deep)]" />
        </div>
      </div>

      {/* Legal + copyright */}
      <div className="shell flex flex-col gap-4 border-t border-white/10 py-8 pb-28 text-xs text-[color:var(--on-deep-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {company.fullName}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-sage">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
