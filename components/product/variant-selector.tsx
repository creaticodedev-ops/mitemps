"use client";

import clsx from "clsx";
import type { Variant } from "lib/catalog";
import { useRouter, useSearchParams } from "next/navigation";
import type { SelectorOption } from "./options";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants,
}: {
  options: SelectorOption[];
  variants: Variant[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.available,
    [variant.name.toLowerCase()]: variant.value,
  }));

  const updateOption = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return options.map((option) => (
    <form key={option.id}>
      <dl className="mb-8">
        <dt className="mb-4 text-sm tracking-wide uppercase">{option.name}</dt>
        <dd className="flex flex-wrap gap-3">
          {option.values.map((value) => {
            const optionNameLowerCase = option.name.toLowerCase();
            const optionParams: Record<string, string> = {};
            searchParams.forEach((paramValue, key) => {
              optionParams[key] = paramValue;
            });
            optionParams[optionNameLowerCase] = value;

            const filtered = Object.entries(optionParams).filter(([key, paramValue]) =>
              options.find(
                (item) =>
                  item.name.toLowerCase() === key &&
                  item.values.includes(paramValue),
              ),
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, paramValue]) =>
                  combination[key] === paramValue && combination.availableForSale,
              ),
            );
            const isActive = searchParams.get(optionNameLowerCase) === value;

            return (
              <button
                formAction={() => updateOption(optionNameLowerCase, value)}
                key={value}
                aria-disabled={!isAvailableForSale}
                disabled={!isAvailableForSale}
                title={`${option.name} ${value}${!isAvailableForSale ? " (indisponible)" : ""}`}
                className={clsx(
                  "flex min-w-12 items-center justify-center rounded-full border bg-neutral-900 px-2 py-1 text-sm",
                  {
                    "cursor-default ring-2 ring-white": isActive,
                    "ring-1 ring-transparent transition duration-300 ease-in-out hover:ring-white":
                      !isActive && isAvailableForSale,
                    "relative z-10 cursor-not-allowed overflow-hidden text-neutral-500 ring-1 ring-neutral-700 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-700":
                      !isAvailableForSale,
                  },
                )}
              >
                {value}
              </button>
            );
          })}
        </dd>
      </dl>
    </form>
  ));
}
