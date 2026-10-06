"use client";

import { useEffect, useState } from "react";
import type { StageProduct } from "lib/stage";
import Image from "next/image";
import Link from "next/link";

export function HeroStage({ products }: { products: StageProduct[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const active = products[index];
  const count = products.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setShift({ x: x * 12, y: y * 8 });
  }

  const copy = (
    <>
      <p className="mt-d1 text-[11px] tracking-[0.26em] text-[#9a9a9a] uppercase">
        MI TEMPS — Oasis Group
      </p>
      <h1 className="mt-d2 mt-3 max-w-[11ch] text-[2.15rem] leading-[0.9] font-medium tracking-[-0.045em] text-white uppercase sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
        Équipez la performance.
      </h1>
      {active ? (
        <p className="mt-d3 mt-4 text-[11px] tracking-[0.16em] text-white uppercase">
          {active.title}
        </p>
      ) : (
        <p className="mt-d3 mt-4 max-w-xs text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Le catalogue original s’affiche ici dès qu’il est connecté.
        </p>
      )}
      <p className="mt-d3 mt-3 max-w-md text-sm leading-relaxed text-[#d5d5d5]">
        Des équipements professionnels pour créer des espaces sportifs à la
        hauteur de vos ambitions.
      </p>
      <div className="mt-d5 mt-5 flex flex-col gap-3 sm:flex-row">
        <Link href="/solutions" className="mt-btn">
          Découvrir nos solutions
        </Link>
        <Link href="/devis" className="mt-btn-ghost">
          Demander un devis
        </Link>
      </div>
      {count > 1 ? (
        <div className="mt-5 flex gap-2" role="tablist" aria-label="Produits">
          {products.map((product, productIndex) => (
            <button
              key={product.handle}
              type="button"
              role="tab"
              aria-selected={productIndex === index}
              aria-label={product.title}
              onClick={() => setIndex(productIndex)}
              className={`h-px flex-1 transition-colors duration-500 ${
                productIndex === index ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      ) : null}
    </>
  );

  if (!active?.image) {
    return (
      <section className="relative flex flex-col bg-[#050505] px-5 pt-28 pb-12 md:min-h-[100svh] md:justify-center md:px-10 md:pt-28 lg:px-14">
        <div className="pointer-events-none absolute inset-4 border border-white/10 md:inset-6" />
        <div className="relative max-w-5xl">{copy}</div>
      </section>
    );
  }

  return (
    <section
      className="relative bg-[#050505] lg:h-[100svh]"
      onPointerMove={onPointerMove}
      onPointerLeave={() => setShift({ x: 0, y: 0 })}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex min-h-[100svh] flex-col lg:grid lg:h-full lg:min-h-0 lg:grid-cols-12">
        <div className="relative mt-[4.5rem] h-[38vh] min-h-[220px] bg-[#080808] lg:col-span-7 lg:mt-0 lg:h-auto">
          <div className="pointer-events-none absolute inset-4 border border-white/10 lg:inset-8" />
          <div
            className="absolute inset-6 lg:inset-16"
            style={{
              transform: `translate3d(${shift.x}px, ${shift.y}px, 0)`,
            }}
          >
            <Image
              key={active.handle}
              src={active.image}
              alt={active.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="mt-unveil mt-product object-contain"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-5 bottom-4 hidden items-end justify-between text-[10px] tracking-[0.18em] text-white/70 uppercase lg:flex lg:inset-x-10 lg:bottom-8">
            <span>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
            <span>{active.category}</span>
            <span>Réf. {active.handle}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-end px-5 pt-5 pb-6 lg:col-span-5 lg:px-12 lg:pt-28 lg:pb-12">
          {copy}
        </div>
      </div>
    </section>
  );
}
