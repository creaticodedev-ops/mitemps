"use client";

import type { CatalogChapter } from "lib/stage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function CatalogChapters({ chapters }: { chapters: CatalogChapter[] }) {
  if (!chapters.length) return null;

  return (
    <div>
      {chapters.map((chapter, chapterIndex) => (
        <Chapter
          key={chapter.handle}
          chapter={chapter}
          chapterIndex={chapterIndex}
        />
      ))}
    </div>
  );
}

function Chapter({
  chapter,
  chapterIndex,
}: {
  chapter: CatalogChapter;
  chapterIndex: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const active = chapter.products[index] ?? chapter.products[0];
  const multiple = chapter.products.length > 1;

  useEffect(() => {
    if (!multiple) return;
    const node = ref.current;
    if (!node) return;

    const onScroll = () => {
      if (window.matchMedia("(max-width: 767px)").matches) return;
      const rect = node.getBoundingClientRect();
      const total = node.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-rect.top, 0), total) / total;
      const next = Math.min(
        chapter.products.length - 1,
        Math.floor(progress * chapter.products.length),
      );
      setIndex(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapter.products.length, multiple]);

  if (!active) return null;

  return (
    <section
      ref={ref}
      id={chapter.handle}
      className={`border-t border-white/10 ${multiple ? "md:h-[240vh]" : ""}`}
    >
      <div className="px-5 py-14 md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:px-10 md:py-0 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
              {String(chapterIndex + 1).padStart(2, "0")} — Catégorie
            </p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em] md:text-6xl lg:text-7xl">
              {chapter.title}
            </h2>
          </div>
          <Link
            href={chapter.path}
            className="mt-link shrink-0 text-[11px] tracking-[0.18em] uppercase"
          >
            Explorer
          </Link>
        </div>

        <div className="mt-8 hidden items-center gap-10 md:grid md:grid-cols-12">
          <div className="relative aspect-[4/5] bg-[#0b0b0b] md:col-span-6 lg:col-span-5">
            {active.image ? (
              <Image
                key={active.handle}
                src={active.image}
                alt={active.alt}
                fill
                sizes="40vw"
                className="mt-unveil mt-product object-contain p-8"
              />
            ) : null}
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
            <p className="text-5xl tracking-[-0.06em] text-[#2a2a2a]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-3xl tracking-[-0.04em] lg:text-5xl">
              {active.title}
            </h3>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
              {active.category} · Réf. {active.handle}
            </p>
            {active.description ? (
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#d0d0d0]">
                {active.description}
              </p>
            ) : null}
            <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                  Disponibilité
                </dt>
                <dd className="mt-2 text-sm">
                  {active.available ? "Disponible" : "Sur demande"}
                </dd>
              </div>
              {active.specLabel && active.specValue ? (
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                    {active.specLabel}
                  </dt>
                  <dd className="mt-2 text-sm">{active.specValue}</dd>
                </div>
              ) : null}
            </dl>
            <Link
              href={`/product/${active.handle}`}
              className="mt-btn mt-8"
            >
              Voir le produit
            </Link>
          </div>
        </div>

        <div className="mt-8 space-y-10 md:hidden">
          {chapter.products.map((product, productIndex) => (
            <article key={product.handle}>
              <div className="relative aspect-[4/5] bg-[#0b0b0b]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="100vw"
                    className="mt-product object-contain p-6"
                  />
                ) : null}
              </div>
              <p className="mt-4 text-[11px] tracking-[0.18em] text-[#777] uppercase">
                {String(productIndex + 1).padStart(2, "0")} · {product.category}
              </p>
              <h3 className="mt-2 text-2xl tracking-[-0.04em]">{product.title}</h3>
              <Link
                href={`/product/${product.handle}`}
                className="mt-link mt-3 inline-block text-[11px] tracking-[0.16em] uppercase"
              >
                Voir le produit
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
