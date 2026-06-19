"use client";

import React from "react";
import { motion } from "framer-motion";

type Moment = {
  title: string;
  image: string;
  description: string;
};

const moments: Moment[] = [
  {
    title: "Wedding Memories",
    image: "/images/weddings/wedding-01.png",
    description:
      "A ceremony is never only one day. We preserve the glances, the traditions, and the hush between vows—rendered with cinematic warmth.",
  },
  {
    title: "Pre-Wedding Stories",
    image: "/images/weddings/wedding-02.png",
    description:
      "Before the celebration, there’s a story. We capture it with quiet momentum—so the journey feels complete.",
  },
  {
    title: "Bridal Portraits",
    image: "/images/bridal/bridal-01.png",
    description:
      "Editorial lighting, refined textures, and a calm elegance—crafted to feel intimate and timeless.",
  },
  {
    title: "Maternity Journey",
    image: "/images/bridal/bridal-02.png",
    description:
      "Soft frames and meaningful pauses—so the feeling of this season stays with you for years.",
  },
  {
    title: "Baby Milestones",
    image: "/images/baby/baby-01.png",
    description:
      "The smallest milestones hold the biggest emotions. We photograph them with tenderness, clarity, and care.",
  },
  {
    title: "Family Memories",
    image: "/images/weddings/wedding-03.png",
    description:
      "Togetherness, preserved. We capture the warmth of your family—so the feeling remains even after the day fades.",
  },
];

function Row({ moment, flip }: { moment: Moment; flip: boolean }) {
  const imgSide = flip ? "md:order-2" : "md:order-1";
  const textSide = flip ? "md:order-1" : "md:order-2";

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className={"md:col-span-6 " + imgSide}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(900px 420px at 50% 0%, rgba(212,175,55,0.14), rgba(0,0,0,0) 55%), linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.85) 70%)",
                }}
                aria-hidden
              />
              <img
                src={moment.image}
                alt=""
                className="h-[360px] w-full object-cover object-center md:h-[460px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className={"md:col-span-6 " + textSide}>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/70">
                  {moment.title}
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-[1.08] text-white md:text-4xl">
                {moment.title}
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-white/75">
                {moment.description}
              </p>

              <div className="h-px w-full bg-gradient-to-r from-[var(--gold)]/60 via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function FeaturedMoments() {
  const primary = moments.slice(0, 3);
  const secondary = moments.slice(3);

  return (
    <section className="relative bg-black">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 520px at 70% 10%, rgba(212,175,55,0.12), rgba(0,0,0,0) 55%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">
              Featured Moments
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-[var(--gold)] to-transparent" />
          </div>

          <h2 className="font-serif text-4xl leading-[1.06] text-white md:text-5xl">
            Every story deserves to be remembered.
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            From wedding celebrations and pre-wedding journeys to maternity milestones, baby photography, and family portraits, we capture genuine moments that become treasured memories for generations to come.
          </p>
        </div>
      </div>

      {primary.map((m, idx) => (
        <Row key={m.title} moment={m} flip={idx % 2 === 1} />
      ))}

      {secondary.map((m, idx) => (
        <Row key={m.title} moment={m} flip={idx % 2 === 0} />
      ))}
    </section>
  );
}

