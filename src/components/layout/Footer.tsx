import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--gold)]/35 bg-black/95">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          <div className="space-y-4">
            <img
              src="/images/logo/bhoomi-photography-logo.png"
              alt="Bhoomi Photography"
              className="h-[46px] w-auto"
            />
            <div className="font-serif text-lg text-white/80">
              Capturing the moments that become your family's legacy.
            </div>
          </div>

          <div className="space-y-3 text-sm text-white/75">
            <div className="text-xs tracking-[0.25em] uppercase text-white/60">
              Contact
            </div>
            <a href="tel:+91" className="block hover:text-[var(--gold)] transition-colors">
              +91 XXXXX XXXXX
            </a>
            <a
              href="mailto:hello@bhoomiphotography.com"
              className="block hover:text-[var(--gold)] transition-colors"
            >
              hello@bhoomiphotography.com
            </a>
            <div className="pt-1 text-white/70">Hyderabad, Telangana, India</div>
          </div>

          <div className="space-y-4 text-sm text-white/75">
            <div className="text-xs tracking-[0.25em] uppercase text-white/60">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="hover:text-[var(--gold)] transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-[var(--gold)] transition-colors"
              >
                About
              </a>
              <a
                href="#final-cta"
                className="hover:text-[var(--gold)] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/95">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col gap-1 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <div>© 2026 Bhoomi Photography</div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


