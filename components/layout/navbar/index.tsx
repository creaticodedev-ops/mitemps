import { HeaderShell } from "components/brand/header-shell";
import { NavLinks } from "components/brand/nav-links";
import { Wordmark } from "components/brand/wordmark";
import { navigation } from "lib/brand";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";

export function Navbar() {
  return (
    <HeaderShell>
      <div className="flex h-16 items-center justify-between gap-3 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <div className="xl:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={[...navigation]} />
            </Suspense>
          </div>
          <Link href="/" prefetch aria-label="MI TEMPS, accueil" className="min-w-0">
            <Wordmark />
          </Link>
        </div>
        <Link href="/devis" className="mt-btn hidden shrink-0 sm:inline-flex">
          Demander un devis
        </Link>
      </div>
      <div className="hidden border-t border-white/10 xl:block">
        <NavLinks items={[...navigation]} />
      </div>
    </HeaderShell>
  );
}
