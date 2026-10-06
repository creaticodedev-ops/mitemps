import clsx from "clsx";

const Label = ({
  title,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx("absolute inset-x-0 bottom-0 flex w-full px-4 pb-4", {
        "lg:px-16 lg:pb-[32%]": position === "center",
      })}
    >
      <div className="flex w-full items-center justify-between gap-4 border border-white/15 bg-[#050505]/75 px-3 py-2 text-white backdrop-blur-md">
        <h3 className="line-clamp-2 text-sm tracking-tight">{title}</h3>
        <span className="shrink-0 text-[10px] tracking-[0.16em] uppercase">
          Devis
        </span>
      </div>
    </div>
  );
};

export default Label;
