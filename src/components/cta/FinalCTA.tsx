"use client";

import React from "react";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative h-[90svh] min-h-[620px] w-full overflow-hidden"
    >
      <img
        src="/images/featured/featured-01.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.92) 70%), radial-gradient(900px 550px at 50% 0%, rgba(212,175,55,0.22), rgba(0,0,0,0) 56%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pb-14 pt-12">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-[1.06] text-white md:text-6xl">
            Years From Now,
            <br />
            These Moments Will Matter Even More.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Let&apos;s preserve them beautifully.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-[var(--gold)]/60 bg-[rgba(212,175,55,0.10)] px-7 py-3 text-sm font-semibold text-[var(--gold)]"
            >
              Book Your Memory
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-7 py-3 text-sm font-semibold text-white/85 backdrop-blur"
            >
              Let&apos;s Create Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

