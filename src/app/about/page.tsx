import React from "react";

import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* SECTION 1: Hero Story */}
        <header className="relative h-[55svh] min-h-[420px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/about/about-01.png"
              alt=""
              className="h-full w-full object-cover brightness-[0.6]"
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.92) 70%), radial-gradient(900px 550px at 50% 0%, rgba(212,175,55,0.20), rgba(0,0,0,0) 56%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/70">
                  The Story
                </span>
              </div>
              <h1 className="mt-5 font-serif text-4xl leading-[1.06] text-white md:text-6xl">
                The Story Behind Bhoomi Photography
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                Every photograph begins with a moment that cannot be repeated.
                What started as a passion for preserving family memories became
                Bhoomi Photography—a studio dedicated to capturing weddings,
                growing families, celebrations, and the people who make them
                meaningful.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                Because years from now, these photographs become more than
                images. They become memories.
              </p>
            </div>
          </div>
        </header>

        {/* SECTION 2: Murthy's Journey */}
        <section className="relative py-24">
          <div className="mx-auto w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid md:grid-cols-12 md:items-center">
            {/* Text Left */}
            <div className="md:col-span-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                  <span className="text-xs tracking-[0.25em] uppercase text-white/70">
                    Journey
                  </span>
                </div>
                <h2 className="font-serif text-3xl leading-[1.08] text-white md:text-4xl">
                  Murthy's Journey
                </h2>
                <p className="max-w-xl text-white/75">
                  Bhoomi Photography was founded by Murthy with a simple belief:
                  The most valuable photographs are not the perfect poses.
                  They are the genuine emotions hidden between them.
                </p>
                <p className="max-w-xl text-white/75">
                  From weddings and engagements to maternity journeys and family
                  celebrations, every session is approached with patience,
                  authenticity, and attention to detail. The goal is never just
                  to take photographs. It is to preserve feelings that families
                  can return to for years.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                <div className="absolute inset-0">
                  <img
                    src="/images/about/about-02.png"
                    alt=""
                    className="h-full w-full object-cover brightness-[0.72]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.88) 75%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Why Bhoomi Photography */}
        <section className="relative py-24">
          <div className="mx-auto w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid md:grid-cols-12 md:items-center">
            {/* Image Left */}
            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                <div className="absolute inset-0">
                  <img
                    src="/images/about/about-01.png"
                    alt=""
                    className="h-full w-full object-cover brightness-[0.72]"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.88) 75%)",
                  }}
                  aria-hidden
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="md:col-span-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                  <span className="text-xs tracking-[0.25em] uppercase text-white/70">
                    Choosing Us
                  </span>
                </div>
                <h2 className="font-serif text-3xl leading-[1.08] text-white md:text-4xl">
                  Why Choose Bhoomi Photography
                </h2>
                <p className="max-w-xl text-white/75">
                  Photography is about trust. Families invite us into some of the
                  most important days of their lives, and we carry that
                  responsibility with care.
                </p>
                <p className="max-w-xl text-white/75">
                  We focus on: Natural storytelling, Authentic emotions,
                  Professional editing, Personalized experience, Timeless
                  photographs. So every image feels meaningful today and valuable
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Approach */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-[var(--gold)] to-transparent" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/70">
                  Our Approach
                </span>
              </div>
              <h2 className="mt-5 font-serif text-4xl leading-[1.06] text-white md:text-5xl">
                Our Approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                We believe great photography happens when people feel comfortable
                being themselves. That is why every session is relaxed, personal,
                and focused on real moments rather than forced poses. The result
                is a collection of photographs that feels honest, emotional, and
                timeless.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

