"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json?.ok) throw new Error(json?.error || "Could not send your message.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[1.4rem] border border-ink/10 bg-[color:var(--card)] p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage-deep">
          <Check size={24} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-light text-ink">Message received.</h3>
        <p className="mt-3 leading-relaxed text-[color:var(--body)]">
          Thank you for writing to Lumière. We reply within the day — usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.4rem] border border-ink/10 bg-[color:var(--card)] p-7 md:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Your name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" type="tel" />
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Interested in
          </span>
          <select
            name="service"
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-ink/15 bg-parchment px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
          >
            <option value="">Choose a service</option>
            {siteConfig.services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General enquiry">General enquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          required
          className="mt-2 w-full resize-none rounded-lg border border-ink/15 bg-parchment px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
          placeholder="Tell us what you're looking for…"
        />
      </label>

      {error && (
        <p className="mt-4 rounded-lg border border-terracotta/30 bg-terracotta/10 px-3 py-2 text-sm text-terracotta">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-parchment transition-colors hover:bg-bark disabled:opacity-60"
      >
        {status === "sending" && <Loader2 size={14} className="animate-spin" />}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-ink/15 bg-parchment px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
      />
    </label>
  );
}
