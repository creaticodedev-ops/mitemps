"use client";

import clsx from "clsx";
import type { Menu } from "lib/shopify/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ items }: { items: Menu[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-4 xl:flex 2xl:gap-6">
      {items.map((item) => {
        const active =
          item.path === "/"
            ? pathname === "/"
            : pathname === item.path || pathname.startsWith(`${item.path}/`);

        return (
          <li key={item.path}>
            <Link
              href={item.path}
              prefetch={true}
              className={clsx(
                "mt-link text-[10px] tracking-[0.16em] uppercase transition-colors duration-300 2xl:text-[11px]",
                active ? "text-white" : "text-[#9a9a9a] hover:text-white",
              )}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
