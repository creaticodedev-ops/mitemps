import CartModal from "components/cart/modal";
import { HeaderShell } from "components/brand/header-shell";
import { NavLinks } from "components/brand/nav-links";
import { Wordmark } from "components/brand/wordmark";
import { navigation } from "lib/brand";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";

export async function Navbar() {
  return (
    <HeaderShell>
      <div className="flex h-[4.5rem] items-center justify-between gap-3 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-3 xl:gap-8">
          <div className="xl:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={navigation} />
            </Suspense>
          </div>
          <Link
            href="/"
            prefetch={true}
            aria-label="MI TEMPS, accueil"
            className="min-w-0"
          >
            <Wordmark />
          </Link>
          <NavLinks items={navigation} />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            aria-label="Rechercher un équipement"
            className="hidden h-11 w-11 items-center justify-center text-white xl:flex"
          >
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Link>
          <CartModal />
          <Link href="/devis" className="mt-btn hidden shrink-0 sm:inline-flex">
            Demander un devis
          </Link>
        </div>
      </div>
    </HeaderShell>
  );
}
