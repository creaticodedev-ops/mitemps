import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 pt-28 pb-20 md:px-10 lg:flex-row lg:gap-14 lg:px-14">
        <div className="w-full flex-none lg:w-52">
          <Collections />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
            Catalogue
          </p>
          <h1 className="mt-3 text-4xl tracking-[-0.045em] md:text-6xl">
            Équipez vos espaces.
          </h1>
          <div className="mt-12">
            <Suspense fallback={null}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Suspense>
          </div>
        </div>
        <div className="w-full flex-none lg:w-44">
          <FilterList list={sorting} title="Trier" />
        </div>
      </div>
      <Footer />
    </>
  );
}
