"use client";

import { useId } from "react";
import type { HouseVariant } from "@/lib/listings";

export function HouseArt({ variant = "bungalow" }: { variant?: HouseVariant }) {
  const uid = useId().replace(/:/g, "");
  const sky = `sky-${uid}`;
  const grass = `grass-${uid}`;

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label="Property photo">
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f6f9e" />
          <stop offset="55%" stopColor="#7eb6d8" />
          <stop offset="100%" stopColor="#d5ecf7" />
        </linearGradient>
        <linearGradient id={grass} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8fbf6a" />
          <stop offset="100%" stopColor="#6ea352" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#${sky})`} />
      <ellipse cx="120" cy="78" rx="46" ry="18" fill="#fff" opacity="0.85" />
      <ellipse cx="156" cy="74" rx="28" ry="14" fill="#fff" opacity="0.9" />
      <ellipse cx="470" cy="96" rx="54" ry="18" fill="#fff" opacity="0.75" />
      <ellipse cx="430" cy="250" rx="90" ry="28" fill="#5f8f45" opacity="0.35" />
      <rect x="0" y="268" width="640" height="132" fill={`url(#${grass})`} />
      <path d="M250 292h250l40 108H210Z" fill="#d9d3c6" />
      {variant === "duplex" ? <Duplex /> : variant === "terrace" ? <Terrace /> : <Bungalow />}
      <circle cx="86" cy="250" r="26" fill="#3f7a3a" />
      <rect x="82" y="268" width="8" height="28" fill="#6b4a32" />
      <circle cx="560" cy="236" r="34" fill="#3f7a3a" />
      <rect x="555" y="258" width="10" height="34" fill="#6b4a32" />
    </svg>
  );
}

function Bungalow() {
  return (
    <g>
      <path d="M150 250 320 168l170 82v8H150Z" fill="#3c4651" />
      <rect x="176" y="248" width="288" height="92" fill="#f4f7f8" />
      <rect x="168" y="236" width="304" height="14" fill="#e7ecee" />
      <rect x="292" y="278" width="46" height="62" fill="#2d3540" />
      <rect x="204" y="276" width="58" height="40" fill="#243140" />
      <rect x="376" y="276" width="58" height="40" fill="#243140" />
      <rect x="392" y="292" width="10" height="18" fill="#d7dee3" opacity="0.5" />
      <path d="M470 300h78l18 40H486Z" fill="#f7f7f7" />
      <path d="M486 300h46l8 16H494Z" fill="#9aa7b2" />
      <circle cx="506" cy="340" r="8" fill="#2c3338" />
      <circle cx="548" cy="340" r="8" fill="#2c3338" />
    </g>
  );
}

function Terrace() {
  return (
    <g>
      <path d="M168 214 330 132l150 82v10H168Z" fill="#8a4632" />
      <rect x="196" y="214" width="250" height="126" fill="#f7f1ea" />
      <rect x="186" y="202" width="270" height="14" fill="#efe4da" />
      <rect x="292" y="268" width="48" height="72" fill="#6b3a2c" />
      <rect x="220" y="236" width="46" height="36" fill="#243140" />
      <rect x="220" y="286" width="46" height="28" fill="#243140" />
      <rect x="368" y="236" width="46" height="36" fill="#243140" />
      <rect x="368" y="286" width="46" height="28" fill="#243140" />
      <rect x="430" y="292" width="92" height="28" rx="8" fill="#f4f4f4" />
      <circle cx="454" cy="328" r="8" fill="#2c3338" />
      <circle cx="498" cy="328" r="8" fill="#2c3338" />
    </g>
  );
}

function Duplex() {
  return (
    <g>
      <rect x="188" y="150" width="250" height="190" fill="#f3f5f6" />
      <path d="M176 162 313 96l138 66v12H176Z" fill="#2c3338" />
      <rect x="210" y="176" width="42" height="34" fill="#243140" />
      <rect x="270" y="176" width="42" height="34" fill="#243140" />
      <rect x="360" y="176" width="48" height="34" fill="#243140" />
      <rect x="210" y="230" width="42" height="34" fill="#243140" />
      <rect x="270" y="230" width="42" height="34" fill="#243140" />
      <rect x="360" y="230" width="48" height="70" fill="#1f2933" />
      <rect x="292" y="278" width="44" height="62" fill="#3c4651" />
      <rect x="448" y="286" width="86" height="30" rx="6" fill="#f7f7f7" />
      <path d="M460 286h40l6 12h-46Z" fill="#9aa7b2" />
      <circle cx="472" cy="322" r="8" fill="#2c3338" />
      <circle cx="512" cy="322" r="8" fill="#2c3338" />
    </g>
  );
}
