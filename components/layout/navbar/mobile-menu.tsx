"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "lib/brand";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, Suspense, useEffect, useState } from "react";
import Search, { SearchSkeleton } from "./search";

export default function MobileMenu({
  menu,
}: {
  menu: readonly { title: string; path: string }[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  const items = menu.length ? menu : navigation;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Ouvrir le menu"
        className="flex h-11 w-11 items-center justify-center text-white"
      >
        <Bars3Icon className="h-5" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-500 ease-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-0 flex flex-col bg-[#050505] text-white">
              <div className="flex items-center justify-between px-4 py-4">
                <p className="text-[11px] tracking-[0.28em] uppercase">Menu</p>
                <button
                  className="flex h-11 w-11 items-center justify-center"
                  onClick={closeMobileMenu}
                  aria-label="Fermer le menu"
                >
                  <XMarkIcon className="h-6" />
                </button>
              </div>
              <div className="px-5">
                <Suspense fallback={<SearchSkeleton />}>
                  <Search />
                </Suspense>
              </div>
              <ul className="mt-6 flex-1 overflow-y-auto px-5">
                {items.map((item, index) => (
                  <li key={item.path} className="border-b border-white/10">
                    <Link
                      href={item.path}
                      prefetch={true}
                      onClick={closeMobileMenu}
                      className="flex items-baseline justify-between py-4 text-3xl tracking-[-0.04em]"
                    >
                      <span>{item.title}</span>
                      <span className="text-[11px] tracking-[0.16em] text-[#666]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-6">
                <Link
                  href="/devis"
                  onClick={closeMobileMenu}
                  className="mt-btn w-full"
                >
                  Demander un devis
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
