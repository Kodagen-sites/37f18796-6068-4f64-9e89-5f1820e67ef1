/**
 * Lumière Salon & Spa — single source of truth for copy, services, contact.
 *
 * Generation fingerprint (Variation Manifest, Step 2.5):
 *   archetype G · style S3 Soft Pastel Wellness (fresh-sage variant)
 *   header transparent-ghost · card CV4 liquid-glass · hero-overlay HO1
 *   booking B4 sticky-bar · voice V3 organic · hero T2 scroll-scrub
 */

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  includes: string[];
  startingFrom: string;
};

export const siteConfig = {
  company: {
    name: "Lumière",
    fullName: "Lumière Salon & Spa",
    tagline: "A full-service salon and spa, kept calm.",
  },

  industry: "salon",
  bookingVariant: "B4" as const,
  templateId: "salon-v1",

  seo: {
    siteUrl: "https://lumiere-salon-spa.com",
    title: "Lumière Salon & Spa — Hair, Nails, Massage, Facials & Grooming",
    description:
      "Lumière is a full-service salon and spa: hair styling, nail care, massage therapy, facials and grooming, delivered in a calm, light-filled space. Book your appointment.",
    locale: "en_US",
    twitter: "@lumierespa",
  },

  hero: {
    eyebrow: "Salon & Spa",
    h1: ["A quieter kind", "of beautiful."],
    subline:
      "Hair, nails, skin and body — the full ritual, under one calm roof.",
    body:
      "Lumière brings every part of looking and feeling well into a single, unhurried space. No rush, no noise — just careful hands and a room that lets you exhale.",
    ctaLabel: "Book an appointment",
    ctaHref: "#book",
  },

  valueProp: {
    eyebrow: "The Lumière idea",
    statement:
      "Five disciplines. One unhurried room. Everything your week asks of you, handled in an afternoon.",
  },

  services: [
    {
      slug: "hair-styling",
      name: "Hair Styling",
      tagline: "Cuts, colour and care",
      description:
        "Precision cuts, lived-in colour and restorative treatments — shaped to how you actually wear your hair.",
      longDescription:
        "Our stylists start with a proper conversation, not a catalogue. Every cut is built around your hair's natural fall and your weekly routine, so it keeps its shape long after you leave the chair. Colour is mixed by hand for depth that grows out softly. Treatments rebuild what heat and time take away.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-hair.jpg",
      includes: ["Consultation & cut", "Hand-mixed colour", "Bond & gloss treatments", "Blow-dry finish"],
      startingFrom: "$55",
    },
    {
      slug: "nail-care",
      name: "Nail Care",
      tagline: "Manicure & pedicure",
      description:
        "Clean, considered manicures and pedicures — shaping, conditioning and colour that lasts.",
      longDescription:
        "A Lumière manicure is as much about the hands as the polish: warm soaks, gentle shaping, and cuticle care that respects the skin. Pedicures restore tired feet with the same patience. Choose a quiet nude or something with more to say — both are finished to last.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-nails.jpg",
      includes: ["Soak & shaping", "Cuticle conditioning", "Polish or gel", "Hand & foot massage"],
      startingFrom: "$35",
    },
    {
      slug: "massage-therapy",
      name: "Massage Therapy",
      tagline: "Relaxation & deep tissue",
      description:
        "Therapeutic massage that meets you where you are — from gentle unwinding to deep, focused release.",
      longDescription:
        "Our therapists read the body before they touch it. A relaxation massage moves slowly, easing the nervous system down a gear. Deep-tissue work goes after the knots that desks and stress leave behind. Warm oils, warm towels, and a room built for quiet.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-massage.jpg",
      includes: ["Pressure consultation", "Warm aromatic oils", "Relaxation or deep tissue", "Quiet recovery time"],
      startingFrom: "$75",
    },
    {
      slug: "facials-skincare",
      name: "Facials & Skincare",
      tagline: "Cleanse, treat, hydrate",
      description:
        "Facials tailored to your skin today — cleansing, treatment and deep hydration with botanical formulas.",
      longDescription:
        "Skin changes with the season, sleep and stress, so no two Lumière facials are quite the same. We analyse first, then build a treatment from there — clearing, calming or replenishing. Massage works the products in and the tension out. You leave with skin that looks rested.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-facials.jpg",
      includes: ["Skin analysis", "Double cleanse", "Targeted treatment mask", "Hydration & facial massage"],
      startingFrom: "$65",
    },
    {
      slug: "waxing-grooming",
      name: "Waxing & Grooming",
      tagline: "Smooth and precise",
      description:
        "Careful waxing and grooming in a private, hygienic room — gentle technique, clean results.",
      longDescription:
        "Grooming should be quick, calm and never awkward. Our private treatment room is warm and discreet, our wax is kind to skin, and our technique is practised enough to be nearly painless. We finish with a soothing botanical balm so skin stays calm afterwards.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-waxing.jpg",
      includes: ["Private treatment room", "Skin-kind warm wax", "Precise shaping", "Soothing after-balm"],
      startingFrom: "$25",
    },
    {
      slug: "spa-rituals",
      name: "Spa Rituals",
      tagline: "Half-day restoration",
      description:
        "Signature half-day rituals that fold massage, facial and finishing touches into one unhurried visit.",
      longDescription:
        "When one treatment isn't quite enough, a Lumière ritual gives you the whole afternoon. Massage, facial and a hair or nail finish are sequenced with rest, tea and quiet between them. It is the closest thing we have to pressing pause on the week.",
      image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/service-rituals.jpg",
      includes: ["Welcome tea & robe", "Full-body massage", "Tailored facial", "Hair or nail finish"],
      startingFrom: "$210",
    },
  ] as Service[],

  showcase: {
    eyebrow: "Inside Lumière",
    heading: "Rooms made for slowing down.",
    images: [
      { src: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-1.jpg", alt: "Hair styling station with brass-framed mirror" },
      { src: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-2.jpg", alt: "Calm manicure setting with linen and petals" },
      { src: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-3.jpg", alt: "Tranquil massage treatment room" },
      { src: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-showcase-4.jpg", alt: "Skincare and facial ritual still life" },
    ],
  },

  typeStatement:
    "We measure a good day by how quietly you can let your shoulders drop.",

  process: {
    eyebrow: "How a visit works",
    heading: "Considered, from the door to the doorstep.",
    image: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-process.jpg",
    steps: [
      {
        title: "Arrive & settle",
        body: "Warm tea, a soft seat, and a few unhurried minutes before anything begins.",
      },
      {
        title: "A real consultation",
        body: "We talk through what you want and what your hair, skin or body actually needs.",
      },
      {
        title: "The treatment",
        body: "Skilled hands, quiet room, considered products — at a pace that never feels rushed.",
      },
      {
        title: "Leave lighter",
        body: "Aftercare advice, a glass of water, and a standing invitation to come back soon.",
      },
    ],
  },

  stats: {
    eyebrow: "A little proof",
    heading: "Quiet care, kept up over the years.",
    items: [
      { value: 12, suffix: "+", label: "Years caring for our regulars" },
      { value: 5, suffix: "", label: "Disciplines under one roof" },
      { value: 9400, suffix: "+", label: "Appointments kept calm" },
      { value: 98, suffix: "%", label: "Guests who rebook with us" },
    ],
  },

  testimonials: {
    eyebrow: "In their words",
    heading: "What our guests notice.",
    items: [
      {
        quote:
          "I came in for a haircut and somehow left feeling like I'd had a holiday. The whole place is built around calm.",
        author: "Amara O.",
        role: "Guest since 2019",
      },
      {
        quote:
          "Being able to book hair, a facial and a massage in one visit changed how I look after myself. Lumière makes it effortless.",
        author: "Daniel R.",
        role: "Monthly ritual guest",
      },
      {
        quote:
          "The deep-tissue massage actually fixed the shoulder my desk had ruined. Skilled, attentive, never rushed.",
        author: "Priya N.",
        role: "Guest since 2021",
      },
    ],
  },

  cta: {
    eyebrow: "Your turn",
    heading: ["Give your week", "somewhere to soften."],
    body:
      "Pick a date below — hair, nails, skin or the full ritual. We will take it from there.",
    label: "Book an appointment",
  },

  contact: {
    eyebrow: "Visit Lumière",
    heading: "Come and find the quiet.",
    intro:
      "We answer messages within the day. For same-week appointments, the booking bar at the foot of the page is the fastest way in.",
    email: "hello@lumiere-salon-spa.com",
    phone: "+1 (415) 555-0123",
    address: "118 Linden Walk, Suite 2",
    location: "Open nationwide — flagship studio and partner salons",
    hours: [
      { day: "Monday – Friday", time: "9:00 – 19:00" },
      { day: "Saturday", time: "9:00 – 17:00" },
      { day: "Sunday", time: "10:00 – 16:00" },
    ],
  },

  socials: {
    instagram: "https://instagram.com/lumiere.salonspa",
    facebook: "https://facebook.com/lumieresalonspa",
    tiktok: "https://tiktok.com/@lumiere.salonspa",
    pinterest: "https://pinterest.com/lumieresalonspa",
  },

  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],

  footer: {
    contactEmail: "hello@lumiere-salon-spa.com",
    address: "118 Linden Walk, Suite 2",
    brandStatement:
      "A full-service salon and spa — hair, nails, massage, skincare and grooming, all kept unhurried.",
  },

  pageHeroes: {
    services: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-services.jpg",
    about: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-about.jpg",
    contact: "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/37f18796-6068-4f64-9e89-5f1820e67ef1/images/section-contact.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
