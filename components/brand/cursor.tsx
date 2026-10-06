"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const node = ref.current;
    if (!fine || reduce || !node) return;

    document.documentElement.classList.add("mt-cursor");

    const move = (event: PointerEvent) => {
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      document.documentElement.classList.remove("mt-cursor");
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="mt-cursor-dot pointer-events-none fixed top-0 left-0 z-[70] h-2.5 w-2.5 rounded-full border border-white"
      style={{ transform: "translate3d(-40px, -40px, 0)" }}
    />
  );
}
