"use client";

import { CatalogMedia } from "components/catalog/media";
import type { ProductImage } from "lib/catalog";
import { useState } from "react";

export function LaunchGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const active = images[index];
  if (!active || images.length < 2) return null;

  return (
    <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
      <p className="text-[11px] tracking-[0.22em] text-[#808080] uppercase">
        Galerie
      </p>
      <div className="relative mt-6 h-[62vh] min-h-[280px] overflow-hidden bg-[#080808]">
        <CatalogMedia
          key={active.src}
          src={active.src}
          alt={active.alt}
          className="mt-unveil mt-product object-contain p-8 md:p-16"
        />
      </div>
      <div className="mt-4 flex gap-2" role="tablist" aria-label="Images du produit">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={imageIndex === index}
            aria-label={image.alt || `Image ${imageIndex + 1}`}
            onClick={() => setIndex(imageIndex)}
            className={`h-px flex-1 transition-colors duration-500 ${
              imageIndex === index ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
