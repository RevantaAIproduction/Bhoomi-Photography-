"use client";

import React from "react";

export function HeroFilm() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        onLoadedData={() => {
          // eslint-disable-next-line no-console
          console.log("Hero video loaded");
        }}
      >
        <source
          src="/videos/hero/prewedding-film.mp4"
          type="video/mp4"
        />
      </video>

      {/* maximum allowed overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden />

      <div className="absolute left-0 right-0 top-0 mx-auto flex max-w-6xl items-center px-6 pt-8 z-10">
        <div className="flex items-center gap-3">
          {/* Navbar already shows branding; keep hero clean and non-duplicate */}
        </div>
      </div>

      <div className="absolute inset-0 flex items-end z-10">
        <div className="w-full px-6 pb-14">
          <div className="mx-auto max-w-5xl">
            <h1 className="font-serif text-4xl leading-[1.05] text-white md:text-6xl">
              Where Moments Become Memories
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              From weddings and pre-weddings to maternity and baby milestones, we
              capture the moments that become your family's legacy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[rgba(0,0,0,0.35)] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_0_0_1px_rgba(212,175,55,0.25)]"
              >
                Book Your Memory
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold tracking-wide text-white/85 backdrop-blur"
              >
                Let's Create Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

