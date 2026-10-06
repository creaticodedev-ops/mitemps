import type { Variant } from "lib/catalog";

export type SelectorOption = {
  id: string;
  name: string;
  values: string[];
};

export function optionsFromVariants(variants: Variant[]): SelectorOption[] {
  const grouped = new Map<string, SelectorOption>();

  for (const variant of variants) {
    const current = grouped.get(variant.name);
    if (!current) {
      grouped.set(variant.name, {
        id: variant.name,
        name: variant.name,
        values: [variant.value],
      });
    } else if (!current.values.includes(variant.value)) {
      current.values.push(variant.value);
    }
  }

  return [...grouped.values()];
}
