"use client";

import { motion } from "framer-motion";
import React from "react";

const gold = "#D4AF37";

function StoryBlock({
  kicker,
  title,
  copy,
  imageSrc,
}: Readonly<{
  kicker: string;
  title: string;
  copy: string;
  imageSrc: string;
}>) {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.88) 65%), radial-gradient(900px 480px at 50% 0%, rgba(212,175,55,0.14), rgba(0,0,0,0) 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/70">{kicker}</span>
              </div>
              <h2 className="font-serif text-3xl leading-[1.08] text-white md:text-4xl">{title}</h2>
              <p className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">{copy}</p>

              <div className="pt-2">
                <div className="h-px w-28 bg-gradient-to-r from-[var(--gold)]/70 to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_10%,rgba(212,175,55,0.16),rgba(0,0,0,0)_55%)]" />
              <img
                src={imageSrc}
                alt=""
                className="h-[320px] w-full object-cover object-center md:h-[420px]"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.88) 72%), radial-gradient(900px 420px at 20% 0%, rgba(212,175,55,0.10), rgba(0,0,0,0) 55%)",
                }}
              />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between gap-4 text-xs text-white/60">
                  <span className="tracking-[0.18em] uppercase">BHOOMI STUDIO</span>
                  <span style={{ color: gold }} className="font-semibold">
                    Preserved with gold light
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StorySections() {
  return (
    <div id="stories" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">Our Stories</span>
            <span className="h-px w-12 bg-gradient-to-l from-[var(--gold)] to-transparent" />
          </div>
          <h2 className="font-serif text-4xl leading-[1.06] text-white md:text-5xl">Walk through memories.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            Not every moment lasts forever. But the feeling behind it can.
          </p>
        </motion.div>
      </div>

      <StoryBlock
        kicker="WEDDING"
        title="Not every moment lasts forever.\nThe feeling behind it can."
        copy="Grace. Tradition. Beauty. Captured exactly as it felt—so the day lives on, chapter by chapter."
        imageSrc="/images/weddings/wedding-01.png"
      />

      <StoryBlock
        kicker="BRIDAL PORTRAIT"
        title="Grace. Tradition. Beauty."
        copy="A bridal frame made for lingering—gold light, cinematic textures, and emotions you’ll recognize instantly."
        imageSrc="/images/bridal/bridal-01.png"
      />

      <StoryBlock
        kicker="MATERNITY"
        title="The beginning of a beautiful new story."
        copy="Soft glances, meaningful pauses, and the quiet strength before everything changes."
        imageSrc="/images/weddings/wedding-02.png"
      />

      <StoryBlock
        kicker="BABY PHOTOGRAPHY"
        title="The tiniest moments become the biggest memories."
        copy="Little miracles, preserved with care—so years from now, you can feel those early days again."
        imageSrc="/images/baby/baby-01.png"
      />

      <div className="pb-10" />
    </div>
  );
}


