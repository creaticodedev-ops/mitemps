import clsx from "clsx";

export function Wordmark({ size = "header" }: { size?: "header" | "footer" }) {
  if (size === "footer") {
    return (
      <span className="block">
        <span className="block text-[16vw] leading-[0.8] font-medium tracking-[-0.06em] text-white md:text-[8.5rem]">
          MI TEMPS
        </span>
        <span className="mt-4 block text-[11px] tracking-[0.42em] text-[#8d8d8d] uppercase">
          Oasis Group
        </span>
      </span>
    );
  }

  return (
    <span className="flex flex-col leading-none">
      <span
        className={clsx(
          "font-medium tracking-[0.22em] whitespace-nowrap text-white uppercase",
          "text-[13px] sm:text-[15px]",
        )}
      >
        MI TEMPS
      </span>
      <span className="mt-1 text-[8px] tracking-[0.38em] text-[#8a8a8a] uppercase">
        Oasis Group
      </span>
    </span>
  );
}
