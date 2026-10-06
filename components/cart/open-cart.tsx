import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-white">
      <ShoppingCartIcon
        className={clsx(
          "h-4 transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {quantity ? (
        <div className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 min-w-4 items-center justify-center bg-white px-1 text-[10px] font-medium text-black">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
