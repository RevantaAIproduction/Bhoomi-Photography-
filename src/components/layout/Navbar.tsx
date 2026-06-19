"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-md">

      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo/bhoomi-photography-logo.png"
            alt="Bhoomi Photography"
            className="h-[42px] w-auto"
          />
          <span className="text-xs tracking-[0.25em] uppercase text-white/90">
            BHOOMI PHOTOGRAPHY
          </span>
        </div>


        <nav className="flex items-center gap-7 text-sm">
          <Link
            href="/"
            className="text-white/85 transition-colors hover:text-[var(--gold)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white/85 transition-colors hover:text-[var(--gold)]"
          >
            About
          </Link>
          <a
            href="#final-cta"
            className="text-white/85 transition-colors hover:text-[var(--gold)]"
          >
            Contact
          </a>
        </nav>
      </div>

    </header>
  );
}

