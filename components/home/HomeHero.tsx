"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText, { type HeroChapter } from "@/components/motion/HeroScrollText";
import framesManifest from "@/content/frames-manifest.json";

const CHAPTERS: HeroChapter[] = [
  {
    at: 0,
    eyebrow: "Lumière · Salon & Spa",
    headlineLines: ["A quieter kind", "of beautiful."],
    subline: "Hair, nails, skin and body — the full ritual, under one calm roof.",
  },
  {
    at: 0.42,
    eyebrow: "Five disciplines, one room",
    headlineLines: ["Everything well,", "handled with care."],
    subline: "No rush, no noise — just skilled hands and time to yourself.",
  },
  {
    at: 0.76,
    eyebrow: "Whenever you're ready",
    headlineLines: ["Step inside.", "Exhale."],
    subline: "Pick a date on the booking bar below — we will take it from there.",
  },
];

export default function HomeHero() {
  const [progress, setProgress] = useState(0);

  return (
    <ScrollCanvas
      frameCount={framesManifest.frameCount}
      pattern={framesManifest.frameUrlTemplate.replace(/\{N+\}/i, "{n}")}
      padLength={4}
      scrollDistance={3.6}
      onProgress={setProgress}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,14,0.34) 0%, rgba(20,18,14,0.08) 38%, rgba(20,18,14,0.55) 100%)",
        }}
      />
      <HeroScrollText
        progress={progress}
        chapters={CHAPTERS}
        position="center"
        textColor="#f6efe3"
        accentColor="#c9d4bb"
      />
      <div className="absolute inset-x-0 bottom-7 flex justify-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#f6efe3]/55">
          Scroll
        </span>
      </div>
    </ScrollCanvas>
  );
}
