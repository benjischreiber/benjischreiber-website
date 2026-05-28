"use client";

import { useEffect, useRef, useState } from "react";
import { selectedReviews } from "@/data/reviews";

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setFading(true);
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % selectedReviews.length);
        setFading(false);
      }, 400);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused, prefersReducedMotion]);

  const goTo = (index: number) => {
    if (index === current) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setFading(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  };

  const review = selectedReviews[current];

  return (
    <div
      className="mx-auto max-w-3xl text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Quote */}
      <div
        className="transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <blockquote className="mx-auto max-w-2xl text-balance text-base italic leading-8 text-navy-100 sm:text-lg">
          {"\u201C"}{review.text}{"\u201D"}
        </blockquote>
        <p className="mt-5 text-sm font-semibold tracking-wide text-gold-400">
          {review.author} &mdash; {review.source}
        </p>
      </div>

      <div className="mt-8 flex max-w-full flex-wrap justify-center gap-2">
        {selectedReviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Review ${i + 1}`}
            aria-pressed={i === current}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-gold-400 w-5 h-2"
                : "bg-navy-700 hover:bg-navy-500 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
