"use client";

import { useEffect } from "react";

// Adds `is-visible` class to elements with `.reveal` when they enter the viewport.
// Pairs with the CSS in app/globals.css for a subtle fade-in on scroll.
export default function RevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll(".reveal");

    // Respect reduced-motion preferences.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
