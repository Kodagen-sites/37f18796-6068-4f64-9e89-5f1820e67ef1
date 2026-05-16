import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import BookButton from "@/components/BookButton";
import { siteConfig } from "@/content/site-config";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@type": "BeautySalon", name: siteConfig.company.fullName },
    offers: { "@type": "Offer", price: service.startingFrom, priceCurrency: "USD" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={service.tagline}
        title={service.name}
        image={service.image}
        intro={service.description}
      />

      <section className="section-pad bg-[color:var(--bg-primary)]">
        <div className="shell grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <FadeUp>
              <p className="eyebrow">The treatment</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="mt-6 font-display text-[clamp(22px,2.6vw,30px)] font-light leading-[1.4] text-ink">
                {service.longDescription}
              </p>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="mt-9">
                <BookButton variant="dark" label={`Book ${service.name.toLowerCase()}`} />
              </div>
            </FadeUp>
          </div>

          <div className="md:col-span-5">
            <FadeUp delay={0.12}>
              <div className="rounded-[1.4rem] border border-ink/10 bg-[color:var(--card)] p-8">
                <p className="eyebrow">What's included</p>
                <ul className="mt-6 space-y-4">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-sage">
                        <Check size={18} />
                      </span>
                      <span className="text-[color:var(--body)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-ink/10 pt-5 font-mono text-sm text-[color:var(--muted)]">
                  Starting from{" "}
                  <span className="text-ink">{service.startingFrom}</span>
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--bg-secondary)]">
        <div className="shell">
          <FadeUp>
            <p className="eyebrow">Keep exploring</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-5 font-display text-[clamp(26px,3.6vw,42px)] font-light text-ink">
              The rest of the Lumière menu.
            </h2>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <FadeUp key={o.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${o.slug}`}
                  className="lift block h-full rounded-[1.2rem] border border-ink/10 bg-[color:var(--card)] p-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage-deep">
                    {o.tagline}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-light text-ink">{o.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--body)] line-clamp-2">
                    {o.description}
                  </p>
                  <span className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.16em] text-terracotta">
                    View →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
