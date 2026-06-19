"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

export function EmotionalCTA() {
  return (
    <section id="emotional-cta" className="relative h-[90svh] min-h-[620px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/featured/featured-01.png"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.92) 70%), radial-gradient(900px 550px at 50% 0%, rgba(212,175,55,0.22), rgba(0,0,0,0) 56%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pb-14 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <span className="text-xs tracking-[0.25em] uppercase text-white/70">Emotional CTA</span>
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-[1.06] text-white md:text-6xl">
            Years From Now, These Moments Will Matter Even More.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Let&apos;s preserve them beautifully.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/60 bg-[rgba(212,175,55,0.10)] px-6 py-3 text-sm font-semibold text-[var(--gold)]"
            >
              Let&apos;s Create Something Beautiful
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur"
            >
              Start Your Journey
            </motion.button>
          </div>

          <div className="mt-10 text-xs tracking-[0.20em] uppercase text-white/55">
            A premium wedding studio experience, brought to life digitally.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

