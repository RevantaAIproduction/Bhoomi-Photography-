"use client";

import React from "react";

export type SocialIconType = "whatsapp" | "instagram" | "youtube";

export function SocialIcon({ type, className }: { type: SocialIconType; className?: string }) {
  switch (type) {
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 1 1-7.88 1.14" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden
        >
          <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
          <path d="M21 12c0 6-1 7-9 7s-9-1-9-7 1-7 9-7 9 1 9 7z" />
        </svg>
      );
    case "whatsapp":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden
        >
          <path d="M20 11.5a8.5 8.5 0 0 1-12.9 7.2L4 20l1.3-3.1A8.5 8.5 0 1 1 20 11.5z" />
          <path d="M8.5 9.3c.3 1.7 2.5 3.9 4.2 4.2" />
          <path d="M10.2 10.1l-1.1 1.1" />
        </svg>
      );
  }
}

