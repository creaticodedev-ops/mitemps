"use client";

import { Plate } from "components/catalog/plate";
import { availabilityLabel } from "lib/catalog";
import type { Category, Product } from "lib/catalog";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Chapter = {
  category: Category;
  products: Product[];
};

export function Chapters({ chapters }: { chapters: Chapter[] }) {
  if (!chapters.length) return null;

  return (
    <div>
      {chapters.map((chapter, index) => (
        <ChapterScene
          key={chapter.category.id}
          chapter={chapter}
          index={index}
        />
      ))}
    </div>
  );
}

function ChapterScene({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const multiple = chapter.products.length > 1;
  const product = chapter.products[active] ?? chapter.products[0];

  useEffect(() => {
    if (!multiple) return;
    const node = ref.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const total = node.offsetHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 0.999) : 0;
      setActive(Math.floor(progress * chapter.products.length));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapter.products.length, multiple]);

  if (!product) return null;
  const image = product.images[0];
  const spec = product.specifications[0];

  return (
    <section
      ref={ref}
      id={chapter.category.handle}
      className="border-t border-white/10"
    >
      <div className={multiple ? "md:h-[220vh]" : undefined}>
        <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center">
          <div className="grid gap-8 px-5 py-12 md:grid-cols-12 md:px-10 md:py-0 lg:px-14">
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.22em] text-[#808080] uppercase">
                {String(index + 1).padStart(2, "0")} / {chapter.category.name}
              </p>
              <h2 className="mt-4 text-5xl leading-[0.9] tracking-[-0.05em] uppercase md:text-6xl">
                {chapter.category.name}
              </h2>
              {chapter.category.description ? (
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#c8c8c8]">
                  {chapter.category.description}
                </p>
              ) : null}
              <Link
                href={`/categories/${chapter.category.handle}`}
                className="mt-link mt-6 inline-block text-[11px] tracking-[0.18em] uppercase"
              >
                Entrer dans le chapitre
              </Link>
            </div>
            <div className="hidden h-[68vh] md:col-span-8 md:block">
              <Plate src={image?.src} alt={image?.alt || product.name}>
                <div className="pointer-events-none absolute inset-x-6 bottom-5 flex items-end justify-between gap-4 text-[10px] tracking-[0.16em] text-white/75 uppercase">
                  <span>
                    {String(active + 1).padStart(2, "0")} — {product.name}
                  </span>
                  <span>Réf. {product.reference}</span>
                  <span>
                    {spec
                      ? `${spec.label} ${spec.value}`
                      : availabilityLabel(product.availability)}
                  </span>
                </div>
              </Plate>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 px-5 pb-12 md:hidden">
        {chapter.products.map((item, itemIndex) => {
          const shot = item.images[0];
          const note = item.specifications[0];
          return (
            <article key={item.id}>
              <div className="h-[46vh] min-h-[240px]">
                <Plate src={shot?.src} alt={shot?.alt || item.name} />
              </div>
              <p className="mt-4 text-[11px] tracking-[0.18em] text-[#808080] uppercase">
                {String(itemIndex + 1).padStart(2, "0")} — Réf. {item.reference}
              </p>
              <h3 className="mt-2 text-3xl tracking-[-0.04em]">{item.name}</h3>
              {note ? (
                <p className="mt-2 text-sm text-[#c8c8c8]">
                  {note.label} — {note.value}
                </p>
              ) : null}
              <Link
                href={`/product/${item.handle}`}
                className="mt-link mt-4 inline-block text-[11px] tracking-[0.18em] uppercase"
              >
                Voir le produit
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
