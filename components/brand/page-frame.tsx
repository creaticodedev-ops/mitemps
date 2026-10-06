export function PageFrame({
  index,
  kicker,
  title,
  lede,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <article>
      <header className="px-5 pt-28 pb-6 md:px-10 md:pt-36 md:pb-10 lg:px-14">
        <p className="text-[11px] tracking-[0.28em] text-[#7a7a7a] uppercase">
          {index} — {kicker}
        </p>
        <h1 className="mt-5 max-w-5xl text-[2.45rem] leading-[0.94] font-medium tracking-[-0.045em] text-white md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c8c8c8] md:text-lg">
          {lede}
        </p>
      </header>
      {children}
    </article>
  );
}
