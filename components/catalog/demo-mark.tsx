export function DemoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center border border-white/30 px-2 py-1 text-[10px] tracking-[0.18em] text-white/80 uppercase ${className}`}
    >
      Démo
    </span>
  );
}
