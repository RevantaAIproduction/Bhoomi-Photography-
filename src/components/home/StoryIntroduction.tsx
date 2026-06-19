"use client";

import React from "react";

export function StoryIntroduction() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 20% 0%, rgba(212,175,55,0.16), rgba(0,0,0,0) 55%), linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">
              Story Introduction
            </span>
          </div>

          <h2 className="mt-5 font-serif text-4xl leading-[1.06] text-white md:text-6xl">
            Preserving memories is a kind of love.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Luxury doesn’t always announce itself. Sometimes it arrives as
            tenderness—when a gaze becomes a keepsake and a quiet moment turns
            into something that can be felt years later.
          </p>

          <div className="mt-10 h-px w-40 bg-gradient-to-r from-[var(--gold)]/70 via-[var(--gold)]/20 to-transparent" />

          <p className="mt-6 text-base leading-relaxed text-white/70">
            From weddings and pre-weddings to maternity and baby milestones, we
            capture the story behind the image—so your family legacy stays
            cinematic, timeless, and true.
          </p>
        </div>
      </div>
    </section>
  );
}

