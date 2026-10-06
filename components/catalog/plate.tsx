import { CatalogMedia } from "components/catalog/media";

export function CornerMarks() {
  const marks = [
    "top-3 left-3 border-t border-l",
    "top-3 right-3 border-t border-r",
    "bottom-3 left-3 border-b border-l",
    "bottom-3 right-3 border-b border-r",
  ];

  return (
    <>
      {marks.map((mark) => (
        <span
          key={mark}
          aria-hidden
          className={`pointer-events-none absolute h-4 w-4 border-white/50 ${mark}`}
        />
      ))}
    </>
  );
}

export function Plate({
  src,
  alt,
  priority = false,
  shift,
  children,
}: {
  src?: string;
  alt: string;
  priority?: boolean;
  shift?: { x: number; y: number };
  children?: React.ReactNode;
}) {
  return (
    <div className="relative h-full min-h-[240px] overflow-hidden bg-[#080808]">
      <CornerMarks />
      {src ? (
        <div
          className="absolute inset-0"
          style={
            shift
              ? { transform: `translate3d(${shift.x}px, ${shift.y}px, 0) scale(1.06)` }
              : undefined
          }
        >
          <CatalogMedia
            src={src}
            alt={alt}
            priority={priority}
            className="mt-unveil mt-product object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <p className="text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
            00 — Catalogue
          </p>
          <p className="mt-3 max-w-xs text-2xl tracking-[-0.04em] text-white">
            Aucun produit publié.
          </p>
        </div>
      )}
      {children}
    </div>
  );
}
