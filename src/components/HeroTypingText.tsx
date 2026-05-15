"use client";

import { useEffect, useMemo, useState } from "react";

export function HeroTypingText({ phrases }: { phrases: string[] }) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(safePhrases[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(media.matches);

    updateMotion();
    media.addEventListener("change", updateMotion);

    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion || safePhrases.length <= 1) {
      return;
    }

    const currentPhrase = safePhrases[phraseIndex] ?? "";
    const finishedTyping = !deleting && visibleLength === currentPhrase.length;
    const finishedDeleting = deleting && visibleLength === 0;
    const delay = finishedTyping ? 1150 : deleting ? 36 : 62;

    const timeout = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
        return;
      }

      if (finishedDeleting) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % safePhrases.length);
        return;
      }

      setVisibleLength((length) => length + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, phraseIndex, reduceMotion, safePhrases, visibleLength]);

  const currentPhrase = safePhrases[phraseIndex] ?? "";
  const typedText = reduceMotion ? safePhrases[0] ?? "" : currentPhrase.slice(0, visibleLength);

  return (
    <span className="typing-line" aria-live="polite">
      <span>{typedText}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
