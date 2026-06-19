"use client";

import React from "react";
import { SocialIcon, type SocialIconType } from "./SocialIcon";

const socials: Array<{ type: SocialIconType; label: string }> = [
  { type: "whatsapp", label: "WhatsApp" },
  { type: "instagram", label: "Instagram" },
  { type: "youtube", label: "YouTube" },
];

export function FloatingSocialButtons() {
  return (
    <div className="fixed right-4 top-1/2 z-[60] flex -translate-y-1/2 flex-col items-center gap-3">
      {socials.map((s) => (
        <a
          key={s.type}
          className="h-12 w-12 rounded-full border border-white/15 bg-black/35 backdrop-blur transition-colors flex items-center justify-center hover:border-[var(--gold)] hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:h-14 sm:w-14"
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
        >
          <SocialIcon type={s.type} className="h-5 w-5 text-white/85" />
        </a>
      ))}
    </div>
  );
}

