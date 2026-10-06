"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({
  items,
}: {
  items: readonly { title: string; path: string }[];
}) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-5 px-8 py-3">
      {items.map((item, index) => {
        const active =
          pathname === item.path || pathname.startsWith(`${item.path}/`);

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              prefetch
              className={clsx(
                "group inline-flex items-baseline gap-2 text-[11px] tracking-[0.14em] uppercase",
                active ? "text-white" : "text-[#8d8d8d] hover:text-white",
              )}
            >
              <span className="text-[9px] tracking-[0.12em] text-[#555] group-hover:text-[#aaa]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
