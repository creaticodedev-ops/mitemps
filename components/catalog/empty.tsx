export function EmptyState({
  index,
  kicker,
  title,
  text,
}: {
  index: string;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 px-6 py-10 md:px-10 md:py-14">
      <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
        {index} — {kicker}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl tracking-[-0.045em] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#a3a3a3]">
        {text}
      </p>
    </div>
  );
}
