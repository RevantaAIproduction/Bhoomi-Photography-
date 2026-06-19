"use client";

import React from "react";

export function FeaturedFilm() {
  return (
    <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden">
      <video
        src="/videos/hero/prewedding-film.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.95) 70%), radial-gradient(900px 550px at 55% 10%, rgba(212,175,55,0.22), rgba(0,0,0,0) 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-end px-6 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">
              Featured Film
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-[var(--gold)] to-transparent" />
          </div>

          <h2 className="mt-5 font-serif text-4xl leading-[1.06] text-white md:text-6xl">
            Stories That Move Forever
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            A cinematic video still—crafted to hold emotion the way memories do.
          </p>

          <div className="mt-10">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[rgba(212,175,55,0.10)] px-6 py-3 text-sm font-semibold text-[var(--gold)] shadow-[0_0_0_1px_rgba(212,175,55,0.20)]"
            >
              Book Your Memory
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

