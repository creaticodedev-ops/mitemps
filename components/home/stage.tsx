"use client";

import { DemoMark } from "components/catalog/demo-mark";
import { Plate } from "components/catalog/plate";
import { availabilityLabel, categoryOf } from "lib/catalog";
import type { Product } from "lib/catalog";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Stage({ products }: { products: Product[] }) {
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
    setShift({ x: x * 14, y: y * 8 });
  }

  function onTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const touch = event.changedTouches[0];
    const start = Number(event.currentTarget.dataset.x || 0);
    if (!touch || count < 2) return;
    const delta = touch.clientX - start;
    if (delta < -40) setIndex((current) => (current + 1) % count);
    if (delta > 40) setIndex((current) => (current - 1 + count) % count);
  }

  const category = active ? categoryOf(active) : undefined;
  const spec = active?.specifications[0];
  const image = active?.images[0];

  return (
    <section
      className="flex flex-col pt-16 xl:min-h-[100svh] xl:pt-[7.4rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setShift({ x: 0, y: 0 });
      }}
    >
      <div
        className="relative mx-3 h-[48vh] min-h-[280px] border border-white/10 xl:mx-8 xl:h-auto xl:min-h-0 xl:flex-1"
        onPointerMove={onPointerMove}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          if (touch) event.currentTarget.dataset.x = String(touch.clientX);
        }}
        onTouchEnd={onTouchEnd}
      >
        <Plate
          key={active?.id || "empty"}
          src={image?.src}
          alt={image?.alt || active?.name || "Catalogue MI TEMPS"}
          priority
          shift={image ? shift : undefined}
        />
        {active ? (
          <div className="pointer-events-none absolute inset-x-5 top-4 flex items-start justify-between md:inset-x-8 md:top-6">
            {active.isDemo ? <DemoMark /> : <span />}
            <span className="text-[10px] tracking-[0.18em] text-white/80 uppercase">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        ) : null}
        {active ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pt-16 pb-4 md:px-8 md:pb-6">
            <p className="text-lg tracking-[-0.03em] text-white md:text-2xl">
              {active.name}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] tracking-[0.16em] text-white/75 uppercase md:grid-cols-3">
              <span>{category?.name || "Catalogue"}</span>
              <span>Réf. {active.reference}</span>
              <span className="col-span-2 md:col-span-1 md:text-right">
                {spec ? `${spec.label} ${spec.value}` : availabilityLabel(active.availability)}
              </span>
            </div>
          </div>
        ) : null}
      </div>

      <div className="grid gap-6 px-5 py-6 md:px-10 md:py-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end xl:px-14">
        <div>
          <p className="text-[11px] tracking-[0.24em] text-[#8d8d8d] uppercase">
            MI TEMPS — Oasis Group
          </p>
          <h1 className="mt-3 max-w-[12ch] text-[clamp(2.5rem,7vw,5.4rem)] leading-[0.86] font-medium tracking-[-0.055em] text-white uppercase">
            Équipez la performance.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d2d2d2] md:text-base">
            Des équipements professionnels pour créer des espaces sportifs à la
            hauteur de vos ambitions.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {active ? (
            <Link href={`/product/${active.handle}`} className="mt-btn">
              Voir le produit
            </Link>
          ) : (
            <Link href="/catalogue" className="mt-btn">
              Découvrir le catalogue
            </Link>
          )}
          <Link href="/devis" className="mt-btn-ghost">
            Demander un devis
          </Link>
        </div>
      </div>

      {count > 1 ? (
        <div
          className="flex gap-2 px-5 pb-6 md:px-10 xl:px-14"
          role="tablist"
          aria-label="Produits présentés"
        >
          {products.map((product, productIndex) => (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={productIndex === index}
              aria-label={product.name}
              onClick={() => setIndex(productIndex)}
              className={`h-px flex-1 transition-colors duration-500 ${
                productIndex === index ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
