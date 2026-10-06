import type { Product } from "lib/shopify/types";

export function TechnicalFrame({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  const category = product.tags.filter(Boolean).join(" · ") || "Catalogue";
  const option = product.options.find(
    (item) => item.name !== "Title" && item.values.length > 0,
  );

  const notes = [
    { label: "Catégorie", value: category },
    { label: "Référence", value: product.handle },
    {
      label: "Disponibilité",
      value: product.availableForSale ? "Disponible" : "Sur demande",
    },
    ...(option && option.values[0] && option.values[0] !== "Default Title"
      ? [{ label: option.name, value: option.values.join(" · ") }]
      : []),
  ];

  return (
    <div>
      <div className="relative bg-[#080808]">
        <div className="pointer-events-none absolute inset-3 border border-white/10 md:inset-5" />
        {children}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
        {notes.map((note) => (
          <div key={note.label} className="border-t border-white/15 pt-3">
            <dt className="text-[10px] tracking-[0.18em] text-[#808080] uppercase">
              {note.label}
            </dt>
            <dd className="mt-2 text-sm text-[#f4f4f4]">{note.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
