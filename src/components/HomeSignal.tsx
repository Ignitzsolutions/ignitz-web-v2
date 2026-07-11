"use client";

import { useEffect, useState } from "react";

const phrases = [
  "strategy alignment",
  "product systems",
  "workflow automation",
  "handoff transfer",
];

export function HomeSignal() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const active = phrases[index % phrases.length];
    const delay = phase === "typing" ? 68 : phase === "deleting" ? 42 : 850;

    const timer = window.setTimeout(() => {
      if (phase === "typing") {
        const next = active.slice(0, text.length + 1);
        setText(next);
        if (next === active) {
          setPhase("pausing");
        }
        return;
      }

      if (phase === "pausing") {
        setPhase("deleting");
        return;
      }

      const next = active.slice(0, Math.max(0, text.length - 1));
      setText(next);
      if (!next) {
        setPhase("typing");
        setIndex((value) => (value + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [index, phase, reduceMotion, text]);

  const displayText = reduceMotion ? phrases[0] : text || phrases[0];

  return (
    <div className="home-signal" aria-label="Ignitz build signal">
      <div className="home-signal-topline">
        <span className="home-signal-label">Live build trace</span>
        <span className="home-signal-status">calm / centered / production-ready</span>
      </div>
      <p className="home-signal-copy">
        Ignitz builds for <strong>{displayText}</strong>
        {!reduceMotion ? <span className="home-signal-cursor" aria-hidden="true">|</span> : null}
      </p>
      <div className="home-signal-wave" aria-hidden="true">
        <svg viewBox="0 0 920 72" role="presentation" focusable="false">
          <path
            d="M8 38C54 38 54 18 100 18C146 18 146 54 192 54C238 54 238 24 284 24C330 24 330 48 376 48C422 48 422 20 468 20C514 20 514 44 560 44C606 44 606 16 652 16C698 16 698 54 744 54C790 54 790 28 836 28C872 28 886 40 912 40"
          />
        </svg>
      </div>
      <p className="home-signal-note">Strategy / product / automation / transfer</p>
    </div>
  );
}
