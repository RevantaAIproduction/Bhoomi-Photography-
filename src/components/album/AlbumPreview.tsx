"use client";

import React from "react";

export function AlbumPreview() {
  return (
    <section className="relative w-full bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 520px at 50% 10%, rgba(212,175,55,0.14), rgba(0,0,0,0) 55%), linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">
              Album Preview
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-[var(--gold)] to-transparent" />
          </div>

          <h2 className="mt-5 font-serif text-4xl leading-[1.06] text-white md:text-6xl">
            The Memory Book
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            A handcrafted collection of memories—closed, elegant, and designed to be treasured for years.
          </p>
        </div>

        <div className="relative mx-auto mt-14 flex w-full max-w-[980px] justify-center">
          {/* Dark table */}
          <div
            className="absolute -bottom-24 left-1/2 h-[220px] w-[92%] -translate-x-1/2 rounded-[28px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,0,0,0) 10%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.95) 100%), linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1))",
              boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
            }}
            aria-hidden
          />

          {/* Large video area (replaces the tilted mockup/card only) */}
          <div className="relative h-[520px] w-full" style={{ perspective: 1200 }}>
            {/* Rounded video wrapper kept in the same visual area */}
            <div
              className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[32px] border border-white/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover rounded-[32px]"
                >
                  <source
                    src="/videos/album/bhoomi-photography.mov"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* Keep the existing button area where it was visually (below the video area) */}
          <div className="absolute left-1/2 top-[55%] w-[92%] -translate-x-1/2">
            
          </div>
        </div>
      </div>
    </section>
  );
}

