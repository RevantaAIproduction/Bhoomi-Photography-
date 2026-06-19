"use client";

import React, { useMemo, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

type Chapter = {
  no: string;
  title: string;
  subtitle: string;
  bgImage: string;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export function LuxuryAlbum() {
  const chapters: Chapter[] = useMemo(
    () => [
      {
        no: "01",
        title: "The Promise",
        subtitle: "Pre-Wedding",
        bgImage: "/images/weddings/wedding-01.png",
      },
      {
        no: "02",
        title: "The Celebration",
        subtitle: "Wedding",
        bgImage: "/images/weddings/wedding-02.png",
      },
      {
        no: "03",
        title: "A New Beginning",
        subtitle: "Maternity",
        bgImage: "/images/bridal/bridal-02.png",
      },
      {
        no: "04",
        title: "Little Miracles",
        subtitle: "Baby Photography",
        bgImage: "/images/baby/baby-01.png",
      },
    ],
    []
  );

  // Local scroll region drives the entire album.
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start flipping as soon as the album hits the viewport,
    // complete when it leaves.
    offset: ["start end", "end start"],
  });

  // 0..1 maps to 4 chapters.
  const chapterT = useTransform(scrollYProgress, (p) => clamp(p, 0, 1) * 4);

  const openT = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const page1T = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const page2T = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const page3T = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Cover open: rotateY + slight lift.
  const coverRotateY = useTransform(openT, [0, 1], [-18, -78]);
  const coverTranslateY = useTransform(openT, [0, 1], [0, -22]);
  const coverOpacity = useTransform(openT, [0, 0.35], [1, 0.15]);

  // Spine slightly brightens as album opens.
  const spineGlow = useTransform(openT, [0, 1], [0.25, 0.9]);

  // Two-page spread: each page has a flip rotation.
  const flipA = useTransform(page1T, [0, 1], [0, -165]);
  const flipB = useTransform(page2T, [0, 1], [0, -165]);
  const flipC = useTransform(page3T, [0, 1], [0, -165]);

  const paperShine = useTransform(scrollYProgress, [0, 1], [0.12, 0.22]);

  const visibleChapterIndex = useMemo(() => {
    // Derived at render-time for static text opacity.
    // We still animate with transforms for visuals.
    return 0;
  }, []);

  return (
    <section
      ref={(n) => {
        sectionRef.current = n;
      }}
      id="album"
      className="relative w-full"
    >
      {/* Full-width album container */}
      <div className="relative min-h-[180svh] w-full bg-black">
        {/* Dark luxury table */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full"
            style={{
              background:
                "radial-gradient(1200px 700px at 50% 18%, rgba(212,175,55,0.10), rgba(0,0,0,0) 58%), radial-gradient(900px 520px at 50% 85%, rgba(212,175,55,0.06), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
            }}
          />
          <div
            className="absolute left-1/2 top-[56%] h-[42svh] w-[88vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,0,0,0) 20%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.88) 100%)",
            }}
            aria-hidden
          />
        </div>

        {/* Center album stage */}
        <div className="absolute left-1/2 top-[55%] w-[92vw] max-w-[1180px] -translate-x-1/2 -translate-y-1/2 px-4">
          {/* Leather cover */}
          <div className="relative mx-auto w-full" style={{ perspective: 1200 }}>
            {/* Book spine */}
            <div
              className="absolute left-1/2 top-1/2 h-[64%] w-[30px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(to right, rgba(212,175,55,0.00), rgba(212,175,55,0.20), rgba(212,175,55,0.00))",
                boxShadow: "0 0 40px rgba(212,175,55,0.12)",
                opacity: 0.8,
              }}
              aria-hidden
            />

            {/* Cover plane */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-full max-w-[980px] -translate-x-1/2 -translate-y-1/2"
              style={{
                rotateY: coverRotateY,
                translateY: coverTranslateY,
                transformOrigin: "left center",
                opacity: coverOpacity,
              }}
            >
              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-black/40 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
                {/* Leather texture */}
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(700px 240px at 20% 10%, rgba(212,175,55,0.20), rgba(0,0,0,0) 55%), linear-gradient(120deg, rgba(255,255,255,0.06), rgba(0,0,0,0) 28%), linear-gradient(to bottom, rgba(30,30,30,0.7), rgba(0,0,0,0.92))",
                  }}
                />

                {/* Paper texture under cover */}
                <div
                  className="absolute inset-0 opacity-50 mix-blend-overlay"
                  aria-hidden
                  style={{
                    backgroundImage: "url('/images/featured/featured-01.png')",
                    backgroundSize: "cover",
                  }}
                />

                {/* Embossed gold title */}
                <div className="relative grid h-[520px] place-items-center px-8 text-center">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-4">
                      <span className="h-px w-14 bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/80 to-transparent" />
                      <span className="text-xs tracking-[0.35em] text-white/70">
                        BHOOMI PHOTOGRAPHY
                      </span>
                      <span className="h-px w-14 bg-gradient-to-l from-[var(--gold)]/0 via-[var(--gold)]/80 to-transparent" />
                    </div>

                    <h2 className="mt-6 font-serif text-5xl leading-[1.02] text-white">
                      Where Moments Become Memories
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-white/75">
                      A luxury wedding album experience—opened by scroll.
                    </p>

                    <div className="mt-10 h-px w-full bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/60 to-[var(--gold)]/0" />

                    <div className="mt-7 text-xs tracking-[0.28em] text-white/60">
                      CHAPTERS 01 — 04
                    </div>
                  </div>
                </div>

                {/* Gold trim */}
                <div
                  className="absolute inset-0 border-[1px] border-[rgba(212,175,55,0.18)] rounded-[18px] pointer-events-none"
                  aria-hidden
                />
              </div>
            </motion.div>

            {/* Inside book */}
            <div className="relative mx-auto w-full max-w-[980px]">
              {/* Leather shadow */}
              <div
                className="absolute inset-0 rounded-[18px]"
                aria-hidden
                style={{
                  boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
                  filter: "blur(0px)",
                }}
              />

              {/* Two-page spreads */}
              <div className="relative mt-0 rounded-[18px] border border-white/10 bg-black/20 overflow-hidden">
                {/* Table-like underlay */}
                <div
                  className="absolute inset-0"
                  aria-hidden
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85)), radial-gradient(900px 500px at 50% 0%, rgba(212,175,55,0.12), rgba(0,0,0,0) 60%)",
                  }}
                />

                {/* Center spine seam */}
                <div
                  className="absolute left-1/2 top-0 h-full w-[2px]"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(212,175,55,0.00), rgba(212,175,55,0.35), rgba(212,175,55,0.00))",
                    opacity: 0.55,
                  }}
                  aria-hidden
                />

                {/* Paper texture */}
                <div
                  className="absolute inset-0 opacity-55 mix-blend-overlay"
                  aria-hidden
                  style={{
                    backgroundImage: "url('/images/featured/featured-01.png')",
                    backgroundSize: "cover",
                  }}
                />

                {/* Spread viewport */}
                <div className="relative grid grid-cols-2">
                  {/* Left page */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        rotateY: flipA,
                        transformStyle: "preserve-3d",
                        transformOrigin: "right center",
                      }}
                    >
                      <div className="relative h-full w-full bg-black/10">
                        <div className="absolute inset-0">
                          <img
                            src={chapters[0].bgImage}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="eager"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.88) 76%), radial-gradient(900px 420px at 20% 0%, rgba(212,175,55,0.16), rgba(0,0,0,0) 60%)",
                            }}
                          />
                        </div>
                        <div className="absolute bottom-10 left-8 right-8">
                          <div className="text-xs tracking-[0.22em] uppercase text-white/65">
                            {chapters[0].subtitle}
                          </div>
                          <div className="mt-3 font-serif text-3xl text-white">
                            {chapters[0].title}
                          </div>
                          <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-[var(--gold)]/60 to-white/0" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right page */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        rotateY: flipA,
                        transformStyle: "preserve-3d",
                        transformOrigin: "left center",
                      }}
                    >
                      <div className="relative h-full w-full bg-black/10">
                        <div className="absolute inset-0">
                          <img
                            src={chapters[1].bgImage}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="eager"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.88) 76%), radial-gradient(900px 420px at 70% 0%, rgba(212,175,55,0.16), rgba(0,0,0,0) 60%)",
                            }}
                          />
                        </div>
                        <div className="absolute bottom-10 left-8 right-8">
                          <div className="text-xs tracking-[0.22em] uppercase text-white/65">
                            {chapters[1].subtitle}
                          </div>
                          <div className="mt-3 font-serif text-3xl text-white">
                            {chapters[1].title}
                          </div>
                          <div className="mt-4 h-px w-full bg-gradient-to-r from-white/0 via-[var(--gold)]/60 to-white/0" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Shine */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(115deg, rgba(212,175,55,0.00) 20%, rgba(212,175,55,0.18) 38%, rgba(212,175,55,0.00) 58%)",
                    opacity: paperShine,
                  }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chapter readout (non-interactive, no UI widgets) */}
        <div className="pointer-events-none absolute left-0 right-0 top-[8svh] mx-auto flex w-full max-w-6xl flex-col items-center px-6">
          <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur">
            <span className="text-xs tracking-[0.32em] uppercase text-white/60">Album chapters</span>
            <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)]/50 to-transparent" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--gold)]">
              {visibleChapterIndex}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

