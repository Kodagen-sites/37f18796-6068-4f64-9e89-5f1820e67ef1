import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[color:var(--bg-secondary)] px-6 text-center">
      <p className="eyebrow">Lost the thread</p>
      <h1 className="mt-6 font-display text-[clamp(48px,9vw,110px)] font-light leading-none text-ink">
        404
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-[color:var(--body)]">
        This page has slipped away somewhere quiet. Let's get you back to a calmer corner of
        Lumière.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-parchment transition-colors hover:bg-bark"
      >
        Back to home →
      </Link>
    </main>
  );
}
